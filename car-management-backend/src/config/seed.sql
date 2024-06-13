-- Chèn dữ liệu mẫu cho bảng car (Vinfast)
INSERT INTO car (car_id, car_name, price, color, origin, import_date, available_quantity, sold_quantity) VALUES
  ('VF5PLUSBL', 'Vinfast VF 5 Plus', 28000.00, 'Black', 'Vietnam', '2023-09-01', 10, 2),
  ('VF5PLUSWH', 'Vinfast VF 5 Plus', 28000.00, 'White', 'Vietnam', '2023-09-01', 8, 0),
  ('VF8ECOB', 'Vinfast VF 8 Eco', 45000.00, 'Blue', 'Vietnam', '2022-12-01', 5, 3),
  ('VF8ECOW', 'Vinfast VF 8 Eco', 45000.00, 'White', 'Vietnam', '2022-12-01', 7, 1),
  ('VF9PLUSBL', 'Vinfast VF 9 Plus', 65000.00, 'Black', 'Vietnam', '2023-03-01', 3, 0),
  ('VF9PLUSRD', 'Vinfast VF 9 Plus', 65000.00, 'Red', 'Vietnam', '2023-03-01', 2, 1);

-- Chèn dữ liệu mẫu cho bảng customer
INSERT INTO customer (customer_id, email, customer_name, phone_number, address) VALUES
  ('1234567890', 'customer1@example.com', 'John Doe', '0987654321', '123 Main Street'),
  ('9876543210', 'customer2@example.com', 'Jane Doe', '0123456789', '456 Oak Avenue'),
  ('1122334455', 'customer3@example.com', 'David Smith', '0169234567', '789 Pine Street');

-- Chèn dữ liệu mẫu cho bảng agency
INSERT INTO agency (agency_id, email, brand_name, phone_number, address, password) VALUES
  ('AGENCY001', 'agency1@example.com', 'Vinfast Showroom A', '0888888888', '789 Pine Street', 'password123'),
  ('AGENCY002', 'agency2@example.com', 'Vinfast Showroom B', '0999999999', '1011 Maple Lane', 'password456');

-- Chèn dữ liệu mẫu cho bảng transaction
INSERT INTO transaction (transaction_id, customer_id, car_id, transaction_date, status) VALUES
  ('TXN001', '1234567890', 'VF5PLUSBL', '2024-01-15', 'Đã đặt cọc'),
  ('TXN002', '9876543210', 'VF8ECOB', '2024-02-20', 'Đã thanh toán'),
  ('TXN003', '1122334455', 'VF9PLUSBL', '2024-03-25', 'Đang chờ xử lý');

-- Chèn dữ liệu mẫu cho bảng payment
INSERT INTO payment (transaction_id, payment_method, amount, status, payment_date) VALUES
  ('TXN002', 'Momo', 20000.00, 'Thành công', '2024-02-20 10:00:00');

-- Chèn dữ liệu mẫu cho bảng accounting
INSERT INTO accounting (transaction_id, total_price, deposit_price) VALUES
  ('TXN001', 28000.00, 10000.00), 
  ('TXN002', 45000.00, 20000.00),
  ('TXN003', 65000.00, 30000.00);