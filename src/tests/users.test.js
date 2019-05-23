const usersController = require('../api-server/resources/users/controllers')
const models = require('../api-server/db/models')


describe('Listing all users', () => {

    it('GET all users', async (done) => {
        
        models.User.findAll = await jest.fn().mockReturnValue(['1', '2', '3']);
        let mockResponse = {
            status: jest.fn(),
            send: jest.fn(),
            json: jest.fn()
        };
        mockResponse.status.mockReturnValue(mockResponse);
        mockResponse.json.mockReturnValue(mockResponse);

        let mockRequest = {
            body: {}
        };

        const users = await usersController.getUsers(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        done();
    });
})

