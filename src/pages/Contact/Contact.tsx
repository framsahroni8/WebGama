import { ContactUs } from 'components/ContactUs'
import { ModalContact } from 'ui-kit/ModalContact'
import { modalProps } from 'ui-kit/ModalContact/ModalContact'
import './Contact.scss'
import AOS from 'aos'
import 'aos/dist/aos.css' // Impor stylesheet AOS
import { useEffect } from 'react'

const Contact  = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  const modalData: modalProps[] = [
    {
      logo: 'WhatsApp',
      link: 'https://wa.link/lqkgvh',
      size: 'large',
      detail: '+62-811-1009-115',
      buttonText: 'Send Message',
    },
  ]

  return (
    <div className='contactBox' data-aos='fade-down' data-aos-duration='3000'>
        <ContactUs />
    </div>
  )
}

export default Contact
