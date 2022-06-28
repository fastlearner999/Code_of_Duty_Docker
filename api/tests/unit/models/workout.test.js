const Workout = require('../../../models/Workout');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

const testingWorkoutRow = { 
    rows: [
        {id: 1, user_id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'}, 
        {id: 2, user_id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'},
        {id: 3, user_id: 3, email: 'ccc@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'E', last_name: 'F', gender: 'M'},
        {id: 4, user_id: 4, email: 'ddd@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'G', last_name: 'H', gender: 'F'}
    ]
};

describe('Workout', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('getAll', () => {
        test('Test getAll workout success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingWorkoutRow);
            const workouts = await Workout.getAll();
            expect(workouts).toHaveLength(4);
        })

        test('Test getAll workout fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingWorkoutRow);
            const workouts = await Workout.getAll();
            expect(workouts).toHaveBeenCalledWith({"err": "Workout not found"});
        })
    });

    describe('findById', () => {
        test('Test findById workout success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingWorkoutRow);
            const workout = await Workout.findById(3);
            expect(workout).toHaveLength(1);
            expect(workout).toBeInstanceOf(Workout);
        })

        test('Test findById workout fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingWorkoutRow);
            const workouts = await Workout.findById(3);
            expect(workouts).toHaveBeenCalledWith({"err": "Workout not found"});
        })
    });
    
    describe('findByUserId', () => {
        test('Test findByUserId workout success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingWorkoutRow);
            const workout = await Workout.findByUserId(3);
            expect(workout).toHaveLength(1);
            expect(workout).toBeInstanceOf(Workout);
        })

        test('Test findByUserId workout fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingWorkoutRow);
            const workouts = await Workout.findByUserId(3);
            expect(workouts).toHaveBeenCalledWith({"err": "Workout not found"});
        })
    });

    describe('create', () => {
        test('Test create workout success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingWorkoutRow);
            let newWorkout = {id: 5, email: 'eee@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'I', last_name: 'J', gender: 'M'};
            const result = await Workout.create(newWorkout);
            expect(result).toHaveProperty('email', 'eee@gmail.com');
        })

        test('Test create workout fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingWorkoutRow);
            let newWorkout = {id: 5, email: 'eee@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'I', last_name: 'J', gender: 'M'};
            const result = await Workout.create(newWorkout);
            expect(result).toHaveBeenCalledWith({"err": "Workout could not be created"});
        })
    });

    describe('update', () => {
        test('Test update workout success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingWorkoutRow);
            let updateWorkout = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            const result = await Workout.update(updateWorkout);
            expect(result).toHaveProperty('email', 'bbb@gmail.com');
        })

        test('Test update workout fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingWorkoutRow);
            let updateWorkout = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            const result = await Workout.update(updateWorkout);
            expect(result).toHaveBeenCalledWith({"err": "Workout could not be updated"});
        })
    });

    describe('destroy', () => {
        test('Test delete workout success', async () => {
            let workoutData = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(db, 'query').mockResolvedValueOnce({rows: [ { ...workoutData, id: 1 }] });
            let workoutObject = new Workout(workoutData);
            expect(await workoutObject.destroy()).not.toBeNull();
        })

        test('Test delete workout fail', async () => {
            let workoutData = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(db, 'query').mockRejectedValueOnce({rows: [ { ...workoutData, id: 1 }] });
            let workoutObject = new Workout(workoutData);
            expect(await workoutObject.destroy()).toBe('Workout could not be deleted');
        })
    });
})