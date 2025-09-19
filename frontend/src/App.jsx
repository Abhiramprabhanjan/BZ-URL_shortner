import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/Profile/Profile';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import './index.css';
import UrlShortner from './UrlShortner';

function App() {
  return (
    <Router>
      <HeaderMegaMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
<Route path='/urlshortner' element={<UrlShortner/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
