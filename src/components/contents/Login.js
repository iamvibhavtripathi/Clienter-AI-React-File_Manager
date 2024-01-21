import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { UserAuth } from '../../API/context/AuthContext';
import {  Paper, Container, Typography, TextField, Button } from '@mui/material';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

      const {user, logIn} = UserAuth();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await logIn(formData.email, formData.password);
            toast.success("Login Success", 1000);
            navigate('/dashboard');
        }
        catch(error){
            toast.error(error.message);
            // console.log(error);
        }
      };
      return (
        <div>
          <Toaster />
    
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
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
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
    
                <Paper
                  elevation={3}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div 
                          // style={{
                          //   padding: '1.5rem', 
                          //   margin: '5',       
                          //   display: 'flex',
                          //   flexDirection: 'column',
                          //   gap: '1rem',        
                          // }}
                    
                    >
                    <Typography
                      variant="h6"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent:'center',
                        marginBottom: '24px',
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: '#374151',
                      }}
                    >
                      Login
                    </Typography>
    
                    <form
                      onSubmit={handleSubmit}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                      }}
                      >
                      {/* <div> */}
                        {/* <label
                          htmlFor="email"
                          style={{
                            display: 'block',
                            marginBottom: '2px',
                            fontSize: 'sm',
                            fontWeight: 'medium',
                            color: 'text-gray-900',
                        
                          }}
                          >
                          Your email
                        </label> */}
                        <TextField
                          type="email"
                          label="Your email"
                          name="email"
                          id="email"
                          variant="outlined"
                          className="w-full"
                          placeholder="name@company.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />

                      {/* </div> */}
    
                        {/* <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Password
                        </label> */}
                        <TextField
                          type="password"
                          name="password"
                          id="password"
                          variant="outlined"
                          placeholder="••••••••"
                          className="w-full"
                          required
                          value={formData.password}
                          onChange={handleChange}
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
                        Login
                      </Button>
    
                      <Typography
                        variant="body2"
                        style={{ color: '#6b7280', marginTop: '8px' }}
                      >
                        New to this application?
                        <Link
                          to="/signup"
                          style={{ color: '#3b82f6', marginLeft: '4px' }}
                        >
                          SignUp here
                        </Link>
                      </Typography>
                    </form>
                  </div>
                </Paper>
              </div>
            </Container>
          </section>
        </div>
      );
    };
    
    export default Login;
    