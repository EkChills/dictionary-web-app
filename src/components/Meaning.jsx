import React from 'react'
import styled from 'styled-components'

const Meaning = ({ definitions }) => {
  return (
    <Wrapper className='flex flex-col space-y-[1rem]'>
      <h5 className='text-[1rem] md:text-[20px] text-[#757575]'>
        Meaning
      </h5>
      {definitions.map((definitionItem, index) => {
        const {definition, synonyms, antonyms} = definitionItem
        return <div key={index} className='flex space-x-[20px] items-center'>
          <span className=' p-1 bg-[#8F19E8] rounded-full'></span>
          <p className='text-col text-[15px] md:text-[18px]'>{definition}</p>
        </div>
      })}

    </Wrapper>
  )
}

const Wrapper = styled.div`
  .text-col {
    color: var(--text-color);
  }
`
export default Meaning