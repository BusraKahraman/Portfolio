import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import swapi from '../assets/projects/swapi.png';
import smartBrain from '../assets/projects/smart-brain.png';
import robofriends from '../assets/projects/robofriends.png';
import columnCard from '../assets/projects/3-column-card.png';
import qrCard from '../assets/projects/qr-code-component.png';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import '../styles/Projects.css';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: 'Star Wars API',
      description: t('Using SWAPI, displaying Star Wars Characters'),
      imgUrl: swapi,
      sourceCode: 'https://github.com/BusraKahraman/Star-Wars-API',
      liveLink: 'https://busrakahraman.github.io/Star-Wars-API/',
      category: 'JavaScript',
    },
    {
      title: 'Smart Brain',
      description: t('Using Clarifai, this website can detect faces'),
      imgUrl: smartBrain,
      sourceCode: 'https://github.com/BusraKahraman/Smart-Brain',
      liveLink: 'https://smart-brain-xkh4.onrender.com/',
      category: 'React',
    },
    {
      title: 'Robofriends',
      description: t('Displaying users in a single page card view'),
      imgUrl: robofriends,
      sourceCode: 'https://github.com/BusraKahraman/Robofriends',
      liveLink: 'https://busrakahraman.github.io/Robofriends/',
      category: 'React',
    },
    {
      title: 'QR Code Component',
      description: t('Displaying 3 preview cards side by side using grid'),
      imgUrl: qrCard,
      sourceCode: 'https://github.com/BusraKahraman/QR-code-component',
      liveLink: 'https://busrakahraman.github.io/QR-code-component/',
      category: 'FEM',
    },
    {
      title: '3 Column Preview Card',
      description: t('Displaying a QR code in a card'),
      imgUrl: columnCard,
      sourceCode:
        'https://github.com/BusraKahraman/3-Column-Preview-Card-Component',
      liveLink:
        'https://busrakahraman.github.io/3-Column-Preview-Card-Component/',
      category: 'FEM',
    },
  ];

  const categories = ['All', 'React', 'JavaScript', 'FEM'];
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>{t('Projects')}</h2>
            <p>
              {t(
                "I'm excited to present these projects to you, and I hope they inspire you as much as they have inspired me. These projects serve as a glimpse into my potential and dedication to delivering impactful solutions that drive success."
              )}
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='All'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                {categories.map((category) => (
                  <Nav.Item key={category}>
                    <Nav.Link
                      eventKey={category}
                      onClick={() => setActiveCategory(category)}
                    >
                      {t(category)}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content>
                {categories.map((category) => (
                  <Tab.Pane key={category} eventKey={category}>
                    <Row>
                      {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
