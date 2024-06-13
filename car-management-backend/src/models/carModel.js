const pool = require('../config/db');

const getCars = async () => {
    const result = await pool.query('SELECT * FROM car');
    return result.rows;
};

const getCarById = async (id) => {
    const result = await pool.query(
        'SELECT * FROM car WHERE car_id = $1',
        [id]
    );
    return result.rows[0];
};

module.exports = {
    getCars,
    getCarById
};