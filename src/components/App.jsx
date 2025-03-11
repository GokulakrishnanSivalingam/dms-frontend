import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <button onClick={() => handleNavigation('/emergency')} className="primary-btn">Learn More</button>
    <button onClick={() => handleNavigation('/emergency')} className="secondary-btn">Emergency Call</button>
  );
};

export default App; 