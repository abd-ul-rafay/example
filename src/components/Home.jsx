import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();

    useEffect(() => { 
        document.title = `Home | Example`;
    }, [location.pathname]);

    return (
        <div>
            <h2>Home</h2>
            <Link to="/about">About</Link>
            <br />
            <Link to="/contact">Contact Me</Link>
        </div>
    )
}

export default Home;
