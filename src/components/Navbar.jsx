import logo from '../assets/images/logo.svg'
import dropDown from '../assets/images/icon-arrow-down.svg'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ToggleMode from './ToggleMode'
import moon from '../assets/images/icon-moon.svg'
import { openSelectMenu, setMode } from '../features/dictionarySlice'
import { closeSelectMenu } from '../features/dictionarySlice'
import FontMenu from './FontMenu'


const Navbar = () => {
  const {fontSelection, mode} = useSelector((store) => store.dictionary)
  const dispatch = useDispatch()

  const toggleMode = () => {
    dispatch(setMode())
  }
  

  return (
    <Wrapper  className='p-6 z-[100] flex justify-between md:px-[2.5rem] md:py-[3.1875rem] lg:px-[21.938rem]'>
      <img src={logo} alt="logo" />
      <div className='flex items-center space-x-4'>
        <div className="flex space-x-4 items-center cursor-pointer relative">
          <span onClick={() => dispatch(openSelectMenu())}  className='font-bold font-text text-[0.875rem] md:text-[1.125rem]'>{fontSelection}</span>
          <img src={dropDown} alt="dropdown" />
          <FontMenu />
        </div>
        <span className='border w-[1px] h-8 border-[#E9E9E9]'></span>
        <ToggleMode toggleMode={toggleMode} />
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke={mode === 'dark-mode' ? '#A445ED' : '#757575'} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
background-color: var(--main-bcg);
.font-text {
  color: var(--text-color);
}
`

export default Navbar