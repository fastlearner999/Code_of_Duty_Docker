require('../../../util/env');
const Testing = require('../../../models/Testing');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

const testingTestingRow = { 
    rows: [
        {data: "Testing"}
    ]
};

describe('Testing', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('getAll', () => {
        test('Testing getAll test success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingTestingRow);
            const testings = await Testing.getAll();
            expect(testings).toHaveLength(1);
        })

        test('Testing getAll test fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingTestingRow);
            try {
                await Testing.getAll();
            } catch (err) {
                expect(err).toBe("Unable to connect AWS Postgres database");
            }
        })
    });
})