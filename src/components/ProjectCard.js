import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ title, description, imgUrl, sourceCode, liveLink }) => {
  const { t } = useTranslation();
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt='project' />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='proj-links'>
            <a
              href={sourceCode}
              target='_blank'
              rel='noopener noreferrer'
              className='proj-btns'
            >
              {t('Source Code')}
            </a>
            <a
              href={liveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='proj-btns'
            >
              {t('See Live')}
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
