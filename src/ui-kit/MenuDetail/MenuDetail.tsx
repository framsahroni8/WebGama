import { ModalViewMenu } from 'components/ModalViewMenu'
import './MenuDetail.scss'
import useModal from 'utils/getModal'
import { Drawings } from 'interfaces/Drawings.interface'
import { useState } from 'react'
import { ImageInterface } from 'interfaces/Image.interface'

export interface menuImage {
  id: number
  data: ImageInterface
}

export interface menuProps {
  options: menuImage[]
}

export const MenuDetail: React.FC<menuProps> = ({ options }) => {
  const [visibleSee, toggleSee] = useModal()
  const [selectedImage, setSelectedImage] = useState<menuImage | null>(null)

  const handleImageClick = (image: menuImage) => {
    setSelectedImage(image)
    toggleSee()
  }
  return (
    <div>
      <div className='flex items-center mt-[40px] '>
        <div className='flex flex-wrap'>
        {options.map((option) => (
          <div className='detailWrapper  menuContainer' key={option.id}>
            <div className='detailImage'>
              <div className='crop'>
              <img src={option.data.src} onClick={() => handleImageClick(option)} />
              </div>
            </div>
            <div className='text-black'>
              <span>{option.data.name}</span>
            </div>
          </div>
        ))}
        </div>
        {selectedImage && (
          <ModalViewMenu visible={visibleSee} toggle={toggleSee} image={selectedImage.data} />
        )}
      </div>
    </div>
  )
}
