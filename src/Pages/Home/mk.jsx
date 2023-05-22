import React from 'react';
import { Button, Box, TextField } from '@mui/material';

function App() {
  function login(event) {
    event.preventDefault();
    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;
    var data = { username: username, password: password };

    // send the POST request
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((dat) => {
        if (dat.status === 'ok') {
          document.cookie = 'username=' + data.username;
          document.cookie = 'password=' + data.password;
          localStorage.setItem('username', data.username);
          localStorage.setItem('password', data.password);
          // redirect the user to the home page
          window.location.href = '/admin';
        } else {
          alert('Wrong username or password');
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="linear-gradient(#141e30, #243b55)"
    >
      <Box
        width={400}
        padding={4}
        bgcolor="rgba(0, 0, 0, 0.5)"
        boxShadow="0 15px 25px rgba(0, 0, 0, 0.6)"
        borderRadius={10}
        sx={{
          boxSizing: 'border-box',
          position: 'relative',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <h2
          style={{
            margin: 0,
            padding: 0,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          Giriş
        </h2>
        <form onSubmit={login}>
          <div style={{ position: 'relative' }}>
            <TextField
              type="text"
              name="username"
              required
              fullWidth
              sx={{
                color: '#fff',
                marginBottom: 3,
                '& input': { borderBottom: '1px solid #fff' },
                '& label': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  padding: '10px 0',
                  color: '#fff',
                  pointerEvents: 'none',
                  transition: '0.5s',
                },
                '& input:focus + label, & input:valid + label': {
                  top: -20,
                  left: 0,
                  color: '#03e9f4',
                  fontSize: 12,
                },
              }}
              InputLabelProps={{ shrink: true }}
              label="Kullanıcı Adı"
            />
          </div>
          <div style={{ position: 'relative' }}>
            <TextField
              type="password"
              name="password"
              required
              fullWidth
              sx={{
                color: '#fff',
                marginBottom: 3,
                '& input': { borderBottom: '1px solid #fff' },
                '& label': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  padding: '10px 0',
                  color: '#fff',
                  pointerEvents: 'none',
                  transition: '0.5s',
                },
                '& input:focus + label, & input:valid + label': {
                  top: -20,
                  left: 0,
                  color: '#03e9f4',
                  fontSize: 12,
                },
              }}
              InputLabelProps={{ shrink: true }}
              label="Şifre"
            />
          </div>
          <Button
            type="submit"
            fullWidth
            sx={{
              position: 'relative',
              display: 'inline-block',
              padding: '10px 20px',
              color: '#03e9f4',
              fontSize: 16,
              textDecoration: 'none',
              textTransform: 'uppercase',
              overflow: 'hidden',
              transition: '0.5s',
              marginTop: 4,
              letterSpacing: 4,
              '&:hover': {
                background: '#03e9f4',
                color: '#fff',
                borderRadius: 5,
                boxShadow: '0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4',
              },
              '& span': { position: 'absolute', display: 'block' },
              '& span:nth-child(1)': {
                top: 0,
                left: '-100%',
                width: '100%',
                height: 2,
                background: 'linear-gradient(90deg, transparent, #03e9f4)',
                animation: 'btnAnim1 1s linear infinite',
              },
              '@keyframes btnAnim1': {
                '0%': { left: '-100%' },
                '50%, 100%': { left: '100%' },
              },
              '& span:nth-child(2)': {
                top: '-100%',
                right: 0,
                width: 2,
                height: '100%',
                background: 'linear-gradient(180deg, transparent, #03e9f4)',
                animation: 'btnAnim2 1s linear infinite',
                animationDelay: '0.25s',
              },
              '@keyframes btnAnim2': {
                '0%': { top: '-100%' },
                '50%, 100%': { top: '100%' },
              },
              '& span:nth-child(3)': {
                bottom: 0,
                right: '-100%',
                width: '100%',
                height: 2,
                background: 'linear-gradient(270deg, transparent, #03e9f4)',
                animation: 'btnAnim3 1s linear infinite',
                animationDelay: '0.5s',
              },
              '@keyframes btnAnim3': {
                '0%': { right: '-100%' },
                '50%, 100%': { right: '100%' },
              },
              '& span:nth-child(4)': {
                bottom: '-100%',
                left: 0,
                width: 2,
                height: '100%',
                background: 'linear-gradient(360deg, transparent, #03e9f4)',
                animation: 'btnAnim4 1s linear infinite',
                animationDelay: '0.75s',
              },
              '@keyframes btnAnim4': {
                '0%': { bottom: '-100%' },
                '50%, 100%': { bottom: '100%' },
              },
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Gönder
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default App
