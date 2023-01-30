import React from 'react'
import styled from 'styled-components'
import newWindow from '../assets/images/icon-new-window.svg'

const Footer = ({wordData}) => {
  const {sourceUrls} = wordData[0]
  return (
    <Wrapper className="flex flex-col space-y-[7px] md:flex-row md:space-y-0 md:space-x-[25px] ">
      <h5 className='text-[14px] text-[#757575] capitalize underline'>source</h5>
      <div className='flex items-center space-x-[15px]'>
        <a href={sourceUrls} target="_blank" className='text-col text-[14px]'>{sourceUrls}</a>
        <img src={newWindow} alt="new window" />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .text-col {
    color: var(--text-color);
  }
`
export default Footer