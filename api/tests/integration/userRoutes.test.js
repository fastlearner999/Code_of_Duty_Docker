describe('user endpoints', () => {
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

    it('User getAll', async () => {
        const res = await request(api).get('/user');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3);
    });

    it('User findById', async () => {
        const res = await request(api).get('/user/2');
        expect(res.statusCode).toEqual(200);
    });

    it('User create', async () => {
        const res = await request(api)
            .post('/user')
            .send({
                email: 'tester4@gmail.com', 
                password: 'fb163b7f779dd263543cb276dc436a25', 
                first_name: 'Tester4', 
                last_name: 'D', 
                gender: 'F'
            })
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id");

        const res2 = await request(api).get('/user');
        expect(res2.statusCode).toEqual(200);
        expect(res2.body.length).toEqual(4);
    });

    it('User delete', async () => {
        const res = await request(api)
            .delete('/user/1')
        expect(res.statusCode).toEqual(204);

        const userRes = await request(api).get('/user/1');
        expect(userRes.statusCode).toEqual(404);
        expect(userRes.body).toHaveProperty('err');
    }); 
})