import React from 'react'

const Antonyms = ({antonyms}) => {
  return (
    <div className='flex items-center mt-[24px] md:mt-[41px] space-x-[26px] md:space-x-[40px]'>
      <span className='text-[1rem] md:text-[20px] text-[#757575] capitalize'>antonyms</span>
      <div className='text-[16px] md:text-[20px] font-bold text-mainPurple'>
        {antonyms.map((antonym, index) => {
          return <span key={index}>{antonym}</span>
        })}
      </div>
    </div>
  )
}

export default Antonyms