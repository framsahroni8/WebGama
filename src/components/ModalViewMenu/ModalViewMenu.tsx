import ReactDOM from 'react-dom'
import './ModalViewMenu.scss'
import classNames from 'classnames'
import { Icon } from 'ui-kit'
import { Drawings } from 'interfaces/Drawings.interface'
import { ImageInterface } from 'interfaces/Image.interface'


export interface ModalInterface {
  visible: boolean
  toggle: () => void
  image: ImageInterface
}

const ModalViewMenu = ({ visible, toggle, image }: ModalInterface) => {
  const renderBody = () => {
    return (
      <>
        <div className='modalContainer flex justify-between'>
          <span className='textFile text-black'>{image.name}</span>
          <Icon type='Close' onClick={toggle} className='w-[24px] h-[24px] backArrow cursor-pointer' />
        </div>
        <div className='modalBody'>
          <img src={image.src} />
          <span className='flex items-center justify-center image-footer'>{}</span>
        </div>
      </>
    )
  }
  return ReactDOM.createPortal(
    <div
      className={classNames('modal', {
        'modal-open': visible,
      })}
    >
      <div className='modal-box p-0'>{visible ? renderBody() : ''}</div>
    </div>,
    document.body
  )
}

export default ModalViewMenu
