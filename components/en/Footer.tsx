import React from "react";
import Link from "next/link";
import PrimaryBtn from "@/components/PrimaryBtn";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-fluid">
        <div className="footer-bottom py-8">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4">
                <div className="copyright">
                  <p>
                    Copyright © {new Date().getFullYear()}{" "}
                    <Link href="/">RickedStudios</Link> - All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright d-flex gap-3 align-items-center justify-content-center justify-content-md-end">
                  <Link href="privacy-policy">Privacy</Link>
                  <Link href="terms">Terms & Services</Link>
                </div>
              </div>
              <div className="col-md-2">
                {/* Social Media Buttons */}
                <div className="social-media-buttons d-flex gap-3 justify-content-end">
                  <a href="https://www.facebook.com/RickedStudios" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.twitter.com/RickedStudios" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/RickedStudios" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
