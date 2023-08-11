import { Button, Icon } from 'ui-kit'
import Banner from '../../assets/images/banner-scaled.jpg'
import './Headline.scss'
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

const Headline = () => {
  return (
    <>
      <div className='headlineContainer'>
        <div className='headlineImage'>
          <div>
            <img src={Banner} alt='banner-scaled' />
          </div>
        </div>
        <div className='headlineWidget'>
          <div className='headlineText px-2'>
            <div className='headlineText-header'>
              <span>Manadong</span>
            </div>
            <div className='headlineText-body'>
              <span>#NikmatnyaGaPakeRibet</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Headline
