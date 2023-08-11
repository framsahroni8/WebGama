import { IconGroup } from 'ui-kit/IconGroup'
import './Footer.scss'
import { TypeIcon } from 'ui-kit/IconGroup/IconGroup'

const Footer = () => {
  const iconType: TypeIcon[] = [
    {
      id: 1,
      iconTypes: 'Facebook',
      href: '#',
    },
    {
      id: 2,
      iconTypes: 'Instagram',
      href: 'https://www.instagram.com/manadong.id/',
    },
    {
      id: 3,
      iconTypes: 'Message',
      href: '#',
    },
    {
      id: 4,
      iconTypes: 'WhatsApp',
      href: 'https://wa.link/lqkgvh',
    },
  ]

  return (
    <div className='footerContainer'>
      <div className='footerWrapper'>
        <div className='footerText'>
          <span>&copy; PT Bogadong Anugerah Indonesia, 2022</span>
        </div>
        <div className='footerDetail'>
          <span className='footerShare'>Share Manadong</span>
          <div className='footerLogo'>
          <IconGroup options={iconType}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
