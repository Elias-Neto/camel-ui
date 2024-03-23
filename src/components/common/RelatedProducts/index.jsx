import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Container, SwiperContainer } from './styles'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import similar from '../../../assets/images/products/similar.png'
import similar1 from '../../../assets/images/products/similar1.png'
import similar2 from '../../../assets/images/products/similar2.png'
import similar3 from '../../../assets/images/products/similar3.png'
import similar4 from '../../../assets/images/products/similar4.png'
import similar5 from '../../../assets/images/products/similar5.png'
import similar6 from '../../../assets/images/products/similar6.png'

const RelatedProducts = () => {
  const slides = [
    {
      id: 1,
      image: similar,
      name: 'Arandela Y',
      price: 'R$ 80,00',
    },
    {
      id: 2,
      image: similar1,
      name: 'Arandela Y',
      discount: 'R$ 50,00',
      price: 'R$ 80,00',
    },
    {
      id: 3,
      image: similar2,
      name: 'Arandela Y',
      price: 'R$ 80,00',
    },
    {
      id: 4,
      image: similar3,
      name: 'Arandela Y',
      discount: 'R$ 50,00',
      price: 'R$ 80,00',
    },
    {
      id: 5,
      image: similar4,
      name: 'Arandela Y',
      price: 'R$ 80,00',
    },
    {
      id: 6,
      image: similar5,
      name: 'Arandela Y',
      discount: 'R$ 50,00',
      price: 'R$ 80,00',
    },
    {
      id: 7,
      image: similar6,
      name: 'Arandela Y',
      price: 'R$ 80,00',
    },
  ]

  return (
    <div>
      <Container>
        <SwiperContainer>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={slides.length < 3 ? slides.length : 1}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              575: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 35,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
            }}
            navigation={slides.length >= 3}
            draggable={slides.length >= 3}
            loop={slides.length >= 3}
          >
            {slides.map(item => (
              <SwiperSlide key={item.id}>
                <a href="#">
                  <img src={item.image} alt={`Logo da ${item.title}`} />
                  <span>{item.name}</span>
                  <span className="discount">{item.discount}</span>
                  <span className="price">{item.price}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </Container>
    </div>
  )
}

export default RelatedProducts
