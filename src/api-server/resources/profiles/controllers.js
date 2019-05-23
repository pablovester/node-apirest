const Sequelize = require('sequelize');
const models = require('../../db/models');
const config = require('../../config/config');
const Joi = require('@hapi/joi');

const getProfiles = async (req, res) =>{
    try {
        const profiles = await models.Profiles.findAll();
        if (profiles !== null) {
            res.status(200).json({
                message: 'List of profiles:',
                data: { profiles }
            });
        }else{
            res.status(204).json({
                message: 'No profiles found.',
                data: {}
            })
        }
        
    } catch (err) {
        res.status(500).json({
            message: 'An error ocurred',
            data: {},
            error: err
        })
    }
};

const getProfileById = async (req, res) => {
    try {
        const profiles = await models.Profiles.findByPk(req.params.id);
        if (profiles !== null){
            return res.status(200).json({
                message: 'The queried ID matches the following profile:',
                data: { profiles },
                error: null
            });
        }else{
            res.status(400).json({
                message: 'No users match such ID',
                data: {},
                error: ''
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'An error ocurred.',
            data: {},
            error: err
        });
    }
};

const postProfile = async (req, res) => {
    try {
        const result = validateProfile(req.body);
        if(result.error) {
            res.status(400).send(result.error.details[0].message);
            return;
        } 

        let profile = await models.Profiles.findOne({
            where: {
                 name: req.body.name
                }
        });
        if (profile) return res.status(400).send('Mail already registered.');
        //
        let newProfile = {
            name: req.body.name,
            description: req.body.description
        };
        const createdProfile = await models.Profiles.create(newProfile);
        if (createdProfile === null){
            return res.status(400).json({
                message: 'It was not possible to create a profile.',
                data: {}
            });
        }else{
            return res.status(200).json({
            message: 'Profile created successfully.',
            data: {createdProfile}
        });
        }
    } catch (err) {
        res.status(500).json({
            message: 'An error ocurred.',
            data: {},
            error: err
        })
    }
};

const deleteProfile = async (req, res) =>{
    try {
        const deleteProfiles = await models.Profiles.findByPk(req.params.id);
        models.Profiles.destroy({
             where: {
                 id: req.params.id
             }
        });
        res.status(200).json({
            message: 'Profile deleted.',
            data: { deleteProfiles }
        });
    } catch (err) {
        res.status(500).json({
            message: 'An error ocurred.',
            data: {},
            error: err
        })
    }
};

const updateProfile = async (req, res) => {
    try {
        const result = validateProfile(req.body);
        if(result.error) {
            res.status(400).send(result.error.details[0].message);
            return;
        }
        const updatedProfile = {
            name: req.body.name,
            description: req.body.description
        }
        models.Profiles.update(updatedProfile,
            {returning: true, where:{id: req.params.id} }
        );
        res.status(200).json({
            message: 'Profile updated.',
            data: { updatedProfile }
        });
    } catch (err) {
        res.status(500).json({
            message: 'An error ocurred',
            data: {},
            error: ex
        })
    }
};

function validateProfile(req) {
    const schema = {
        name: Joi.string().min(4).max(10).required(),
        description: Joi.string().min(3).max(50).required()
    };
    return Joi.validate(req, schema);
};

module.exports = { getProfiles, getProfileById, postProfile, deleteProfile, updateProfile };