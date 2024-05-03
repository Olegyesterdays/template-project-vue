import db from "../connect.js"

async function createCarService({ titleCar, brandCar }) {
    return db.query(`INSERT INFO car (title, brandCar) values ($1, $2) RETURNING *`, [titleCar, brandCar]).rows[0]
}

async function getAllCarService() {
    return db.query(`SELECT * FROM car`).rows
}

async function getOneCarService(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`SELECT * FROM car where id = $1`, [id]).rows[0]
}

async function updateCarService(id, { titleCar, brandCar }) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`UPDATE car set titleCar = $1, brandCar = $2 where id = $3 RETURNING *`, [titleCar, brandCar, id]).rows[0]
}

async function deleteCarService(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return db.query(`DELETE FROM car where id = $1`, [id]).rows[0]
}

export {
    createCarService,
    getAllCarService,
    getOneCarService,
    updateCarService,
    deleteCarService
}
