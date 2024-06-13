-- Tạo bảng car
CREATE TABLE car (
  car_id VARCHAR(255) PRIMARY KEY,
  car_name VARCHAR(255) NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  color VARCHAR(255) NOT NULL,
  origin VARCHAR(255) NOT NULL,
  import_date DATE NOT NULL,
  available_quantity INT NOT NULL,
  sold_quantity INT NOT NULL
);

-- Tạo bảng customer
CREATE TABLE customer (
  customer_id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  customer_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(15) NOT NULL UNIQUE,
  address VARCHAR(255) NOT NULL UNIQUE
);

-- Tạo bảng agency
CREATE TABLE agency (
  agency_id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  brand_name VARCHAR(255) NOT NULL UNIQUE,
  phone_number VARCHAR(15) NOT NULL UNIQUE,
  address VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL UNIQUE
);

-- Tạo bảng transaction
CREATE TABLE transaction (
  transaction_id VARCHAR(255) PRIMARY KEY,
  customer_id VARCHAR(255) NOT NULL,
  car_id VARCHAR(255) NOT NULL,
  transaction_date DATE NOT NULL,
  status VARCHAR(255) NOT NULL, -- Ví dụ: "Đã đặt cọc", "Đã thanh toán", ...
  FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
  FOREIGN KEY (car_id) REFERENCES car(car_id)
);

-- Tạo bảng payment
CREATE TABLE payment (
  payment_id SERIAL PRIMARY KEY,
  transaction_id VARCHAR(255) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  status VARCHAR(50) NOT NULL, -- Ví dụ: "Chờ xác nhận", "Thành công", ...
  payment_date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
  FOREIGN KEY (transaction_id) REFERENCES transaction(transaction_id)
);

-- Tạo bảng accounting
CREATE TABLE accounting (
  accounting_id SERIAL PRIMARY KEY, -- Thêm ID cho bảng accounting
  transaction_id VARCHAR(255) NOT NULL,
  total_price NUMERIC(10,2) NOT NULL, 
  deposit_price NUMERIC(10,2) NOT NULL,
  FOREIGN KEY (transaction_id) REFERENCES transaction(transaction_id)
);