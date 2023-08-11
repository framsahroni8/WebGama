import { Headline } from 'components/Headline'
import './Home.scss'
import { ContactUs } from 'components/ContactUs'
import { Menu } from 'components/Menu'
import { Locations } from 'components/Locations'
import { Reviews } from 'components/Reviews'
import { useState, useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Icon } from 'ui-kit'
import { handleScroll } from 'components/NavBar/NavBar'



const Home = () => {
  const menuSectionRef = useRef<HTMLDivElement>(null);

  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrollingDown(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    AOS.init()
    const handleScrollAnimation = () => {
      const scrollPosition = window.scrollY
      const targetElement = document.getElementById('menuSection')

      if (targetElement) {
        const targetPosition = targetElement.offsetTop
        const targetHeight = targetElement.offsetHeight

        if (
          scrollPosition >= targetPosition - window.innerHeight / 2 &&
          scrollPosition <= targetPosition + targetHeight
        ) {
          setFadeIn(true)
        } else {
          setFadeIn(false)
        }
      }
    }

    window.addEventListener('scroll', handleScrollAnimation)
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation)
    }
  }, [])

  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='w-full'>
          <Headline />
        </div>
        <div className='flex flex-end'>
          <div className='iconContainer'>
            <span className='scrollText' onClick={handleScroll}>
              Scroll Dong!
            </span>
            <Icon type='Down' size='medium' onClick={handleScroll} className='scrollIcon' />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center py-10 gap-10'>
          <section id='menuSection' ref={menuSectionRef} className='w-[100%] flex flex-col items-center'>
            <div className='w-full flex justify-center'>
              <div className='w-[60%] py-5 max-lg:w-screen componentPosition' data-aos='zoom-in'>
                <Menu />
              </div>
            </div>
          </section>
          <div className='flex justify-center w-full componentPosition '>
            <div className='w-[60%]  max-lg:w-screen  py-5' data-aos='zoom-in'>
              <Locations />
            </div>
          </div>
          <div className='reviews w-[100%] flex justify-center py-8'>
            <div className='w-[60%]' data-aos='zoom-in '>
              <Reviews />
            </div>
          </div>
            <div className=' w-[100%] flex justify-center py-8'>
              <div className='w-[100%] flex justify-center max-lg:w-[95%]' data-aos='zoom-in'>
                <ContactUs />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
