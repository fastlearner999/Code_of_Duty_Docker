const db = require('../dbConfig/init');

module.exports = class User {
    constructor(data){
        this.id = data.id;
        this.email = data.email;
        this.password = data.password;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.gender = data.gender;
        this.create_date = data.create_date;
        this.update_date = data.update_date;
        this.last_login = data.last_login;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query('SELECT * FROM users');
                let users = userData.rows.map(u => new User(u));
                resolve(users);
            } catch (err) {
                reject('User not found');
            }
        });
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query(`SELECT * FROM users where id = $1`, [ id ]);
                let user = new User(userData.rows[0]);
                resolve(user);
            } catch (err) {
                reject('User not found');
            }
        });
    };
    
    static async create(newBookData){
        return new Promise (async (resolve, reject) => {
            try {
                /*let author = await Author.findOrCreateByName(newBookData.authorName);
                if (newBookData.yearOfPublication === undefined) {
                    newBookData['yearOfPublication'] = new Date().getFullYear();
                }
                if (newBookData.abstract === undefined) {
                    newBookData['abstract'] = "";
                }
                let bookData = await db.query(`INSERT INTO books (title, year_of_publication, abstract, author_id) VALUES ($1, $2, $3, $4) RETURNING *;`, [ newBookData.title, newBookData.yearOfPublication, newBookData.abstract, author.id ]);
                resolve (bookData.rows[0]);*/
                resolve('Resolve');
            } catch (err) {
                reject('User could not be created');
            }
        });
    };

    static async update(newBookData){
        return new Promise (async (resolve, reject) => {
            try {
                /*let author = await Author.findOrCreateByName(newBookData.authorName);
                if (newBookData.yearOfPublication === undefined) {
                    newBookData['yearOfPublication'] = new Date().getFullYear();
                }
                if (newBookData.abstract === undefined) {
                    newBookData['abstract'] = "";
                }
                let bookData = await db.query(`INSERT INTO books (title, year_of_publication, abstract, author_id) VALUES ($1, $2, $3, $4) RETURNING *;`, [ newBookData.title, newBookData.yearOfPublication, newBookData.abstract, author.id ]);
                resolve (bookData.rows[0]);*/
                resolve('Resolve');
            } catch (err) {
                reject('User could not be updated');
            }
        });
    };

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                /*const result = await db.query('DELETE FROM books WHERE id = $1 RETURNING author_id', [ this.id ]);
                const author = await Author.findById(result.rows[0].author_id);
                const books = await author.books;
                if(!books.length){await author.destroy()}
                resolve('Book was deleted')*/
                resolve('Resolve');
            } catch (err) {
                reject('User could not be deleted')
            }
        })
    };
};