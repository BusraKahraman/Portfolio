import '../styles/Contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import linkedIn from '../assets/img/linkedin-contact.png';
import resume from '../assets/img/pdf.png';
import resumeEn from '../assets/resumes/Busra_Kahraman_Resume.pdf';
import resumeTr from '../assets/resumes/Busra_Kahraman_CV.pdf';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const resumeLink = i18n.language === 'en' ? resumeEn : resumeTr;

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <h2>{t('Get In Touch')}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href='https://www.linkedin.com/in/busrakahramanb/'
              target='_blank'
              rel='noreferrer'
              className='links'
            >
              <img src={linkedIn} alt='linkedIn' />
              <span className='hidden-text'>{t('Find me on LinkedIn')}</span>
            </a>
          </Col>
          <Col>
            <a
              href={resumeLink}
              target='_blank'
              rel='noreferrer'
              className='links'
            >
              <img src={resume} alt='resume' />
              <span className='hidden-text'>{t('My Resume')}</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
