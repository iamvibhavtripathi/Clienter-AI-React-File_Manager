import { AuthContextProvider } from './API/context/AuthContext';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/contents/Home';
import Signup from './components/contents/SignUp';
import Login from './components/contents/Login';
import DashBoard from './components/contents/DashBoard';
import Folder from './components/contents/Folder';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
      <>
        <BrowserRouter>
          <AuthContextProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                 <Route path="/Signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                {/* <Route path="/dashboard" element={<DashBoard/>}/>
                <Route path="/folder" element={<Folder/>}/> */}

                <Route path="/dashboard" element={<ProtectedRoute><DashBoard /></ProtectedRoute>}/>
                <Route path="/folder/:id" element={<ProtectedRoute><Folder /></ProtectedRoute>}/>

            </Routes>
          </AuthContextProvider>
        </BrowserRouter>
      </>

    );
}

export default App;
