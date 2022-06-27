const db = require('../dbConfig/init');

module.exports = class Goal {
    constructor(data){

        this.id = data.id 
        this.goal_name = data.goal_name
        this.sport_type = data.sport_type
        this.period = data.period
        this.period_type = data.period_type
        this.start_date = data.start_date
        this.end_date = data.end_date
        this.target_distance = data.target_distance
        this.target_distance_unit = data.target_distance_unit
        this.create_date = data.create_date
        this.update_date = data.update_date
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let goalData = await db.query('SELECT * FROM goals');
                let goals = goalData.rows.map(g => new Goal(g));
                resolve (goals);
            } catch (err) {
                reject('Goal not found');
            }
        });
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let goalData = await db.query(`SELECT goals.*, ....
                    FROM goals or ...
                    JOIN users or ...
                    ON goals....
                    WHERE goals.id = $1;`, [ id ]);
                let goal = new Goal(goalData.rows[0]);
                resolve (goal);
                resolve('Resolve');
            } catch (err) {
                reject('Goal not found');
            }
        });
    };
    
    static async create(newgoalData){
        return new Promise (async (resolve, reject) => {
            try {
                // let goal = await Author.findOrCreateByName(newBookData.authorName);
                // if (newBookData.yearOfPublication === undefined) {
                //     newBookData['yearOfPublication'] = new Date().getFullYear();
                // }
                // if (newBookData.abstract === undefined) {
                //     newBookData['abstract'] = "";
                // }

                let goalData = await db.query(`INSERT INTO goals (goal_name, sport_type, period, period_type, start_date, end_date, target_distance, target_distance_unit) VALUES ($1, $2, $3, $4) RETURNING *;`, [ newBookData.title, newBookData.yearOfPublication, newBookData.abstract, author.id ]);
                resolve (bookData.rows[0]);
                resolve('Resolve');
            } catch (err) {
                reject('Goal could not be created');
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
                const result = await db.query('DELETE FROM goals WHERE id = $1 RETURNING *', [ this.id ]);
                const goal = await Goal.findById(result.rows[0]);
                // const books = await author.books;
                if(!goals.length){await Goal.destroy()}
                resolve(goal)
                // resolve('Resolve');
            } catch (err) {
                reject('Book could not be deleted')
            }
        })
    };
};
