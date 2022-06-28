describe('books endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })

    it('Content getAll', async () => {
        const res = await request(api).get('/content');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3);
    });

    it('Content findById', async () => {
        const res = await request(api).get('/content/2');
        expect(res.statusCode).toEqual(200);
    });
    
})
