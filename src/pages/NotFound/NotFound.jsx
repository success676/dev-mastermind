import { Link } from 'react-router-dom';
import './style.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      <div className="not-found-content">
        <div className="astro-animation">
          <div className="astronaut">
            <div className="helmet"></div>
            <div className="face">
              <div className="eyes">
                <div className="eye left"></div>
                <div className="eye right"></div>
              </div>
              <div className="mouth"></div>
            </div>
            <div className="body"></div>
            <div className="arms">
              <div className="arm left"></div>
              <div className="arm right"></div>
            </div>
            <div className="legs">
              <div className="leg left"></div>
              <div className="leg right"></div>
            </div>
          </div>
          <div className="floating-objects">
            <div className="planet"></div>
            <div className="satellite"></div>
            <div className="star small"></div>
            <div className="star medium"></div>
            <div className="star large"></div>
          </div>
        </div>

        <div className="error-text">
          <h1>404</h1>
          <h2>Lost in Space</h2>
          <p>Oops! The page you're looking for has drifted off into the cosmos.</p>
          <Link to="/" className="home-button">
            <span>Return to Earth</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;