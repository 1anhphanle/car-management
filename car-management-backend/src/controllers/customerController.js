const CustomerModel = require('../models/customerModel');
const pool = require('../config/db');

const createCustomer = async (req, res) => {
    try {
        const customerData = req.body;
        const { email } = customerData;

        const existingCustomer = await pool.query(
            'SELECT 1 FROM customer WHERE email = $1',
            [email]
        );

        if (existingCustomer.rows.length > 0) {
            return res.status(400).json({ message: 'Email đã tồn tại' });
        }

        const success = await CustomerModel.addCustomer(customerData);
        if (success) {
            res.status(201).json({ message: 'Thêm khách hàng thành công!' });
        } else {
            res.status(500).json({ message: 'Lỗi khi thêm khách hàng' });
        }
    } catch (error) {
        console.error('Lỗi khi thêm khách hàng:', error);
        res.status(500).json({ message: 'Lỗi server' });
    }
};

module.exports = { createCustomer };