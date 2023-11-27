import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, CardHeader } from "@mui/material";

const Profile = () => {
  const { user, isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading</div>;
  }

  if (!isAuthenticated) {
    return ;
  }

  return (
    isAuthenticated && (
      <CardHeader
      avatar = { <Avatar 
      alt={user.name} 
      src={user.picture} 
      sx={{ width: 56, height: 56 }}/>
      }
     title = {user.name}
  />
    )
  );
};

export default Profile;
