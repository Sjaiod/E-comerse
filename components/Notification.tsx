import React, { useState, useEffect } from 'react';

const Notification = ({ type, message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-md shadow-md ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {message}
    </div>
  );
};

export default Notification;