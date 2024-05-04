import db from "../connect.js"

async function createBookService({ titleBook, brandBook }) {
    return db.query(`INSERT INFO book (title, brandBook) values ($1, $2) RETURNING *`, [titleBook, brandBook]).rows[0]
}

async function getAllBookService() {
    return db.query(`SELECT * FROM book`).rows
}

async function getOneBookService(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`SELECT * FROM book where id = $1`, [id]).rows[0]
}

async function updateBookService(id, { titleBook, brandBook }) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`UPDATE book set titleBook = $1, brandBook = $2 where id = $3 RETURNING *`, [titleBook, brandBook, id]).rows[0]
}

async function deleteBookService(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`DELETE FROM book where id = $1`, [id]).rows[0]
}

export {
    createBookService,
    getAllBookService,
    getOneBookService,
    updateBookService,
    deleteBookService
}
