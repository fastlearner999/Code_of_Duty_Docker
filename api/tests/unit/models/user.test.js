require('../../../env');
const User = require('../../../models/User');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

const testingUserRow = { 
    rows: [
        {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'}, 
        {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'},
        {id: 3, email: 'ccc@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'E', last_name: 'F', gender: 'M'},
        {id: 4, email: 'ddd@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'G', last_name: 'H', gender: 'F'}
    ]
};

describe('User', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('getAll', () => {
        test('Test getAll user success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingUserRow);
            const users = await User.getAll();
            expect(users).toHaveLength(4);
        })

        test('Test getAll user fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingUserRow);
            try {
                await User.getAll();
            } catch (err) {
                expect(err).toBe("User not found");
            }
        })
    });

    describe('findById', () => {
        test('Test findById user success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingUserRow);
            const user = await User.findById(3);
            expect(user).toBeInstanceOf(User);
        })

        test('Test findById user fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingUserRow);
            try {
                await User.findById(3);
            } catch (err) {
                expect(err).toBe("User not found");
            }
        })
    });

    describe('create', () => {
        test('Test create user success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingUserRow);
            let newUser = {id: 5, email: 'eee@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'I', last_name: 'J', gender: 'M'};
            const result = await User.create(newUser);
            expect(result).toBeInstanceOf(User);
        })

        test('Test create user fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingUserRow);
            let newUser = {id: 5, email: 'eee@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'I', last_name: 'J', gender: 'M'};
            try {
                await User.create(newUser);
            } catch (err) {
                expect(err).toBe("User could not be created");
            }
        })
    });

    describe('update', () => {
        test('Test update user success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingUserRow);
            let updateUser = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            const result = await User.update(updateUser);
            expect(result).toBeInstanceOf(User);
        })

        test('Test update user fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingUserRow);
            let updateUser = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            try {
                await User.update(updateUser);
            } catch (err) {
                expect(err).toBe("User could not be updated");
            }
        })
    });

    describe('destroy', () => {
        let userData = {id: 1, email: 'aaa@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'A', last_name: 'B', gender: 'M'};
        let userObject = new User(userData);

        test('Test delete user success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce({rows: [ { ...userData, id: 1 }] });
            expect(await User.destroy(userObject)).not.toBeNull();
        })

        test('Test delete user fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce({rows: [ { ...userData, id: 1 }] });
            try {
                await User.destroy(userObject);
            } catch (err) {
                expect(err).toBe("User could not be deleted");
            }
        })
    });

    describe('login', () => {
        test('Test login user success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingUserRow);
            let loginUser = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            const result = await User.login(loginUser);
            expect(result).toBeInstanceOf(User);
        })

        test('Test login user fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingUserRow);
            let loginUser = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            try {
                await User.login(loginUser);
            } catch (err) {
                expect(err).toBe("User could not login");
            }
        })
    });

    describe('logout', () => {
        test('Test logout user success', async () => {
            jest.spyOn(db, 'query').mockResolvedValueOnce(testingUserRow);
            let logoutUser = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            const result = await User.logout(logoutUser);
            expect(result).toBe("User logout success");
        })

        test('Test logout user fail', async () => {
            jest.spyOn(db, 'query').mockRejectedValueOnce(testingUserRow);
            let logoutUser = {id: 2, email: 'bbb@gmail.com', password: '900150983cd24fb0d6963f7d28e17f72', first_name: 'C', last_name: 'D', gender: 'F'};
            try {
                await User.logout(logoutUser);
            } catch (err) {
                expect(err).toBe("User could not logout");
            }
        })
    });
})