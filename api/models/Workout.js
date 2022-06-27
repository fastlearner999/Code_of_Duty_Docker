const db = require('../dbConfig/init');

module.exports = class Workout {
    constructor(data){
        /*this.id = data.id;
        this.title = data.title;
        this.yearOfPublication = data.year_of_publication;
        this.abstract = data.abstract;
        this.author = { name: data.author_name, path: `/authors/${data.author_id}`};*/
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                /*let bookData = await db.query('SELECT * FROM books');
                let books = bookData.rows.map(b => new Book(b));
                resolve (books);*/
                resolve('Resolve');
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