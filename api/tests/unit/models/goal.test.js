const Goal = require('../../../models/Goal');

jest.mock('../../../models/Goal');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

const testingGoalRow = { 
    rows: [
        {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'}, 
        {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'},
        {id: 3, email: 'ccc@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'E', last_name: 'F', gender: 'M'},
        {id: 4, email: 'ddd@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'G', last_name: 'H', gender: 'F'}
    ]
};

describe('Goal', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())
    
    describe('getAll', () => {
        test('Test getAll goal success', async () => {
           
                jest.spyOn(db, 'query').mockResolvedValueOnce(testingGoalRow);
                const goals = await Goal.getAll();
                expect(goals).toHaveLength(4);
        })

        test('Test getAll goal fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingGoalRow);
            const goals = await Goal.getAll();
            expect(goals).toHaveBeenCalledWith("Goal not found");
        })
    });

    describe('findById', () => {
        test('Test findById goal success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingGoalRow);
            const goal = await Goal.findById(3);
            expect(goal).toHaveLength(1);
            expect(goal).toBeInstanceOf(Goal);
        })

        test('Test findById goal fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingGoalRow);
            try {
                await Goal.findById(3);
            } catch (err) {
                expect(err).toBe("Goal not found");
            }
        })
    });

    describe('create', () => {
        test('Test create goal success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingGoalRow);
            let newGoal = {id: 5, email: 'eee@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'I', last_name: 'J', gender: 'M'};
            const result = await Goal.create(newGoal);
            expect(result).toHaveProperty('email', 'eee@gmail.com');
        })

        test('Test create goal fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingGoalRow);
            let newGoal = {id: 5, email: 'eee@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'I', last_name: 'J', gender: 'M'};
            try {
                await Goal.create(newGoal);
            } catch (err) {
                expect(err).toBe("Goal could not be created");
            }
        })
    });

    describe('update', () => {
        test('Test update goal success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingGoalRow);
            let updateGoal = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            const result = await Goal.update(updateGoal);
            expect(result).toHaveProperty('email', 'bbb@gmail.com');
        })

        test('Test update goal fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingGoalRow);
            let updateGoal = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            try {
                await Goal.update(updateGoal);
            } catch (err) {
                expect(err).toBe("Goal could not be updated");
            }
        })
    });

    describe('destroy', () => {
        test('Test delete goal success', async () => {
            let goalData = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(db, 'query').mockResolvedValueOnce({rows: [ { ...goalData, id: 1 }] });
            let goalObject = new Goal(goalData);
            expect(await goalObject.destroy()).not.toBeNull();
        })

        test('Test delete goal fail', async () => {
            let goalData = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(db, 'query').mockRejectedValueOnce({rows: [ { ...goalData, id: 1 }] });
            let goalObject = new Goal(goalData);
            try {
                await goalObject.destroy();
            } catch (err) {
                expect(err).toBe("Goal could not be deleted");
            }
        })
    });
})
