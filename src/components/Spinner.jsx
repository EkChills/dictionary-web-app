import lightSpin from '../assets/images/spinner-light.gif'
import { useSelector } from 'react-redux'
import darkSpin from '../assets/images/spinner-dark.gif'

const Spinner = () => {
  const {mode} = useSelector((store) => store.dictionary)
  return (
    <div className='w-full grid place-items-center my-auto mt-[10rem]'>
        {<img className="h-16 w-16" src={mode === 'light-mode' ? lightSpin : darkSpin} alt="" />}
    </div>
  )
}

export default Spinner