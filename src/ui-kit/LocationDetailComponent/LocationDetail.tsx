import { Icon } from 'ui-kit/Icon'
import './LocationDetail.scss'

export interface LocationData {
  id: string;
  storeLocation: string;
  storeLocationDetail: string;
  storeLocationMap: string;
  storeLocationOutlet: string;
}

export interface iLocationProps {
  options: LocationData[]
  isMap: boolean
}

export const LocationDetailComponent: React.FC<iLocationProps> = ({ options, isMap }) => {
  return (
    <div className='locationWrapper '>
      {options.map((option) => (
        <>
          {isMap ? (
            <div className='locationContainerIsMap items-center' key={option.id}>
              <div className='flex gap-[15px] w-[60%] items-center max-md:w-full'>
                <div>
                  <Icon type='Location' className='icon' />
                </div>
                <div className='locationText max-md:h-32 max-md:justify-center md:h-10'>
                  <div className='locationText-title'>{option.storeLocation}</div>
                  <div className='locationText-body'>{option.storeLocationDetail}</div>
                </div>
              </div>
              <div className='locationMap w-[40%] max-md:w-full'>
                <iframe src={option.storeLocationMap} width='100%' height='260px'></iframe>
              </div>
            </div>
          ) : (
            <div className='locationContainer items-center md:pb-20 lg:pb-20'>
              <div className='locationIcon '>
                <Icon type='Location' className='icon' />
              </div>
              <div className='locationText h-12'>
                <div className='locationText-title'>{option.storeLocation}</div>
                <div className='locationText-body'>{option.storeLocationDetail}</div>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  )
}
//   <iframe src='https://maps.google.com/maps?q=-6.238468781972374%2C%20106.81199375374425&t=m&z=12&output=embed&iwloc=near'></iframe>
// {isMap && (

// )}
