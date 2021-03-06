const usersController = require('../api-server/resources/users/controllers')
const models = require('../api-server/db/models')


describe('Listing all users', () => {

    let mockRequest = {
        body: {}
    };

    let mockResponse = {
        status: jest.fn(),
        send: jest.fn(),
        json: jest.fn()
    };

    it('GET all users successfully', async (done) => {
        models.User.findAll = await jest.fn().mockReturnValue(['1', '2', '3']);

        mockResponse.status.mockReturnValue(mockResponse);
        mockResponse.json.mockReturnValue(mockResponse);

        const users = await usersController.getUsers(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        done();
    });

    it('GET all users with failure', async (done) => {
        models.User.findAll = await jest.fn().mockImplementation(() => { throw new Error('FAILED') });
        
        mockResponse.status.mockReturnValue(mockResponse);
        mockResponse.json.mockReturnValue(mockResponse);

        const users = await usersController.getUsers(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(500);
        done();
    });

    it('GET all users and users list is empty', async (done) => {
        models.User.findAll = await jest.fn().mockReturnValue(null);

        mockResponse.status.mockReturnValue(mockResponse);
        mockResponse.json.mockReturnValue(mockResponse);

        const users = await usersController.getUsers(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(204);
        done();
    })
});

