import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
    } else {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setFormData({
        name: parsedUser.name,
        phone: parsedUser.phone
      });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/update-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        localStorage.setItem('user', JSON.stringify(updatedUser.data));
        setUser(updatedUser.data);
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!user) return null;

  return (
    <div className="profile-page">
      <Header />
      <main className="profile-content">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-avatar">
              {user.name[0].toUpperCase()}
            </div>
            <h1>{user.name}</h1>
          </div>

          <div className="profile-details">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="edit-form">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div className="button-group">
                  <button type="submit" className="save-button">Save Changes</button>
                  <button 
                    type="button" 
                    className="cancel-button"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="info-container">
                <div className="info-group">
                  <label>Name</label>
                  <p>{user.name}</p>
                </div>
                <div className="info-group">
                  <label>Phone</label>
                  <p>{user.phone}</p>
                </div>
                <button 
                  className="edit-button"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile; 