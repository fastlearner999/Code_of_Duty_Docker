describe('goal endpoints', () => {
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

    it('Goal getAll', async () => {
        const res = await request(api).get('/goal');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3);
    });

    it('Goal findById', async () => {
        const res = await request(api).get('/goal/2');
        expect(res.statusCode).toEqual(200);
    });

    it('goal create', async () => {
        const res = await request(api)
            .post('/goal')
            .send({
                email: 'tester4@gmail.com', 
                password: 'fb163b7f779dd263543cb276dc436a25', 
                first_name: 'Tester4', 
                last_name: 'D', 
                gender: 'F'
            })
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id");

        const res2 = await request(api).get('/goal');
        expect(res2.statusCode).toEqual(200);
        expect(res2.body.length).toEqual(4);
    });


    it('goal delete', async () => {
        const res = await request(api)
            .delete('/goal/1')
        expect(res.statusCode).toEqual(204);

        const bookRes = await request(api).get('/goal/1');
        expect(bookRes.statusCode).toEqual(404);
        expect(bookRes.body).toHaveProperty('err');
    }); 
})
