require('../../../env');
const testController = require('../../../controllers/test')
const Test = require('../../../models/Test');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('test controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('getAll', () => {
        test('Test getAll with a 200 status code', async () => {
            jest.spyOn(Test, 'getAll').mockResolvedValue(['test1', 'test2']);
            await testController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['test1', 'test2']);
        })

        test('Test getAll with a 500 status code', async () => {
            jest.spyOn(Test, 'getAll').mockRejectedValue("Test not found");
            await testController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(500);
        })
    });
})