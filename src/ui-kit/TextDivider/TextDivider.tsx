import './TextDivider.scss'

export interface iDividerProps {
  children: React.ReactNode
}

export const TextDivider: React.FC<iDividerProps> = ({ children }) => {
  return (
    <div className='contactDivider'>
      <span>{children}</span>
      <div className='dividerLine'></div>
    </div>
  )
}
