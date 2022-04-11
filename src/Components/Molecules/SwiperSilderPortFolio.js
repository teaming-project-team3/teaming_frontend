import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { useRef, useState } from 'react';
import arrow from '../../static/images/userStats/arrow.png'
import projectImg from '../../static/portfolio.png'


SwiperCore.use([Navigation, Pagination, Autoplay])

function SwiperSliderPortFolio(props) {
  // eslint-disable-next-line no-unused-vars
  const [swiper, setSwiper] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const { imgUrlList } = props;

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return(
    <div>
      <Swiper
        ref={setSwiper}
        style={{height:'10em', width:'15em'}}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        onBeforeInit={(swiper)=>{
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.activeIndex = mainImageIndex;
          swiper.navigation.update();
        }}
        onSwiper={setSwiper}
        onSlideChange={(e)=>{setMainImageIndex(e.activeIndex)}}
        navigation={{
            prevEl : navigationPrevRef.current,
            nextEl : navigationNextRef.current
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img className="w-[15.688rem] h-[9.938rem] rounded-[0.625rem]" src={imgUrlList[0]} alt={projectImg} /></SwiperSlide>
        {imgUrlList.length>0 && imgUrlList[0] &&
            <SwiperSlide><img className="w-[15.688rem] h-[9.938rem] rounded-[0.625rem]" src={imgUrlList[0]} alt={projectImg} /></SwiperSlide>
        }
        {imgUrlList.length>0 && imgUrlList[1] &&
            <SwiperSlide><img className="w-[15.688rem] h-[9.938rem] rounded-[0.625rem]" src={imgUrlList[1]} alt={projectImg} /></SwiperSlide>
        }
        {imgUrlList.length>0 && imgUrlList[2] &&
            <SwiperSlide><img className="w-[15.688rem] h-[9.938rem] rounded-[0.625rem]" src={imgUrlList[2]} alt={projectImg} /></SwiperSlide>
        }
        <div ref={navigationPrevRef}>
          <img src={arrow} alt={"<"}/>
        </div>
        <div ref={navigationNextRef}>
          <img src={arrow} alt={">"}/>
        </div>
        
      </Swiper>
    </div>
  )
}

export default SwiperSliderPortFolio;