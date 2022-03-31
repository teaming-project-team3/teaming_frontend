import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import spinner from "../../static/images/spinner/spinner.png"
import banner from "../../static/BannerImg.png"
import dummyUser from "../../static/dummy_user.jpg"
import JumboTron from '../Organisms/main/JumboTron';


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
        <SwiperSlide><img className="h-full mx-10 w-[100px]" src={banner} alt="html logo" />
        </SwiperSlide>
        <SwiperSlide><img className="h-full mx-10 w-[100px]" src={dummyUser} alt="html logo" /></SwiperSlide>
        <SwiperSlide><img className="h-full mx-10 w-[100px]" src={spinner} alt="html logo" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSliderProjectModal;