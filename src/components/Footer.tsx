import { Link } from 'react-router-dom';

const Footer = (): JSX.Element => (
  <footer className="main-footer">
    <div className="main-footer--locations">
      <h1>Locations</h1>
      <div className="main-footer--locations_buttons">
        <Link to="vinton-center">
          <button aria-role="navigation" className="main-footer--locations_buttons--vinton btn btn-white">Vinton Center</button>
        </Link>
        <Link to="/locations/460-center">
          <button aria-role="navigation" className="main-footer--locations_buttons--460 btn btn-white">460 Center</button>
        </Link>
        <Link to="/locations/parkway-center">
          <button aria-role="navigation" className="main-footer--locations_buttons--parkway btn btn-white">The Parkway Center</button>
        </Link>
      </div>
    </div>
    <div className="main-footer--social">
      <a href="https://facebook.com">
        <i className="fab fa-facebook" />
      </a>
      <a href="https://twitter.com">
        <i className="fab fa-twitter" />
      </a>
    </div>
    <div className="main-footer--links">
      <Link to="/contact">Request a Tour</Link><span className="nb-space">|</span>
      <Link to="/contact">Contact Us</Link><span className="nb-space">|</span>
      <Link to="/privacy">Privacy</Link>
    </div>
    <div className="main-footer--logo">
      <img src="https://dl.dropboxusercontent.com/s/w9gkckfkvhw6tek/ccd_logo.jpg?dl=0" alt="Caring Child Daycare Logo" />
    </div>
  </footer>
);

export default Footer;
