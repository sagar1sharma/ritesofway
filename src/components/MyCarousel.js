import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  return (
    <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
      <div>
        <img src="https://static.wixstatic.com/media/11062b_9a5149f9cba7432c87e804dadeb2e595~mv2.jpg/v1/fill/w_1903,h_583,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_9a5149f9cba7432c87e804dadeb2e595~mv2.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="https://static.wixstatic.com/media/88810b_eccb134cfb0f4dd7bb311201277fc620~mv2.jpg/v1/fill/w_1903,h_583,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/88810b_eccb134cfb0f4dd7bb311201277fc620~mv2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="https://static.wixstatic.com/media/nsplsh_dd4b6253404845d5942aee6209b53bab~mv2.jpg/v1/fill/w_1903,h_583,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_dd4b6253404845d5942aee6209b53bab~mv2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src='https://static.wixstatic.com/media/88810b_7620cbc2b16e4e80b36735a219d66acc~mv2.jpg/v1/fill/w_1903,h_583,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/88810b_7620cbc2b16e4e80b36735a219d66acc~mv2.jpg'></img>
      </div>
      <div>
        <img src='https://static.wixstatic.com/media/88810b_c8e54239eee541e89effe82e2b25d810~mv2.jpg/v1/fill/w_1022,h_313,al_c,q_80,enc_auto/88810b_c8e54239eee541e89effe82e2b25d810~mv2.jpg'></img>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
