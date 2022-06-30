require('../../../env');
const goalController = require('../../../controllers/goal')
const Goal = require('../../../models/Goal');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('goal controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('getAll', () => {
        test('Goal getAll with a 200 status code', async () => {
            jest.spyOn(Goal, 'getAll').mockResolvedValue(['goal1', 'goal2']);
            await goalController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['goal1', 'goal2']);
        })

        test('Goal getAll with a 500 status code', async () => {
            jest.spyOn(Goal, 'getAll').mockRejectedValue("Goal not found");
            await goalController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(500);
        })
    });

    describe('findById', () => {
        test('Goal findById with a 200 status code', async () => {
            let testGoal = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(Goal, 'findById').mockResolvedValue(new Goal(testGoal));
                
            const mockReq = { params: { id: 1 } }
            await goalController.findById(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Goal(testGoal));

        })

        test('Goal findById with a 404 status code', async () => {
            jest.spyOn(Goal, 'findById').mockRejectedValue("Goal not found");
            await goalController.findById(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });

    describe('findByUserId', () => {
        test('Goal findByUserId with a 200 status code', async () => {
            let testGoal = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(Goal, 'findByUserId').mockResolvedValue(new Goal(testGoal));
                
            const mockReq = { params: { id: 1 } }
            await goalController.findByUserId(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Goal(testGoal));
        })

        test('Goal findByUserId with a 404 status code', async () => {
            jest.spyOn(Goal, 'findByUserId').mockRejectedValue("Goal not found");
            await goalController.findByUserId(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });

    describe('create', () => {
        test('Goal create with a 201 status code', async () => {
            let testGoal = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            jest.spyOn(Goal, 'create').mockResolvedValue(new Goal(testGoal));
                
            const mockReq = { body: testGoal }
            await goalController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Goal(testGoal));
        })

        test('Goal create with a 422 status code', async () => {
            jest.spyOn(Goal, 'create').mockRejectedValue("Goal could not be created");
            await goalController.create(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(422);
        })
    });

    describe('update', () => {
        test('Goal update with a 202 status code', async () => {
            let testGoal = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            jest.spyOn(Goal, 'update').mockResolvedValue(new Goal(testGoal));
                
            const mockReq = { body: testGoal }
            await goalController.update(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(202);
            expect(mockJson).toHaveBeenCalledWith(new Goal(testGoal));
        })

        test('Goal update with a 404 status code', async () => {
            jest.spyOn(Goal, 'update').mockRejectedValue("Goal could not be updated");
            await goalController.update(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });

    describe('destroy', () => {
        test('Goal delete with 204 status code', async () => {
            let testGoal = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            jest.spyOn(Goal, 'destroy').mockResolvedValue(new Goal(testGoal));
            const mockReq = { params: { id: 1 } }
            await goalController.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })

        test('Goal destroy with a 404 status code', async () => {
            jest.spyOn(Goal, 'destroy').mockRejectedValue("Goal could not be deleted");
            const mockReq = { params: { id: 1 } }
            await goalController.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });
    
})
