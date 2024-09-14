import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Button, TextField, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getDestinations, getHotels } from '../../api/api'; // Импорт API функций
import '../../../App.css';

const MainPage = () => {
    const [destinations, setDestinations] = useState([]);
    const navigate = useNavigate();

    // Получение списка направлений при загрузке компонента
    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const data = await getDestinations(); // Вызов функции API
                setDestinations(data);
            } catch (error) {
                console.error('Failed to fetch destinations:', error);
            }
        };
        fetchDestinations();
    }, []);

    // Обработка отправки формы
    const onSubmit = async (values) => {
        try {
            const hotels = await getHotels(values); // Вызов функции API для получения отелей
            if (hotels) {
                navigate('/hotels');
            }
        } catch (error) {
            console.error('Error fetching hotels:', error);
        }
    };

    return (
        <div>

            <Form
                onSubmit={onSubmit}
                validate={(values) => {
                    const errors = {};
                    if (!values.destination) {
                        errors.destination = 'Destination is required';
                    }
                    if (!values.checkIn) {
                        errors.checkIn = 'Check-in date is required';
                    }
                    if (!values.checkOut) {
                        errors.checkOut = 'Check-out date is required';
                    }
                    return errors;
                }}
                render={({ handleSubmit, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Field name="destination">
                            {({ input, meta }) => (
                                <div style={{ flex: 1 }}>
                                    <TextField
                                        {...input}
                                        select
                                        label="Destination"
                                        fullWidth
                                        margin="normal"
                                    >
                                        {destinations.map((destination) => (
                                            <MenuItem key={destination.id} value={destination.label}>
                                                {destination.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    {meta.error && meta.touched && (
                                        <span style={{ color: 'red' }}>{meta.error}</span>
                                    )}
                                </div>
                            )}
                        </Field>

                        <Field name="checkIn">
                            {({ input, meta }) => (
                                <div style={{ flex: 1 }}>
                                    <TextField
                                        {...input}
                                        label="Check in"
                                        type="date"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    {meta.error && meta.touched && (
                                        <span style={{ color: 'red' }}>{meta.error}</span>
                                    )}
                                </div>
                            )}
                        </Field>

                        <Field name="checkOut">
                            {({ input, meta }) => (
                                <div style={{ flex: 1 }}>
                                    <TextField
                                        {...input}
                                        label="Check out"
                                        type="date"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    {meta.error && meta.touched && (
                                        <span style={{ color: 'red' }}>{meta.error}</span>
                                    )}
                                </div>
                            )}
                        </Field>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={submitting || pristine}
                            style={{ marginTop: '20px' }}
                        >
                            Send
                        </Button>
                    </form>
                )}
            />
            <h1>
                <span style={{ color: 'black' }}>Travel With</span>{' '}
                <span style={{ color: '#FFA500' }}>Booking</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};

export default MainPage;
