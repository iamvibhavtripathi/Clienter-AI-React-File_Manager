import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { UserAuth } from '../../API/context/AuthContext';
import {  Paper, Typography, TextField, Button, Container, Box } from '@mui/material';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const {user, signUp} = UserAuth();

      const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(e.target);
        //console.log(e.target.value);
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(formData.password !== formData.confirmPassword){
            toast.error("Password Do Not Match");
            return;
        }

        try{
            await signUp(formData.email, formData.password);
            toast.success("Sign Up Successfully")
            navigate('/login');
        }
        catch(error){
            toast.error("Error Signing In");
        }
      };

  return (
    <div>
      < Toaster/>
      <section
        className="bg-gray-70 dark:bg-gray-100"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 272, 123, 1.2), rgba(0, 8, 8, 1.2))',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container style={{ padding: '6px', margin: '8px' }}>
        <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
                flexDirection: 'column',
                padding: '16px', 
                margin: 'auto',
                height: '100vh', 
                paddingTop: 20,               }}        
         >

          <Link
            to="/"
            style={{
              display: 'flex',

              alignItems: 'center',
              marginBottom: '28px',
              fontSize: '1.5rem',
              fontWeight: '400',
              color: '#432454',
              textDecoration: 'none',
            }}
          >
            File Manager
          </Link>

          <Paper elevation={3} 
          style={{ 
            width: '100%',
             padding: '16px', 
             borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>

            <Typography variant="h6" 
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:'center',
                  marginBottom: '24px', 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: '#374151', }}>
              Create an account
            </Typography>
          <div>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <TextField
                type="email"
                label="Your email"
                id="email"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <TextField
                type="password"
                label="Password"
                id="password"
                name="password"
                variant="outlined"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />

              <TextField
                type="password"
                name="confirmPassword"
                label="Confirm password"
                id="confirmPassword"
                variant="outlined"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />

              <Button
                type="submit"
                style={{
                  backgroundColor: '#43121b',
                  color: '#fff',
                  padding: '10px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Create an account
              </Button>

              <Typography variant="body2" style={{ color: '#6b7280' }}>
                Already have an account?
                <Link to = "/login" style={{ color: '#3b82f6', marginLeft: '4px' }}>
                  Login here
                </Link>
              </Typography>
            </form>
          </div>
          </Paper>
        </div>
        </Container>
      </section>
    
    </div>
  )
};

export default Signup;
