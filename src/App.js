import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeSection from './components/WelcomeSection';
import RegistrationForm from './components/SignUp';
import Login from './components/LoginForm';
import Dashboard from './components/Dashboard/DashboardMain'
import './App.css';


const AuthLayout = ({ children }) => {
  return (
    <div className="App">
      <div className="container">
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <AuthLayout>
              <WelcomeSection />
              <RegistrationForm />
            </AuthLayout>
          } 
        />
        <Route 
          path="/login" 
          element={
            <AuthLayout>
              <WelcomeSection />
              <Login />
            </AuthLayout>
          } 
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
