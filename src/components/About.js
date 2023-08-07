import '../styles/About.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section className='about' id='about'>
      <Container>
        <Row>
          <Col>
            <h2>{t('About Me')}</h2>
            <div className='about-container'>
              <div className='about-img'>
                <img src='https://robohash.org/ ?set=set4' alt='kitty' />
              </div>
              <div>
                <div className='about-text'>
                  <p>
                    {t(
                      "Beyond my technical pursuits, I find joy in various hobbies that enrich my life. When I'm not diving into code, you can often find me exploring virtual worlds as an avid gamer, seeking captivating stories and challenging quests. In these digital realms, I have discovered another passion – virtual photography. Capturing breathtaking moments and unique perspectives in virtual landscapes allows me to blend my love for technology and creativity."
                    )}
                  </p>
                  <p>
                    {t(
                      "Moreover, I'm fascinated by the vast potential of Artificial Intelligence. Working with AI technologies has been an incredible journey of discovery and innovation. Harnessing the power of machine learning and data-driven insights, I've had the privilege of exploring cutting-edge solutions that have the potential to revolutionize various industries."
                    )}
                  </p>
                  <p>
                    {t(
                      "In addition to my AI endeavors, I am also a devoted feline enthusiast. I absolutely adore cats and cherish every moment spent with these curious and playful creatures. There's something magical about the companionship and affection they bring into my life."
                    )}
                  </p>
                  <p>
                    {t(
                      "On the other hand, I relish the exhilarating rush of gliding down snow-covered slopes as a passionate snowboarder, embracing the beauty of winter. But that's not all! I also have an artistic side, and I indulge in handcrafts like painting and punch needling. These creative outlets provide me with a sense of fulfillment and allow me to express myself in different ways."
                    )}
                  </p>
                  <p>
                    {t(
                      "Combining my love for web development with my diverse interests, including AI exploration, I aim to build digital experiences that captivate and delight users, just as my hobbies bring joy and fulfillment to my own life. Let's embark on an exciting journey together and create something extraordinary!"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
