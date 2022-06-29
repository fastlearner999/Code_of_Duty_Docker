require('../../../env');
const Content = require('../../../models/Content');



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
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingContentRow);
            const contents = await Content.getAll();
            expect(contents).toHaveLength(4);
        })

        test('Test getAll content fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingContentRow);
            try {
                await Content.getAll();
            } catch (err) {
                expect(err).toBe("Content not found");
            }
        })
    });

    describe('findById', () => {
        test('Test findById content success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingContentRow);
            const content = await Content.findById(3);
            expect(content).toBeInstanceOf(Content);
        })

        test('Test findById content fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingContentRow);
            try {
                await Content.findById(3);
            } catch (err) {
                expect(err).toBe("Content not found");
            }
        })
    });
})
