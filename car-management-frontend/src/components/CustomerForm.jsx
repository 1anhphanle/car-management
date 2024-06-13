import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    customer_id: "", // customer_id
    customer_name: "", // customer_name
    email: "", // email
    phone_number: "", // phone_number
    address: "", // address
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Thêm khách hàng thành công!");
      } else {
        console.error("Lỗi khi thêm khách hàng:", response.status);
      }
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Thông tin khách hàng
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="CMND/CCCD"
            name="customer_id" // customer_id
            value={formData.customer_id} // customer_id
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Họ và tên"
            name="customer_name" // customer_name
            value={formData.customer_name} // customer_name
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Email"
            name="email" // email
            value={formData.email} // email
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Số điện thoại"
            name="phone_number" // phone_number
            value={formData.phone_number} // phone_number
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Địa chỉ"
            name="address" // address
            value={formData.address} // address
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Gửi
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CustomerForm;
