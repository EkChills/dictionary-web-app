import Navbar from "./components/Navbar"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import Search from "./components/Search"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { closeSelectMenu } from "./features/dictionarySlice"
import WordDetails from "./components/WordDetails"



const App = () => {
  const { mode} = useSelector((store) => store.dictionary)
  const dispatch = useDispatch()

  useEffect(() => {
    document.documentElement.className = mode
  }, [mode])
  return (
    <>
      <Navbar />
      <Wrapper onClick={() => dispatch(closeSelectMenu())} className="min-h-[100vh] transition-all ease-in-out duration-200  w-full px-6 md:px-[2.5rem]  lg:px-[21.938rem] py-[24px] ">
        <Search />
        <WordDetails />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: var(--main-bcg);
 `

export default App