import React from 'react'
import styled from 'styled-components'

const SearchError = () => {
  return (
    <Wrapper className='w-full h-full bcg grid mt-[1rem] text-center'>
      <div className='flex flex-col items-center'>
        <span className='text-[48px] md:text-[64px]'>
          😣
        </span>
        <p className='text-col text-[18px] md:text-[20px] font-bold capitalize'>
          no definitions found
        </p>
        <p className='text-[#757575] text-[15px] md:text-[18px]'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .bcg {
    background-color: var(--main-bcg);
  }

  .text-col {
    color: var(--text-color);
  }
`
export default SearchError