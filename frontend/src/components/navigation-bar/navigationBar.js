import './navigationBar.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';
import { AppBar, Box, TextField, IconButton, Grid} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


function NavigationBar({ cartitemcount, handleOnChange, handleOnClick, ClearFields, cartcountstorage, setQuery, query }) {
  function handleOnClickImage() {
    setQuery('');
  handleOnClick({ preventDefault: () => {} }, ''); 
}

  
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position = "static"sx = {{transition: 'transform 0.5s ease-in-out', // Added transition property
                  '&:hover': { transform: 'scale(1.01) translate(1px, -1px)'}, }}>
    <Grid container alignItems="center" spacing={2} justifyContent="space-between">
    <Grid item>
    <Link to="/home">
    <Box
    component="img"
    sx={{ height : "5rem", marginTop: "0.7rem", marginBottom: "0.3rem"}}
    className="website-logo" 
    alt="home"
    src="https://th.bing.com/th/id/OIG.6QT6aqp4BqTLGfEa91vH?w=1024&h=1024&rs=1&pid=ImgDetMain"
    onClick={() => handleOnClickImage()}
    />
    </Link>
    </Grid>

      <Grid item alignItems="stretch" style={{ display: "flex"}}>
        <TextField 
        id="outlined-basic" 
        label="what are we buying today" 
        variant="outlined" 
        defaultValue=""
        value = {query}
        onChange={(newValue) => {
          setQuery(newValue.target.value);
        }}
      
        sx={{ width: '15rem', '& fieldset': { borderColor: 'yellow', borderRadius: '4.5px 0px 0px 4.5px' },  transition: 'transform 0.3s'}}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        <IconButton
        aria-label="search"
        variant="contained"
        onClick={handleOnClick}
        sx={{ backgroundColor: 'yellow', borderRadius: '0px 4.5px 4.5px 0px',  transition: 'transform 0.3s'}}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.4)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>

        <SearchRoundedIcon/>
        </IconButton>
        </Grid>

         
        <Grid item>
         <LoginButton/>
         <LogoutButton/>
         </Grid>
         <Grid item>
         <Profile/>
         </Grid>
        
         <Grid item sx={{ marginRight: '3rem' }}>
        <Link to="/cart">
        <Box
          sx={{
            backgroundColor: 'yellow',
            padding: '8px',
            borderRadius: '2px',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Badge
            badgeContent={cartitemcount}
            color="primary" >
            <ShoppingCartIcon />
          </Badge>  
          </Box>
       </Link>
       </Grid>

       </Grid>
      </AppBar>
      </Box>
  );
}

export default NavigationBar;
