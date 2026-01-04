import React, { useEffect } from "react";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const bgColor =
    type === "success" ? "bg-green-600" : type === "error" ? "bg-red-600" : "bg-gray-800";

  return (
    <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md text-white z-50 ${bgColor} shadow-lg`}>
      {message}
    </div>
  );
};

export default Toast;
