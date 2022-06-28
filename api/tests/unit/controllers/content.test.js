const contentController = require('../../../controllers/content')
const Content = require('../../../models/Content');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('content controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('getAll', () => {
        test('Content getAll with a 200 status code', async () => {

        })

        test('Content getAll with a 500 status code', async () => {

        })
    });

    describe('findById', () => {
        test('Content findById with a 200 status code', async () => {

        })

        test('Content findById with a 404 status code', async () => {

        })
    });
    
})