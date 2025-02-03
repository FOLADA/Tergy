import  { useEffect, useState } from "react";
import "./Footer.css";

const FooterOfTerg = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`custom-footer ${isVisible ? "footer-visible" : ""}`}>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">თერგი</div>
          <nav className="footer-nav">
            <a href="#">ნაწარმოებანი</a>
            <a href="#">ციტატები</a>
            <a href="#">ესეისტი AI</a>
            <a href="#">ჩვენს შესახებ</a>
          </nav>
        </div>

        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

        <div className="footer-contact">
          <p>რაიმე შეკითხვა გაქვთ? დაგვიკავშირდით</p>
          <div className="footer-input">
            <input type="email" placeholder="შეიყვანეთ თქვენი ელ. ფოსტა" />
            <button>გაგზავნა</button>
          </div>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} თერგი. ყველა უფლება დაცულია
        </p>
      </div>
    </footer>
  );
};

export default FooterOfTerg;
