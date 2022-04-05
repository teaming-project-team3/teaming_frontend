import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import 'swiper/scss'
import 'swiper/scss/pagination'
import projectDetail0Img from "../../static/images/main/jumboTron2.png"
import projectDetail1Img from "../../static/images/main/jumboTron3.png"
import projectDetail2Img from "../../static/images/main/jumboTron4.png"
import projectDetail3Img from "../../static/images/main/jumboTron0.png"


SwiperCore.use([Pagination, Autoplay])

function SwiperSlider() {
  return(
    <div className='flex justify-center'>
      <Swiper
        
        flipEffect={true}
        style={{height:'31.188em'}}
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide><img className="w-full h-full" src={projectDetail3Img} alt="html logo" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full" src={projectDetail1Img} alt="html logo" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full" src={projectDetail0Img} alt="html logo" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full" src={projectDetail2Img} alt="html logo" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSlider;