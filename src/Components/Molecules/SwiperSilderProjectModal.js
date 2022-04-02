import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import JumboTron from '../Organisms/main/JumboTron';
import projectDetail0Img from "../../static/images/projectDetail/projectEx.jpg"
import projectDetail1Img from "../../static/images/projectDetail/projectEx1.jpg"
import projectDetail2Img from "../../static/images/projectDetail/projectEx2.jpg"


SwiperCore.use([Navigation, Pagination, Autoplay])

function SwiperSliderProjectModal() {
  return(
    <div>
      <Swiper
        //style={{height:'20em', width:'5em'}}
        className="h-[20em] w-[70em]"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 1000 }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><JumboTron/>
        </SwiperSlide>
        <SwiperSlide><img className="h-full mx-10 w-[100px]" src={projectDetail0Img} alt="html logo" />
        </SwiperSlide>
        <SwiperSlide><img className="h-full mx-10 w-[100px]" src={projectDetail1Img} alt="html logo" /></SwiperSlide>
        <SwiperSlide><img className="h-full mx-10 w-[100px]" src={projectDetail2Img} alt="html logo" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSliderProjectModal;