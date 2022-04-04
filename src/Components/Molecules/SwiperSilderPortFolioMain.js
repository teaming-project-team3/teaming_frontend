import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import projectImg from '../../static/portfolio.png'


SwiperCore.use([Pagination, Autoplay])

function SwiperSliderPortFolioMain(props) {
  // eslint-disable-next-line no-unused-vars
  const { imgUrlList } = props;

  return(
    <div className='flex items-center h-full mx-1'>
      <Swiper
        shouldSwiperUpdate
        style={{height:'8rem', width:'11rem'}}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img className="w-full bg-cover rounded-[0.625rem]" src={imgUrlList[0]} alt={projectImg} /></SwiperSlide>
        {imgUrlList.length>0 && imgUrlList[0] &&
            <SwiperSlide><img className="w-full rounded-[0.625rem]" src={imgUrlList[0]} alt={projectImg} /></SwiperSlide>
        }
        {imgUrlList.length>0 && imgUrlList[1] &&
            <SwiperSlide><img className="w-full rounded-[0.625rem]" src={imgUrlList[1]} alt={projectImg} /></SwiperSlide>
        }
        {imgUrlList.length>0 && imgUrlList[2] &&
            <SwiperSlide><img className="w-full rounded-[0.625rem]" src={imgUrlList[2]} alt={projectImg} /></SwiperSlide>
        }
        
      </Swiper>
    </div>
  )
}

export default SwiperSliderPortFolioMain;