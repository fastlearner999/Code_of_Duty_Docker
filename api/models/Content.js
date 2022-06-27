const db = require('../dbConfig/init');

module.exports = class Content {
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
                reject('Content not found');
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
                reject('Content not found');
            }
        });
    };
};