import React from 'react';
import  "../styles/loading-screen.css";

const LoadingScreen = () => {
    return (
        <div className="overlay">
        <div className="spinner-border float-end" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
};

export default LoadingScreen;