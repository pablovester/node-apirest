const Sequelize = require('sequelize');
const models = require('../../db/models');
const config = require('../../config/config');
const Joi = require('@hapi/joi');

const getUsers = async (req, res) =>{
    try {
        const users = await models.User.findAll();
        if (users !== null) {
            res.status(200).json({
                message: 'List of users:',
                data: { users }
            });
        }else{
            res.status(204).json({
                message: 'No users found',
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

const getById = async (req, res) => {
    try {
        const users = await models.User.findByPk(req.params.id);
        if (users !== null){
            return res.status(200).json({
                message: 'The queried ID matches the following user:',
                data: { users },
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
            error: ex
        });
    }
};

const postUser = async (req, res) => {
    try {
        const result = validateUser(req.body);
        if(result.error) {
            res.status(400).send(result.error.details[0].message);
            return;
        } 

        let user = await models.User.findOne({
            where: {
                 email: req.body.email 
                }
        });
        if (user) return res.status(400).send('Mail already registered.');
        //
        let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        };
        const createdUser = await models.User.create(newUser);
        if (createdUser === null){
            return res.status(400).json({
                message: 'It was not possible to create the user.',
                data: {}
            });
        }else{
            return res.status(200).json({
            message: 'User created!'
        });
        }
    } catch (err) {
        res.status(500).json({
            message: 'An error ocurred',
            data: {},
            error: err
        })
    }
}

const deleteUser = async (req, res) =>{
    try {
        const deleteUsers = await models.User.findByPk(req.params.id); /*probar borrando esta linea*/
        models.User.destroy({
             where: {
                 id: req.params.id
             }
        });
        res.status(200).json({
            message: 'User deleted.',
            data: { deleteUsers }
        });
    } catch (err) {
        res.status(500).json({
            message: 'An error ocurred',
            data: {},
            error: err
        })
    }
};
const updateUser = async (req, res) => {
    try {
        const updatedUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
        models.User.update(updatedUser,
            {returning: true, where:{id: req.params.id} }
        );
        res.status(200).json({
            message: { updatedUser }
        });
    } catch (err) {
        res.status(500).json({
            message: 'An error ocurred',
            data: {},
            error: ex
        })
    }
};

function validateUser(req) {
    const schema = {
        firstName: Joi.string().min(3).max(50).required(),
        lastName: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(3).max(50).required()
    };
    return Joi.validate(req, schema);
  };

module.exports = { getUsers, getById, postUser, deleteUser, updateUser };