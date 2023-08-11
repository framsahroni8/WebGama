import { ModalContact } from 'ui-kit/ModalContact'
import { modalProps } from 'ui-kit/ModalContact/ModalContact'
import './ContactUs.scss'
import { TextDivider } from 'ui-kit/TextDivider'

const ContactUs = () => {
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
    <>
      <div className='contact'>
        <div className='contactContainer'>
            <div className='contactText mb-6'>
              <TextDivider>Contact us!</TextDivider>
            </div>
            <div className='modalIcon'>
              <ModalContact options={modalData} />
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
