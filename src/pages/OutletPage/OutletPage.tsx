import { Button, Icon, OutletList, TextDivider } from 'ui-kit'
import './OutletPage.scss'
import BannerLogo from '../../assets/images/Manadong-Ricebox-4.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Impor stylesheet AOS
import { useEffect } from 'react';
import { LocationData } from 'ui-kit/LocationDetailComponent';

export interface OutletProps {
  OutletName: string
  DataOutlet: LocationData[]
}

const Outlet: React.FC<OutletProps> = ({ OutletName, DataOutlet }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div className='flex my-4 mx-16' data-aos="fade-down"
    data-aos-duration="3000">
          <Link to='/order'>
            <Button>
              Back
            </Button>
          </Link>
        </div>
      <div className='outletHeight flex justify-center' data-aos="fade-down"
    data-aos-duration="3000">
        <div className='flex'>
          <div className='flex p-4 justify-center gap-7  max-md:flex-col'>
            <div className='w-[50%] max-md:w-full'>
              <img src={BannerLogo} />
            </div>
            <div className='w-[40%] text-black max-md:w-full'>
              <TextDivider>{OutletName}</TextDivider>
              <OutletList options={DataOutlet} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Outlet
