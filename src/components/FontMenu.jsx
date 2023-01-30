import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changeSelect, closeSelectMenu } from '../features/dictionarySlice'
const FontMenu = () => {
  const { fontSelectionOptions, selectMenu } = useSelector((store) => store.dictionary)
  const dispatch = useDispatch()

  const closeSelect = (selection) => {
    dispatch(closeSelectMenu())
    dispatch(changeSelect(selection))
  }
  
  return (
        <Wrapper className={` ${selectMenu ? 'flex' : 'hidden'} z-10 absolute   flex-col  -bottom-[10rem] w-[11.438rem] p-6 rounded-[1rem] lg:-bottom-[12rem] space-y-[1rem] right-3 `}>
      {fontSelectionOptions.map((fontItem, index) => {
        return <span  id="select-close" onClick={() => {
          closeSelect(fontItem)
          
        }} key={index} className='text-[14px]  md:text-[18px]  font-bold font-cols'>
          {fontItem}
        </span>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-shadow: var(--menu-shadow);
  z-index: 200;

    background-color: var(--main-bcg);


  .font-cols {
    color: var(--text-color);
    transition: all ease-in-out .4s;
  }
  .font-cols:hover {
    color: #A445ED;
  }
`

export default FontMenu