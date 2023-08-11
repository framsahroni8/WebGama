// Import Swiper React components
import './SliderComponent.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';

export interface ReviewData {
  id: string
  comment: string
  name: string
  isAnonymous: boolean
}

export interface ReviewProps {
  options: ReviewData[]
}

const swiperBreakPoints ={
  300: {
    slidesPerView: 1,
    spaceBetween: '10',
  },
  768: {
    slidesPerView: 2,
    spaceBetween: '20', // Mengatur jarak antara slider menjadi 20 piksel saat lebar >= 768px
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: '30',
  }
}

export const SliderComponent: React.FC<ReviewProps> = ({ options }) => {
  const [reviewsData, setReviewsData] = useState<ReviewData[]>([])


  const anonymousText = (textName: string) => {
    // if (textName) {
      const nameObject = reviewsData.find((comment) => comment.name === textName);
      if (nameObject && nameObject.name) {
        const name = nameObject.name;
        const nameLength = name.length;
        const firstCharacter = name.charAt(0);
        const lastCharacter = name.charAt(nameLength - 1);
        const maskedName = `${firstCharacter}${'*'.repeat(nameLength - 2)}${lastCharacter}`;
        return maskedName 
        // <span className='text-black'>{maskedName}</span>
    //   }
    }
    // // return null;
  };

  return (
    <Swiper
    className='swiper-gap'
      spaceBetween={0}
      slidesPerView={3}
      breakpoints={swiperBreakPoints}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {options.map((option) => (
        <>
          <SwiperSlide key={option.id}>
            <div className='boxWrapper'>
              <div className=''>
                <div className='boxItem'>
                  <div className='boxText'>
                    <span>{option.comment}</span>
                  </div>
                </div>
                <div className='circleBox'></div>
                <div className='boxTitle'>
                {option.isAnonymous ? (
                  <span className='text-white'>{`${
                    option.name.charAt(0) + '*'.repeat(option.name.length - 2) + option.name.charAt(option.name.length - 1)
                  }`}</span>
                ) : (
                  <span className='text-white'>{option.name}</span>
                )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  )
}
