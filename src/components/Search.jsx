import search from '../assets/images/icon-search.svg'
import styled from 'styled-components'
import { getWordInfo } from '../features/dictionarySlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange } from '../features/dictionarySlice'


const Search = () => {
  const {searchInput} = useSelector((store) => store.dictionary)
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    const {name, value} = e.target
    dispatch(handleChange({name, value}))
  }
  return (
    <Wrapper className='relative'>    
        <input name='searchInput' onChange={handleSearch} type="text" placeholder="Type here" className=" input font-bold caret-mainPurple -z-10 bg-search w-full input-search text-[1rem] md:text-[20px] placeholder:font-bold" />
        <button onClick={() => dispatch(getWordInfo(searchInput))}>
          <img src={search} alt="search" className='absolute top-4 right-4' />
        </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .bg-search {
    background-color: var(--search-bcg);
  }

  .input-search {
    color: var(--text-color);
  }

  .input-search::placeholder {
    color: var(--text-color);
  }
`

export default Search