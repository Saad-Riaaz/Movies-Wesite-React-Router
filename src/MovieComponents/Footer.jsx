import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">

            {/* Footer Top */}
            <div className="footer-container">

                {/* Brand / Logo */}
                <div className="footer-brand">

                    <h2 className="footer-logo">
                        CineVault
                    </h2>

                    <p>
                        Your ultimate destination for movies,
                        series and entertainment.
                    </p>

                </div>


                {/* Quick Links */}
                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/Genres">Movies</Link>
                        </li>

                        <li>
                            <Link to="/Login">Login</Link>
                        </li>

                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>

                </div>


                {/* Genres */}
                <div className="footer-section">

                    <h3>Genres</h3>

                    <ul>
                        <li>Action</li>
                        <li>Comedy</li>
                        <li>Drama</li>
                        <li>Horror</li>
                        <li>Thriller</li>
                    </ul>

                </div>


                {/* Support */}
                <div className="footer-section">

                    <h3>Support</h3>

                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>FAQ</li>
                    </ul>

                </div>


                {/* Social Media */}
                <div className="footer-section">

                    <h3>Follow Us</h3>

                    <div className="social-links">

                        <a href="#" aria-label="Facebook">
                            Facebook
                        </a>

                        <a href="#" aria-label="Instagram">
                            Instagram
                        </a>

                        <a href="#" aria-label="YouTube">
                            YouTube
                        </a>

                        <a href="#" aria-label="Twitter">
                            Twitter
                        </a>

                    </div>

                </div>

            </div>


            {/* Footer Bottom */}
            <div className="footer-bottom">

                <p>
                    © 2026 CineVault. All rights reserved.
                </p>

                <p>
                    Made with ❤️ by Saad Riaz for movie lovers.
                </p>

            </div>

        </footer>
    );
};