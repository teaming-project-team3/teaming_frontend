import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

SwiperCore.use([Pagination, Autoplay])

function SwiperSliderPortFolioMain(props) {
  // eslint-disable-next-line no-unused-vars
  const { imgUrlList } = props;

  return(
    <div className='flex items-center h-full mx-1'>
      <Swiper
        style={{height:'8rem', width:'11rem'}}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img className="h-[8rem] rounded-[0.625rem]" src={imgUrlList[0]} alt={require('../../static/portfolio.png').default} /></SwiperSlide>
        {imgUrlList.length>0 && imgUrlList[0] &&
            <SwiperSlide><img className="h-[8rem] rounded-[0.625rem]" src={imgUrlList[0]} alt={require('../../static/portfolio.png').default} /></SwiperSlide>
        }
        {imgUrlList.length>0 && imgUrlList[1] &&
            <SwiperSlide><img className="h-[8rem] rounded-[0.625rem]" src={imgUrlList[1]} alt={require('../../static/portfolio.png').default} /></SwiperSlide>
        }
        {imgUrlList.length>0 && imgUrlList[2] &&
            <SwiperSlide><img className="h-[8rem] rounded-[0.625rem]" src={imgUrlList[2]} alt={require('../../static/portfolio.png' ).default} /></SwiperSlide>
        }
        
      </Swiper>
    </div>
  )
}

export default SwiperSliderPortFolioMain;