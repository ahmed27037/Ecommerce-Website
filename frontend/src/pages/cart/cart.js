import "./cart.css";
import { Link } from "react-router-dom";
import { Grid, Box, AppBar, Button, Typography } from "@mui/material";

export default function Cart({ cartItems, setCartItemCount, setCartItems }) {
  const handleOnClear = () => {
    setCartItemCount(0);
    setCartItems([]);
  };

  const handleBuyAll = () => {
    setCartItems([]);
    setCartItemCount(0);

    alert('Purchase successful!');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 255, 0.9), rgba(0, 0, 210, 0.95))' }}>
        <Grid container alignItems="center" spacing={2} justifyContent="space-around">
          <Grid item>
            <Link to="/home">
              <Box
                component="img"
                sx={{ height: "5rem", marginTop: "0.7rem", marginBottom: "0.3rem" }}
                className="website-logo"
                alt="home"
                src="https://th.bing.com/th/id/OIG.6QT6aqp4BqTLGfEa91vH?w=1024&h=1024&rs=1&pid=ImgDetMain"
              />
            </Link>
          </Grid>
          <Grid item>
            <Button sx={{ backgroundColor: 'yellow', color: "black" }} onClick={() => handleBuyAll()} className='buyall'>Buy All</Button>
          </Grid>
          <Grid item>
            <Button sx={{ backgroundColor: 'red', color: "black" }} onClick={() => handleOnClear()} className="clear">Clear</Button>
          </Grid>
        </Grid>
        </AppBar>
        <Grid container sx={{ marginTop: "20px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Grid item>
            <Typography variant = 'h3' sx = {{backgroundColor: 'hsl(252, 57%, 79%)'}}>Here are your Items : </Typography>
          </Grid>

          <Grid container sx={{ 
          marginTop: "20px",
          margin: '100px auto 0',
          display: "flex",
          justifyContent: "center",
          height: 'auto',
          width: '80%',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          flex: '1' }}>
            
              {cartItems.map((item) => (
                <Grid item
                 value = {item._id}
                sx = {{ 
                  borderRadius: "10px",
                  transition: 'transform 0.2s ease-in-out', // Added transition property
                  '&:hover': {
                    transform: 'scale(1.02) translate(10px, -10px)'},
                 cursor: 'pointer',
                  marginRight: '1rem',
                  width: '40rem',
                  maxWidth: '250px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                  }}>
                  <img
                    className="item-image"
                    src={item.image}
                    alt="Item"
                    style={{marginBottom: '2rem'}}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'center',  alignItems: 'center', background:'linear-gradient(45deg, yellow, lightyellow)', width:'100%', height: '3.5rem', borderRadius: '10px 10px 0 0 ' }}>
                  <Typography >
                    {item.name}
                    </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center',  alignItems: 'center', background:'linear-gradient(45deg, blue, lightblue)', width:'100%', height: '2rem' }}>
                  <Typography >
                    $ {item.price}
                    </Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'flex-start', backgroundColor: 'rgb(130, 130, 241)', width: '100%', overflow: 'visible', height: 'auto', borderRadius: '0 0 10px 10px' }}>
                  <Typography>Description: {item.description}</Typography>
                  </Box>
                  </Grid>
              ))}
            </Grid>
          
        </Grid>

    </Box>
  );
}
