import { Button } from 'ui-kit/Button'
import { Icon, IconSizeType } from 'ui-kit/Icon'
import './OrderButton.scss'
import classNames from 'classnames'
import { IconType } from 'ui-kit'
import { Link } from 'react-router-dom'

export type OrderType = 'Primary' | 'Secondary' | 'Success'

export interface OrderButtonData {
  id: number
  text: string
  type: OrderType
  link: string
  icon: IconType
  size: IconSizeType
  logo?: string
  alt: string
}

export interface OrderButtonProps {
  options: OrderButtonData[]
  className: string
}

export const OrderButton: React.FC<OrderButtonProps> = ({ options, className }) => {
  return (
    <div className='flex flex-col justify-center gap-3 '>
      {options.map((option) => (
        <>
          <Link to={option.link} key={option.id}>
            <Button
            typeIcon={option.icon}
            sizeIcon={option.size}
              className={classNames('btnOrder', className, {
                btnOrder__primary: option.type === 'Primary',
                btnOrder__secondary: option.type === 'Success',
                btnOrder__success: option.type === 'Secondary',
              })}
              iconRight
            >
              <div className='textJustify'>
                <span>{option.text}</span>
                <div>
                {/* <img src={option.logo} alt={option.alt} className='orderLogo' /> */}
                </div>
               
              </div>
            </Button>
          </Link>
        </>
      ))}
    </div>
  )
}

{
  /* <div className='textJustify'>
                  
              </div> */
}
