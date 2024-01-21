import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../API/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const Paea= styled(Typography)`
  text-decoration: bold;
  color: #006400;
  box-shadow: 10px;
  margin: '0.5rem'; 
  alignSelf: 'center';
  fontSize: '1.25rem';
  fontWeight: '600';
  whiteSpace: 'nowrap';
  color: '#fff';

    & : hover{
      text-decoration: underline;
  }


`



const NavBar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = async () =>{
    try{
      await logOut();
      navigate('/');
    }
    catch (error) {
      console.log(error);
    }
  };
  const theme = useTheme();

  return (
    <div>
    <AppBar position="fixed" className={`bg-white dark:bg-gray-900 ${theme.zIndex.appBar}`}>
      <Toolbar className="max-w-screen-xl mx-auto p-4" >
        <Link to="/" className="flex items-left space-x-3 rtl:space-x-reverse">
          <Paea variant="h4"  className="mx-4 " >
            File Management System
          </Paea>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button
                  variant="contained"
                  color="primary"
                  className="mx-4"
                >
                  Dashboard
                </Button>
              </Link>
              <Button
                variant="contained"
                color="error"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <div>
              <Link to="/login">
                <Button variant="contained" color="secondary" className="mx-2">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="contained" color="success">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  
    </div>
  )
}
export default NavBar;
