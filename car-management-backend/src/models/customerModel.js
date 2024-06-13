const pool = require('../config/db');

const addCustomer = async (customerData) => {
    const { customer_id, customer_name, email, phone_number, address } = customerData;
    const result = await pool.query(
        'INSERT INTO customer (customer_id, customer_name, email, phone_number, address) VALUES ($1, $2, $3, $4, $5)',
        [customer_id, customer_name, email, phone_number, address]
    );
    return result.rowCount > 0;
};

module.exports = { addCustomer };