import { Icon, IconType } from 'ui-kit'
import './IconGroup.scss'

export interface TypeIcon {
  id: number
  href: string
  iconTypes: IconType
}

export interface IconGroups {
  options: TypeIcon[]
}

export const IconGroup: React.FC<IconGroups> = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <>
          <div>
            <a href={option.href}>
              <Icon type={option.iconTypes} size='regular' />
            </a>
          </div>
        </>
      ))}
    </>
  )
}
