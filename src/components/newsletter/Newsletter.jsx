import "@/components/newsletter/Newsletter.scss";
import { Send } from "lucide-react";
import Link from "next/link";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__left">
            <div className="newsletter__heading-section">
              <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="newsletter__form-section">
              <form action="#" method="post" className="newsletter__form">
                <div className="newsletter__form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="newsletter__form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="newsletter__form-group-submit">
                  <button type="submit" className="main-button-dark">
                    <Send />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="newsletter__right">
            <div className="newsletter__right-row">
              <h3>Store Location:</h3>
              <p>Sunny Isles Beach, FL 33160, United States</p>
            </div>
            <div className="newsletter__right-row">
              <h3>Work Hours:</h3>
              <p>07:30 AM - 9:30 PM Daily</p>
            </div>
            <div className="newsletter__right-row">
              <h3>Phone:</h3>
              <p>+91 9876543210</p>
            </div>
            <div className="newsletter__right-row">
              <h3>Email:</h3>
              <p>info@company.com</p>
            </div>
            <div className="newsletter__right-row">
              <h3>Office Location:</h3>
              <p>North Miami Beach</p>
            </div>
            <div className="newsletter__right-row">
              <h3>Office Location:</h3>
              <p>
                <Link href="#">Facebook</Link> {`, `}
                <Link href="#">Instagram</Link> {`, `}
                <Link href="#">Behance</Link> {`, `}
                <Link href="#">Linkedin</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
