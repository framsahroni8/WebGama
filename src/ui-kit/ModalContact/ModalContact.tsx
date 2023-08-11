import { Icon, IconSizeType, IconType } from 'ui-kit/Icon'
import './ModalContact.scss'
import { Button } from 'ui-kit/Button'

export interface modalProps {
  link: string
  logo: IconType
  detail: string
  size: IconSizeType
  buttonText: string
}

export interface modalData {
  options: modalProps[]
}

export const ModalContact: React.FC<modalData> = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <>
          <div className='modalPosition'>
            <div className='modal-box-hard'>
              <div className='modalContainer'>
                <div className='modalInfo'>
                  <div className='modalLogo'> 
                    <Icon type={option.logo} size={option.size} />
                  </div>
                  <div>
                    <span className='bodyModal'>{option.detail}</span>
                  </div>
                  <a href={option.link}>
                    <Button className='modalButton'>{option.buttonText}</Button>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  )
}
