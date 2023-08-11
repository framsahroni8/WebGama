import UnderDevelopment from '../../assets/images/UnderDevelopment.gif'
import './Eatery.scss';

const Eatery = () => {

  return (
    <div className='screenContainer  bg-primary'>
      <div className='flex flex-col justify-center items-center gap-[50px]'>
        <div className='eateryText'>
          <span>This Page is Under Development</span>
        </div>
        <div>
          <img src={UnderDevelopment} alt="Under Development"  className='iconImg'/>
        </div>
      </div>
    </div>
  );
};

export default Eatery;