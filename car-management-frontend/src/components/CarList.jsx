import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const CarList = ({ cars }) => {
  return (
    <Grid container spacing={3}>
      {cars.map((car) => (
        <Grid item key={car.car_id} xs={12} sm={6} md={4}> {/* car.car_id */}
          <Link
            component={RouterLink}
            to={`/cars/${car.car_id}`} /* car.car_id */
            underline="none" 
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/300"
                alt={car.car_name} /* car.car_name */
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
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CarList;