import { useSelector } from "react-redux"
import Footer from "./Footer"
import MoreDetails from "./MoreDetails"
import SearchError from "./SearchError"
import Spinner from "./Spinner"
import TextToSpeech from "./TextToSpeech"


const WordDetails = () => {
  const {loading, wordData, searchError} = useSelector((store) => store.dictionary)
  if(loading) {
    return <Spinner />
  }

  if(searchError) {
    return <SearchError />
  }

  return (
    <div className="flex flex-col py-[24px] md:py-[52px]">
      {wordData && <TextToSpeech wordData={wordData} />}
      {wordData && <MoreDetails wordData={wordData} />}
      <hr className="mt-[2rem] md:mt-[55px] mb-[24px] md:mb-[21px]" />
      {wordData && <Footer wordData={wordData} />}
    </div>
  )
}

export default WordDetails