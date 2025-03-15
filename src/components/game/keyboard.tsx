interface KeyboardProps {
  usedAndWrongLetters: string[]
  TODAYS_WORD: string
}
const keyboardLayout = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l","ñ"],
  ["z", "x", "c", "v", "b", "n", "m", "»"],
];

export const Keyboard = (props: KeyboardProps) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex space-x-1">
          {row.map((letter, i) => {
            const isUsed = props.usedAndWrongLetters.includes(letter.toUpperCase());
            // const isCorrect = props.TODAYS_WORD.includes(letter.toUpperCase());
            console.log(isUsed,props.usedAndWrongLetters)
            const bgColor = isUsed ? "bg-red-500"  : "bg-gray-200";
            return(
            <button
              key={i}
              className={`uppercase flex items-center justify-center 
              w-9 h-12 text-black font-semibold text-sm rounded-lg ${bgColor}`}
            >
              {letter}
            </button>
          )})}
        </div>
      ))}
    </div>
  );
};
  

