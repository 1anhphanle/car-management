import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/cars/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Lỗi HTTP! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Chi tiết xe hơi:", data);
        setCar(data);
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu xe hơi:", error));
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image="https://via.placeholder.com/600"
        alt={car.car_name} // car.car_name
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.car_name} {/* car.car_name */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Giá: {car.price} {/* car.price */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CarDetails;
