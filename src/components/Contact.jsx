import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Contact = () => {
    const location = useLocation();

    useEffect(() => { 
        document.title = 'Contact | Example';
    }, [location.pathname]);

    return (
        <div>
            <h2>Contact</h2>
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
        </div>
    )
}

export default Contact;
