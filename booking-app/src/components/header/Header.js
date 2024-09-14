import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../../App.css';

const Header = () => (
    <AppBar position="static" style={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>

        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="/img/logo.png"
                    alt="Logo"
                    style={{ width: '40px', height: '40px', marginRight: '10px' }}
                />
                <Typography variant="h6" style={{ color: '#FFA500', fontWeight: 'bold' }}>
                    Booking
                </Typography>
            </div>


            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button color="inherit" component={Link} to="/" style={{ color: '#FFA500', marginRight: '10px' }}>
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/about" style={{ color: '#FFA500' }}>
                    About
                </Button>
            </div>
        </Toolbar>
    </AppBar>
);

export default Header;