import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Landingpage } from './domain/landingpage/landingpage';
import Header from './widgets/header/header';
import { DetailsPage } from './domain/detailspage/detailspage';
import { CartPage } from './domain/cartpage/cartpage';
import { SearchPage } from './domain/searchpage/searchpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={<Landingpage />} 
            />
            <Route 
              path="/details/:id" 
              element={<DetailsPage />} 
            />
            <Route
              path="/cart"
              element={<CartPage />}
            />
            <Route
              path="/search"
              element={<SearchPage />}
            />
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;