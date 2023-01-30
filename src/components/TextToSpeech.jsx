import { useSelector } from 'react-redux'
import styled from 'styled-components'
import play from '../assets/images/icon-play.svg'
import useSound from 'use-sound'

const TextToSpeech = ({wordData}) => {
  const {word, phonetic, phonetics, meanings} = wordData[0] 
  const sounds = phonetics.filter((audioItem) => audioItem.audio !== '')
  const audio = sounds[0]?.audio
  console.log(audio);
  const [playSound] = useSound(audio)
  return (
    <Wrapper className='flex justify-between items-center'>
      <div className='flex flex-col space-y-[11px]'>
        <h2 className='text-[2rem] md:text-[4rem] font-bold text-col capitalize'>{word}</h2>
        <span className='text-mainPurple text-[18px] md:text-[24px]'>{phonetic}</span>
      </div>
      <img onClick={playSound} src={play} alt="play" className='cursor-pointer' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .text-col {
    color: var(--text-color);
  }
`

export default TextToSpeech