import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'About | Example';
    }, [location.pathname]);

    return (
        <div>
            <h2>About</h2>
            <Link to="/">Home</Link>
            <br />
            <Link to="/contact">Contact Me</Link>
        </div>
    )
}

export default About;
