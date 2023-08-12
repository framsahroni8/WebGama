import { Button } from 'ui-kit'
import './Landing.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


const Landing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Gama Web'
    return () => {
      document.title = 'Gama Web' // Setel judul default saat komponen dibongkar (unmounted)
    }
  }, [])
  return (
  <div className='w-screen h-screen Landing'>
    <div className='flex flex-col items-center gamaText'>
      <span className=''>GAMA</span>
      <Button className='textBtnLanding' onClick={() => navigate('/Loading')}>Lets Explore With Us</Button>
    </div>
  </div>
  )
}

export default Landing
