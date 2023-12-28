// NotificationComponent.js
import React from 'react';

const NotificationComponent = ({ message }) => {
  return (
    <div className="notification">
      {message}
    </div>
  );
};

export default NotificationComponent;
