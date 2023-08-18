import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/linkedin.png';
import github from '../assets/img/github.png';
import fem from '../assets/img/fem.svg';
import '../styles/NavBar.css';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const NavBar = () => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container className='navbar-container'>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              {t('Home')}
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              {t('Skills')}
            </Nav.Link>
            <Nav.Link
              href='#about'
              className={
                activeLink === 'about' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('about')}
            >
              {t('About Me')}
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              {t('Projects')}
            </Nav.Link>
            <Nav.Link
              href='#photo'
              className={
                activeLink === 'photo' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('photo')}
            >
              {t('Virtual Photography')}
            </Nav.Link>
          </Nav>
          <div className='navbar-right'>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a
                  href='https://www.linkedin.com/in/busrakahramanb/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={linkedin} alt='linkedIn' />
                </a>
                <a
                  href='https://github.com/BusraKahraman'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={github} alt='GitHub' />
                </a>
                <a
                  href='https://www.frontendmentor.io/profile/BusraKahraman'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={fem} alt='Frontend Mentor' />
                </a>
              </div>
              <Link to='contact' smooth={true} duration={500}>
                <button className='vvd'>
                  <span>{t("Let's Connect")}</span>
                </button>
              </Link>
            </span>
            <LanguageSwitcher />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
