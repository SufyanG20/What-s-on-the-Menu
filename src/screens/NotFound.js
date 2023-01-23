import React from "react";
import "../App.css";

function NotFound() {
    
    return(
        <div className = "centered">
            <h1 className = "landing-title">404</h1>
            <h3 className = "not-found">Page Not Found</h3>
            <p className = "not-found">Check if you entered the correct URL</p>
        </div>
    )
}

export default NotFound