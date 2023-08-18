import '../styles/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/linkedin.png';
import github from '../assets/img/github.png';
import copyright from '../assets/img/copyright.png';
import fem from '../assets/img/fem.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col sm={6} className='text-center text-sm-start'>
            <img src={logo} alt='Logo' className='footer-logo' />
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
            <div className='footer-social-icon'>
              <a
                href='https://www.linkedin.com/in/busrakahramanb/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={linkedin} alt='linkedIn' className='social-img' />
              </a>
              <a
                href='https://github.com/BusraKahraman'
                target='_blank'
                rel='noreferrer'
              >
                <img src={github} alt='GitHub' className='social-img' />
              </a>
              <a
                href='https://www.frontendmentor.io/profile/BusraKahraman'
                target='_blank'
                rel='noreferrer'
              >
                <img src={fem} alt='Frontend Mentor' />
              </a>
            </div>
            <p>
              <img src={copyright} alt='copyright' className='copyright' />
              2023. {t('Made by')}{' '}
              <a
                href='https://www.linkedin.com/in/busrakahramanb/'
                target='_blank'
                rel='noreferrer'
              >
                Büşra Kahraman
              </a>
              . {t('Inspired by')}{' '}
              <a
                href='https://www.youtube.com/watch?v=hYv6BM2fWd8'
                target='_blank'
                rel='noreferrer'
              >
                {t('Webdecoded')}
              </a>
              . {t('Icons by')}{' '}
              <a href='https://icons8.com/' target='_blank' rel='noreferrer'>
                Icons8
              </a>
              . <br /> {t('All rights reserved')}.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
