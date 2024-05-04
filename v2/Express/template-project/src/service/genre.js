import db from "../connect.js"

async function createGenreService({ titleGenre, brandGenre }) {
    return db.query(`INSERT INFO genre (title, brandGenre) values ($1, $2) RETURNING *`, [titleGenre, brandGenre]).rows[0]
}

async function getAllGenreService() {
    return db.query(`SELECT * FROM genre`).rows
}

async function getOneGenreService(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`SELECT * FROM genre where id = $1`, [id]).rows[0]
}

async function updateGenreService(id, { titleGenre, brandGenre }) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`UPDATE genre set titleGenre = $1, brandGenre = $2 where id = $3 RETURNING *`, [titleGenre, brandGenre, id]).rows[0]
}

async function deleteGenreService(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`DELETE FROM genre where id = $1`, [id]).rows[0]
}

export {
    createGenreService,
    getAllGenreService,
    getOneGenreService,
    updateGenreService,
    deleteGenreService
}
