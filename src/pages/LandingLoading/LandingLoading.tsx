import './LandingLoading.scss'
import LandingImage from '../../assets/images/Anggota Gama.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingLoading = () => {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 1; // Atur sesuai kebutuhan
        if (newProgress >= 100) {
          clearInterval(interval);
          navigate('/Loading');
        }
        return newProgress;
      });
    }, 300); // Atur interval sesuai kebutuhan

    return () => clearInterval(interval);
  }, [navigate]);

  return (
  <div className='w-screen h-screen Landing flex flex-col justify-center'>
    <div className='flex flex-col items-center'>
      <span className='loadingWait'>Wait a minute.....</span>
      <img src={LandingImage} className='loadingPhoto'/>
    </div>
    <div className='w-screen flex justify-center'>
    <div className='loadingBarWrapper'>
      <div className='loadingBar' style={{ width: `${loadingProgress}%` }} />
      <span className='loadingText'>{loadingProgress}%</span>
      </div>
    </div>
 
  </div>
  )
}

export default LandingLoading
