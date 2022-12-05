import React from 'react';
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const backToHome = () => navigate(`/`);
  return (
    <div className="error_page">
      <h2>this page is wrong approach.</h2>
      <div>⚠︎</div>
      <button onClick={backToHome}>Back to our site</button>
    </div>
  )
}
