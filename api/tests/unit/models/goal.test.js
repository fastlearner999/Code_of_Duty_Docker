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
        test('Test getAll user success', async () => {
            
        })

        test('Test getAll user fail', async () => {
            
        })
    });

    describe('findById', () => {
        test('Test findById user success', async () => {
            
        })

        test('Test findById user fail', async () => {
            
        })
    });

    describe('create', () => {
        test('Test create user success', async () => {
            
        })

        test('Test create user fail', async () => {
            
        })
    });

    describe('update', () => {
        test('Test update user success', async () => {
            
        })

        test('Test update user fail', async () => {
            
        })
    });

    describe('destroy', () => {
        test('Test delete user success', async () => {
            
        })

        test('Test delete user fail', async () => {
            
        })
    });
})