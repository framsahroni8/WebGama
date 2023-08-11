import React, { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react'
import classNames from 'classnames'
import { Icon, IconType } from '..'
import './Button.scss'
import { IconSizeType } from 'ui-kit/Icon'

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string
  typeIcon?: IconType
  sizeIcon?: IconSizeType
  isDisabled?: boolean
  iconRight?: boolean
  onClick?: (event: React.MouseEvent) => void
}

const ButtonComponent: React.FC<IButtonProps> = ({
  className,
  children,
  typeIcon,
  sizeIcon = 'medium',
  iconRight,
  isDisabled = false,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames('Button', className, {
        Button__disabled: isDisabled,
      })}
      data-testid='test-button'
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {iconRight ? (
        <>
          <span className={typeIcon ? 'Button-Text' : ''}>{children}</span>
          {typeIcon && <Icon type={typeIcon} size={sizeIcon} data-testid='test-button-icon' />}
        </>
      ) : (
        <>
          <span className={typeIcon ? 'Button-Text' : ''}>{children}</span>
          {typeIcon && <Icon type={typeIcon} size={sizeIcon} data-testid='test-button-icon' />}
        </>
      )}
    </button>
  )
}

export const Button = memo(ButtonComponent)
