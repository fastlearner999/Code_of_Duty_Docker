const Content = require('../../../models/Content');

jest.mock('../../../models/Content');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

const testingContentRow = { 
    rows: [
        {id: 1, title: 'aaa@gmail.com', html_content: '900150983cd24fb0d6963f7d28e17f72'}, 
        {id: 2, title: 'bbb@gmail.com', html_content: '900150983cd24fb0d6963f7d28e17f72'},
        {id: 3, title: 'ccc@gmail.com', html_content: '900150983cd24fb0d6963f7d28e17f72'},
        {id: 4, title: 'ddd@gmail.com', html_content: '900150983cd24fb0d6963f7d28e17f72'}
    ]
};

describe('Content', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('getAll', () => {
        test('Test getAll content success', async () => {

        })

        test('Test getAll content fail', async () => {

        })
    });

    describe('findById', () => {
        test('Test findById content success', async () => {

        })

        test('Test findById content fail', async () => {

        })
    });
})