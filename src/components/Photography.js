import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Photography.css';
import ds1 from '../assets/photography/ds/ds1.jpg';
import ds2 from '../assets/photography/ds/ds2.jpg';
import ds3 from '../assets/photography/ds/ds3.jpg';
import ds4 from '../assets/photography/ds/ds4.jpg';
import ds5 from '../assets/photography/ds/ds5.jpg';
import ds6 from '../assets/photography/ds/ds6.jpg';
import ds7 from '../assets/photography/ds/ds7.jpg';
import rdr1 from '../assets/photography/rdr2/rdr1.png';
import rdr2 from '../assets/photography/rdr2/rdr2.png';
import rdr3 from '../assets/photography/rdr2/rdr3.png';
import rdr4 from '../assets/photography/rdr2/rdr4.png';
import rdr5 from '../assets/photography/rdr2/rdr5.png';
import rdr6 from '../assets/photography/rdr2/rdr6.png';
import rdr7 from '../assets/photography/rdr2/rdr7.png';
import rdr8 from '../assets/photography/rdr2/rdr8.png';
import rdr9 from '../assets/photography/rdr2/rdr9.png';
import rdr10 from '../assets/photography/rdr2/rdr10.png';
import rdr11 from '../assets/photography/rdr2/rdr11.png';
import rdr12 from '../assets/photography/rdr2/rdr12.png';
import rdr13 from '../assets/photography/rdr2/rdr13.png';
import rdr14 from '../assets/photography/rdr2/rdr14.png';
import rdr15 from '../assets/photography/rdr2/rdr15.png';
import rdr16 from '../assets/photography/rdr2/rdr16.png';

const photoList = [
  ds1,
  ds2,
  ds3,
  ds4,
  ds5,
  ds6,
  ds7,
  rdr1,
  rdr2,
  rdr3,
  rdr4,
  rdr5,
  rdr6,
  rdr7,
  rdr8,
  rdr9,
  rdr10,
  rdr11,
  rdr12,
  rdr13,
  rdr14,
  rdr15,
  rdr16,
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Photography = () => {
  const { t } = useTranslation();
  return (
    <section className='photo' id='photo'>
      <Container>
        <Row>
          <Col>
            <div className='photo-container'>
              <h2>{t('Virtual Photography')}</h2>
              <div className='photo-text'>
                <p>
                  {t(
                    "Welcome to the Virtual Photography section, where I'm thrilled to share with you a collection of captivating moments captured from some of my favorite games!"
                  )}
                </p>
              </div>
              <Carousel
                responsive={responsive}
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=''
                containerClass='container'
                dotListClass=''
                draggable
                focusOnSelect={false}
                infinite
                itemClass=''
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=''
                slidesToSlide={1}
                swipeable
              >
                {photoList.map((photo, index) => (
                  <div key={index} className='item'>
                    <img src={photo} alt={`VP ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Photography;
