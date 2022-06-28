const workoutController = require('../../../controllers/workout')
const Workout = require('../../../models/Workout');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('workout controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('getAll', () => {
        test('Workout getAll with a 200 status code', async () => {
            jest.spyOn(Workout, 'getAll').mockResolvedValue(['workout1', 'workout2']);
            await workoutController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['workout1', 'workout2']);
        })

        test('Workout getAll with a 500 status code', async () => {
            jest.spyOn(Workout, 'getAll').mockRejectedValue("Workout not found");
            await workoutController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(500);
        })
    });

    describe('findById', () => {
        test('Workout findById with a 200 status code', async () => {
            let testWorkout = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(Workout, 'findById').mockResolvedValue(new Workout(testWorkout));
                
            const mockReq = { params: { id: 1 } }
            await workoutController.findById(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Workout(testWorkout));
        })

        test('Workout findById with a 404 status code', async () => {
            jest.spyOn(Workout, 'findById').mockRejectedValue("Workout not found");
            await workoutController.findById(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });

    describe('findByUserId', () => {
        test('Workout findByUserId with a 200 status code', async () => {
            let testWorkout = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(Workout, 'findByUserId').mockResolvedValue(new Workout(testWorkout));
                
            const mockReq = { params: { id: 1 } }
            await workoutController.findByUserId(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Workout(testWorkout));
        })

        test('Workout findByUserId with a 404 status code', async () => {
            jest.spyOn(Workout, 'findByUserId').mockRejectedValue("Workout not found");
            await workoutController.findByUserId(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });

    describe('create', () => {
        test('Workout create with a 201 status code', async () => {
            let testWorkout = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            jest.spyOn(Workout, 'create').mockResolvedValue(new Workout(testWorkout));
                
            const mockReq = { body: testWorkout }
            await workoutController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Workout(testWorkout));
        })

        test('Workout create with a 422 status code', async () => {
            jest.spyOn(Workout, 'create').mockRejectedValue("Workout could not be created");
            await workoutController.create(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(422);
        })
    });

    describe('update', () => {
        test('Workout update with a 202 status code', async () => {
            let testWorkout = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            jest.spyOn(Workout, 'update').mockResolvedValue(new Workout(testWorkout));
                
            const mockReq = { body: testWorkout }
            await workoutController.update(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(202);
            expect(mockJson).toHaveBeenCalledWith(new Workout(testWorkout));
        })

        test('Workout update with a 404 status code', async () => {
            jest.spyOn(Workout, 'update').mockRejectedValue("Workout could not be updated");
            await workoutController.update(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });

    describe('destroy', () => {
        test('Workout delete with 204 status code', async () => {
            jest.spyOn(Workout.prototype, 'destroy').mockResolvedValue('Deleted');
            
            const mockReq = { params: { id: 1 } }
            await workoutController.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })

        test('Workout destroy with a 404 status code', async () => {
            jest.spyOn(Workout.prototype, 'destroy').mockRejectedValue({"err": "Workout could not be deleted"});
            await workoutController.destroy(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });
    
})