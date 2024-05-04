import db from "../connect.js"

async function createAuthorService({ titleAuthor, brandAuthor }) {
    return db.query(`INSERT INFO author (title, brandAuthor) values ($1, $2) RETURNING *`, [titleAuthor, brandAuthor]).rows[0]
}

async function getAllAuthorService() {
    return db.query(`SELECT * FROM author`).rows
}

async function getOneAuthorService(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`SELECT * FROM author where id = $1`, [id]).rows[0]
}

async function updateAuthorService(id, { titleAuthor, brandAuthor }) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`UPDATE author set titleAuthor = $1, brandAuthor = $2 where id = $3 RETURNING *`, [titleAuthor, brandAuthor, id]).rows[0]
}

async function deleteAuthorService(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`DELETE FROM author where id = $1`, [id]).rows[0]
}

export {
    createAuthorService,
    getAllAuthorService,
    getOneAuthorService,
    updateAuthorService,
    deleteAuthorService
}
