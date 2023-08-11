import { Link } from 'react-router-dom';
import { Icon } from 'ui-kit';
import './OutletList.scss';
import { LocationData } from 'ui-kit/LocationDetailComponent';

export interface OutletDataProps {
  options: LocationData[];
}

export const OutletList: React.FC<OutletDataProps> = ({ options }) => {
  return (
    <div className='outletWrapper'>
      {options.map((option) => (
        <div className='outletContainer w-full py-3' key={option.id}>
          <div className='w-[50%]'>
            <span className='OutletLocation'>{option.storeLocation}</span>
          </div>
            <a href={option.storeLocationOutlet}>
              <div className='outletBody flex w-[100%]'>
                <span className='outletBody'>
                  Purchase here<Icon type='ArrowRight' className='outletLink' />
                </span>
              </div>
            </a>
        </div>
      ))}
    </div>
  );
};
