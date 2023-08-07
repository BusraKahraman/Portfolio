import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import github from '../assets/img/githubc.png';
import blender from '../assets/img/blender.png';
import css from '../assets/img/css.png';
import express from '../assets/img/express.png';
import html from '../assets/img/html.png';
import jira from '../assets/img/jira.png';
import node from '../assets/img/node.png';
import js from '../assets/img/js.png';
import post from '../assets/img/post.png';
import react from '../assets/img/react.png';
import bash from '../assets/img/bash.png';
import git from '../assets/img/git.png';
import '../styles/Skills.css';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>{t('Skills')}</h2>
              <p>
                {t(
                  "As a Computer Engineering graduate with a fervent passion for web development, I take immense pride in my diverse skill set and expertise in various programming languages and frameworks. Below, you'll find an overview of my technical abilities that fuel my enthusiasm for creating captivating web experiences."
                )}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  <img src={github} alt='github logo' />
                  <h5>Github</h5>
                </div>
                <div className='item'>
                  <img src={html} alt='html logo' />
                  <h5>HTML5</h5>
                </div>
                <div className='item'>
                  <img src={css} alt='css logo' />
                  <h5>CSS3</h5>
                </div>
                <div className='item'>
                  <img src={js} alt='js logo' />
                  <h5>JavaScript</h5>
                </div>
                <div className='item'>
                  <img src={react} alt='react logo' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src={node} alt='node logo' />
                  <h5>Node</h5>
                </div>
                <div className='item'>
                  <img src={express} alt='express logo' />
                  <h5>Express</h5>
                </div>
                <div className='item'>
                  <img src={post} alt='postgreSQL logo' />
                  <h5>PostgreSQL</h5>
                </div>
                <div className='item'>
                  <img src={blender} alt='blender logo' />
                  <h5>Blender</h5>
                </div>
                <div className='item'>
                  <img src={jira} alt='jira logo' />
                  <h5>Jira</h5>
                </div>
                <div className='item'>
                  <img src={bash} alt='bash logo' />
                  <h5>Bash</h5>
                </div>
                <div className='item'>
                  <img src={git} alt='git logo' />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
