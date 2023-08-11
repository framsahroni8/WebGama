import { IconType, OrderButton } from 'ui-kit'
import ImageOrder from '../../assets/images/Manadong-Ricebox-4.jpg'
import './OrderPage.scss'
import { OrderButtonData } from 'ui-kit/OrderButton'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Impor stylesheet AOS
import { useEffect } from 'react';
import ShopeeFood from '../../assets/logo/shopee-food.png'
import GoFood from '../../assets/logo/Gofood-logo.png'
import GrabFood from '../../assets/logo/GrabFood-Logo-Vector.png'

const OrderPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    const ShopData: OrderButtonData[] = [
        {
            id: 1,
            type: 'Primary',
            text: 'GoFood',
            link: '/GoFood',
            icon: 'GoFood',
            size: 'medium',
            logo: GoFood ,
            alt: 'GoFood Logo'
        },
        {
            id: 2,
            type: 'Secondary',
            text: 'GrabFood',
            link: '/GrabFood',
            icon: 'GrabFood',
            size: 'medium',
            logo: GrabFood ,
            alt: 'Grabfood Logo'
        },
        {
            id: 3,
            type: 'Success',
            text: 'ShopeeFood',
            link: '/ShopeeFood',
            icon: 'ShopeeFood',
            size: 'medium',
            logo: ShopeeFood ,
            alt: 'ShopeeFood Logo'
        }
    ]

    return (
    <div className='p-24 flex gap-8 max-lg:flex-col-reverse orderHeight' data-aos="fade-down"
    data-aos-duration="3000">
      <div className='w-[30%] max-lg:w-[100%]'>
        <span className='orderText'>Pesan di:</span>
        <OrderButton options={ShopData} className={''} />
      </div>
      <div className='p-6 w-[55%] max-lg:w-[100%]'>
        <img src={ImageOrder} alt='Manadong-Ricebox-4' />
      </div>
    </div>
  )
}
export default OrderPage
