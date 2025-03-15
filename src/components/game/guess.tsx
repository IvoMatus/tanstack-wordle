interface GuessProps {
  index: number
  word: string
  TODAYS_WORD: string
  isGuessed: boolean
  currentRow: number
  usedAndWrongLetters: string[]
  todaysWordAsArray: string[]
}

export const Guess = (props: GuessProps) => {
    return (
    Array.from({ length: 6 }, (_, j) => {
        let bgColor = 'bg-gray-500';
        if (props.currentRow > props.index) {
                if (props.word[j] === props.TODAYS_WORD[j]) {
                        bgColor = 'bg-green-700';
                } else if (props.TODAYS_WORD.includes(props.word[j])) {
                        bgColor = 'bg-yellow-600';
                } else if (props.usedAndWrongLetters.includes(props.word[j])) {
                        bgColor = 'bg-gray-700'; 
                }
        }

        bgColor = props.isGuessed ? 'bg-green-700' : bgColor
        return(
        <button 
        key={`${props.index}-${j}`} 
        className={`cursor-default uppercase flex items-center justify-center 
        w-16 h-16 text-white font-semibold text-lg rounded-md border border-gray-700
         ${bgColor}
        `}>
           {props.word[j]}
       </button>
   )})
  )
}
