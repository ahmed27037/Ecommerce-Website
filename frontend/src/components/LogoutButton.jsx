import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
    
  return (
  isAuthenticated && (
   <Button 
   variant="contained" 
   onClick={() => logout()}
   sx={{ backgroundColor: 'yellow', transition: 'transform 0.3s'}}
   style={{ color: 'blue' }}
   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.6)'}
   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
   >
    Log out
    </Button>
  )
  );
}

export default LogoutButton;