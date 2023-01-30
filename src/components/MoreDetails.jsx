import React from 'react'
import styled from 'styled-components'
import Antonyms from './Antonyms'
import Meaning from './Meaning'
import Synonyms from './Synonyms'

const MoreDetails = ({ wordData }) => {
  const { meanings } = wordData[0]
  return (
    <Wrapper className='flex flex-col space-y-[2rem]'>
      {meanings.map((meaning, index) => {
        const { partOfSpeech, definitions, synonyms, antonyms } = meaning
        console.log(partOfSpeech);
        return <div key={index}>
          <div className='flex space-x-[1rem] mb-[2rem] items-center'>
            <h5 className='text-[18px] md:text-[24px] text-col font-bold'>{partOfSpeech}</h5>
            <hr className='w-full text-[1px]' />
          </div>

          <Meaning definitions={definitions} />
          {synonyms.length > 0 && <Synonyms synonyms={synonyms} />}
          {antonyms.length > 0 && <Antonyms antonyms={antonyms} />}
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

export default MoreDetails