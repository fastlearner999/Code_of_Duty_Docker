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
                let userData = await db.query('SELECT * FROM user');
                let users = userData.rows.map(u => new User(u));
                resolve(users);
            } catch (err) {
                reject('Book not found');
            }
        });
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                /*let bookData = await db.query(`SELECT books.*, authors.name as author_name
                                                    FROM books 
                                                    JOIN authors
                                                    ON books.author_id = authors.id
                                                    WHERE books.id = $1;`, [ id ]);
                let book = new Book(bookData.rows[0]);
                resolve (book);*/
                resolve('Resolve');
            } catch (err) {
                reject('Book not found');
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
                reject('Book could not be created');
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
                reject('Book could not be updated');
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
                reject('Book could not be deleted')
            }
        })
    };
};