const goalController = require('../../../controllers/goal')
const Goal = require('../../../models/Goal');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('goal controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('getAll', () => {
        test('Goal getAll with a 200 status code', async () => {

        })

        test('Goal getAll with a 500 status code', async () => {

        })
    });

    describe('findById', () => {
        test('Goal findById with a 200 status code', async () => {

        })

        test('Goal findById with a 404 status code', async () => {

        })
    });

    describe('create', () => {
        test('Goal create with a 201 status code', async () => {

        })

        test('Goal create with a 422 status code', async () => {

        })
    });

    describe('update', () => {
        test('Goal update with a 202 status code', async () => {

        })

        test('Goal update with a 404 status code', async () => {

        })
    });

    describe('destroy', () => {
        test('Goal delete with 204 status code', async () => {

        })

        test('Goal destroy with a 404 status code', async () => {

        })
    });
    
})