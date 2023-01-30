import React from 'react'

const Synonyms = ({synonyms}) => {
  return (
    <div className='flex items-center mt-[24px] md:mt-[41px] space-x-[26px] mb-[1rem] md:space-x-[40px]'>
      <span className='text-[1rem] md:text-[20px] text-[#757575] capitalize'>synonyms</span>
      <div className='text-[16px] md:text-[20px] font-bold text-mainPurple'>
        {synonyms.map((synonym, index) => {
          return <span key={index}>{synonym}, </span>
        })}
      </div>
    </div>
  )
}

export default Synonyms