require('../../../env');
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
            jest.spyOn(Content, 'getAll').mockResolvedValue(['content1', 'content2']);
            await contentController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['content1', 'content2']);
        })

        test('Content getAll with a 500 status code', async () => {
            jest.spyOn(Content, 'getAll').mockRejectedValue( "Content not found");
            await contentController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(500);
        })
    });

    describe('findById', () => {
        test('Content findById with a 200 status code', async () => {
            let testContent = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
            jest.spyOn(Content, 'findById').mockResolvedValue(new Content(testContent));
                
            const mockReq = { params: { id: 1 } }
            await contentController.findById(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Content(testContent));

        })

        test('Content findById with a 404 status code', async () => {
            jest.spyOn(Content, 'findById').mockRejectedValue( "Content not found");
            await contentController.findById(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(404);
        })
    });
    
})
