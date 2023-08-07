import { Col, Container, Row } from 'react-bootstrap';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Banner.css';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <h1>
              {t("Hi! I'm Büşra")}
              <br />
              <span className='wrap'>
                <Typewriter text={t('Web Developer')} delay={500} />
              </span>
            </h1>
            <p>
              {t(
                'Hello there! I am a Computer Engineering graduate with a deep passion for web development, particularly in the exciting realm of front-end development. The power of crafting immersive and visually stunning user experiences through code ignites my creativity and drives me to continuously learn and grow in this dynamic field.'
              )}
            </p>
            <Link to='skills' smooth={true} duration={500}>
              <button className='banner-btn'>
                <div className='button-content'>
                  <span>{t('Know More')}</span>
                  <span className='arrow-down'>
                    <ArrowDownCircle size={25} />
                  </span>
                </div>
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
