import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBox, FaBell, FaChartLine, FaWarehouse, FaSignOutAlt, FaBars } from 'react-icons/fa';
import userProfileImage from '../../assets/user.png';
import './Dashboard.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user); 


  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [activeLink, setActiveLink] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };



  const handleLinkClick = (linkName) => {
    if (linkName === 'Logout') {
      dispatch(logout());
      navigate('/login'); 
    } else {
      setActiveLink(linkName);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className="profile">
        <img src={userProfileImage} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <p className="profile-name">{user?.name}</p>
          <p className="profile-email">{user?.email}</p>
        </div>
      </div>
      <nav className="nav-links">
        <a 
          href="#" 
          className={`nav-link ${activeLink === 'Dashboard' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('Dashboard')}
        >
          <FaHome /> Dashboard
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeLink === 'Products' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('Products')}
        >
          <FaBox /> Products
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeLink === 'Notifications' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('Notifications')}
        >
          <FaBell /> Notifications
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeLink === 'Analytics' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('Analytics')}
        >
          <FaChartLine /> Analytics
        </a>
        <a 
          href="#" 
          className={`nav-link ${activeLink === 'Inventory' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('Inventory')}
        >
          <FaWarehouse /> Inventory
        </a>
      </nav>
      <div className="logout">
        <a 
          className={`nav-link ${activeLink === 'Logout' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('Logout')}
        >
          <FaSignOutAlt /> Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
