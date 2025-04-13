const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Контакт</h4>
          <p className="address">Никола Вапцаров 7, Скопје 1000</p>
          <p className="phone-number">078 357 896</p>
        </div>
        <div className="footer-kotur">
          <h2>КОТУР</h2>
          <p className="motto">
            "The best way to find yourself is to lose yourself in the service of
            others"
          </p>
          <img src="./landingPage/spoon.svg" alt="Spoon Icon" />
          <div className="footer-social-media-icons">
            <a
              href="https://www.facebook.com/KoturKafeiFilm/?locale2=gl_ES&_rdr"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/koturkafeifilm/?hl=en"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <p className="">2021 Котур. All Rights reserved.</p>
        </div>
        <div className="footer-workinghours">
          <h4>Работно Време</h4>
          <div>
            <p>Понеделник-Петок:</p>
            <p>08:00 am - 01:00 am</p>
          </div>
          <div>
            <p>Сабота-Недела:</p>
            <p>07:00 am - 11:00 pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
