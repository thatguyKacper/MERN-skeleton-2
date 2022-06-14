import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='home'
            sx={{ mr: 2 }}
            href='/'
          >
            <HomeIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            MERN skeleton
          </Typography>
          {user ? (
            <Button onClick={onLogout} color='inherit'>
              Sign out
            </Button>
          ) : (
            <>
              <Button href='/signin' color='inherit'>
                Sign in
              </Button>
              <Button href='/signup' color='inherit'>
                Sign up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
