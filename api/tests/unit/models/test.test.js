require('../../../env');
const Test = require('../../../models/Test');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

const testingTestRow = { 
    rows: [
        {data: "Test"}
    ]
};

describe('Test', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('getAll', () => {
        test('Test getAll test success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingTestRow);
            const tests = await Test.getAll();
            expect(tests).toHaveLength(1);
        })

        test('Test getAll test fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingTestRow);
            try {
                await Test.getAll();
            } catch (err) {
                expect(err).toBe("Unable to connect AWS Postgres database");
            }
        })
    });
})