require('../../../env');
const testingController = require('../../../controllers/testing')
const Testing = require('../../../models/Testing');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('testing controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('getAll', () => {
        test('Testing getAll with a 200 status code', async () => {
            jest.spyOn(Testing, 'getAll').mockResolvedValue(['testing1', 'testing2']);
            await testingController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['testing1', 'testing2']);
        })

        test('Testing getAll with a 500 status code', async () => {
            jest.spyOn(Testing, 'getAll').mockRejectedValue("Testing not found");
            await testingController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(500);
        })
    });
})