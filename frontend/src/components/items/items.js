
import './items.css';
import React from 'react';
import { Grid, Typography, Button} from '@mui/material';

function Items({ items, handleOnCart }) {
  return (
    <Grid 
    container
      sx={{
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 3fr))',  
      margin: "10px auto 0",
      width: "80%",
      height: "70%",
      display: "grid"}}>

      {Array.isArray(items) ?
      items.map((item) => (
        <Grid 
          item 
          key={item._id} 
          sx={{ 
            cursor: "pointer",
            backgroundColor: "white",
            border: "10px solid white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            margin: '2rem 1rem',
            maxWidth: '250px',
            width: '100%', 
            borderRadius: "10px",
            transition: 'transform 0.2s ease-in-out', // Added transition property
            '&:hover': {
              transform: 'scale(1.2) translate(10px, -10px)', // Added hover effect with translation
            },
      
          }}
        >
          <img
            className="item-image"
            src={item.image}
            alt="Item"
          />
          <Typography sx = {{marginTop: "2fr", width: "90%"}}  textAlign='center' variant='title-lg'>{item.product_name}</Typography>
          <Button
            variant="contained"
            sx={{width: "50%", height: "1fr", backgroundColor: "yellow", color: "blue", alignSelf: "center", marginTop: "1fr"}}
            onClick={() => handleOnCart(item)}
          >
           <Typography sx = {{marginTop: "2fr", width: "90%", fontSize: "0.8rem"}}> Add to Cart {item.price}$ </Typography>
            </Button>
          <Typography sx={{width: "100%", height: "10fr", backgroundColor: "lightblue", alignSelf: "center", marginTop: "16px", margin: '0', overflow: "hidden"}} >Description : {item.description}</Typography>
        </Grid>

      )): (
        <p>Error: Items is not an array</p>
      )}
    </Grid>
  );
}

export default Items;
