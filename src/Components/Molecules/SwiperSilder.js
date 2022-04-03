import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import projectDetail0Img from "../../static/images/main/jumboTron2.png"
import projectDetail1Img from "../../static/images/main/jumboTron3.png"
import projectDetail2Img from "../../static/images/main/jumboTron4.png"
import JumboTron from '../Organisms/main/JumboTron';


SwiperCore.use([Navigation, Pagination, Autoplay])

function SwiperSlider() {
  return(
    <div>
      <Swiper
        style={{height:'31.188em'}}
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide><JumboTron/></SwiperSlide>
        <SwiperSlide><img className="w-full h-full mx-10" src={projectDetail0Img} alt="html logo" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full mx-10" src={projectDetail1Img} alt="html logo" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full mx-10" src={projectDetail2Img} alt="html logo" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSlider;