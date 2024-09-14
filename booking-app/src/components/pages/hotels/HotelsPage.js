import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import '../../../App.css';

import defaultHotelImage from '../../../img/defaultHotelImage.jpg'; // Импорт изображения по умолчанию

const HotelsPage = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        // Получаем список отелей с сервера
        axios.get('http://localhost:5000/hotels').then((response) => {
            setHotels(response.data);
        });
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>Hotels</h2>
            <Grid container spacing={3}>
                {hotels.map((hotel) => (
                    <Grid item xs={12} sm={6} md={4} key={hotel.id}>
                        <Card>
                            {/* Используем изображение отеля, если оно указано, иначе — defaultHotelImage */}
                            <CardMedia
                                component="img"
                                height="140"
                                image={hotel.image ? `/img/${hotel.image}` : defaultHotelImage}

                                alt="Hotel Image"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {hotel.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Address: {hotel.address}
                                    <br />
                                    City: {hotel.city}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default HotelsPage;