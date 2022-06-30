require('../../../env');
const userController = require('../../../controllers/user')
const User = require('../../../models/User');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('user controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('getAll', () => {
        test('User getAll with a 200 status code', async () => {
            jest.spyOn(User, 'getAll').mockResolvedValue(['user1', 'user2']);
            await userController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['user1', 'user2']);
        })

        test('User getAll with a 500 status code', async () => {
            jest.spyOn(User, 'getAll').mockRejectedValue("User not found");
            await userController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(500);
        })
    });

    describe('findById', () => {
        test('User findById with a 200 status code', async () => {
            let testUser = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(User, 'findById').mockResolvedValue(new User(testUser));
                
            const mockReq = { params: { id: 1 } }
            await userController.findById(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new User(testUser));
        })

        test('User findById with a 404 status code', async () => {
            jest.spyOn(User, 'findById').mockRejectedValue("User not found");
            await userController.findById(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });

    describe('create', () => {
        test('User create with a 201 status code', async () => {
            let testUser = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            jest.spyOn(User, 'create').mockResolvedValue(new User(testUser));
                
            const mockReq = { body: testUser }
            await userController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new User(testUser));
        })

        test('User create with a 422 status code', async () => {
            jest.spyOn(User, 'create').mockRejectedValue("User could not be created");
            await userController.create(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(422);
        })
    });

    describe('update', () => {
        test('User update with a 202 status code', async () => {
            let testUser = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            jest.spyOn(User, 'update').mockResolvedValue(new User(testUser));
                
            const mockReq = { body: testUser }
            await userController.update(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(202);
            expect(mockJson).toHaveBeenCalledWith(new User(testUser));
        })

        test('User update with a 404 status code', async () => {
            jest.spyOn(User, 'update').mockRejectedValue("User could not be updated");
            await userController.update(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });

    describe('destroy', () => {
        test('User delete with 204 status code', async () => {
            let testUser = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            jest.spyOn(User, 'destroy').mockResolvedValue(new User(testUser));
            const mockReq = { params: { id: 1 } }
            await userController.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })

        test('User destroy with a 404 status code', async () => {
            jest.spyOn(User, 'destroy').mockRejectedValue({"err": "User could not be deleted"});
            const mockReq = { params: { id: 1 } }
            await userController.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });

    describe('login', () => {
        test('User login with a 200 status code', async () => {
            let testUser = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(User, 'login').mockResolvedValue(new User(testUser));
                
            const mockReq = { params: { id: 1 } }
            await userController.login(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new User(testUser));
        })

        test('User login with a 401 status code', async () => {
            jest.spyOn(User, 'login').mockRejectedValue({"err": "User could not login"});
            await userController.login(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(401);
        })
    });

    describe('logout', () => {
        test('User logout with a 200 status code', async () => {
            jest.spyOn(User, 'logout').mockResolvedValue("User logout success");
                
            const mockReq = { params: { id: 1 } }
            await userController.logout(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
        })

        test('User logout with a 401 status code', async () => {
            jest.spyOn(User, 'logout').mockRejectedValue({"err": "User could not logout"});
            await userController.logout(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(401);
        })
    });
    
})