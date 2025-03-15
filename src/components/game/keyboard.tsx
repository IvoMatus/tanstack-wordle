interface KeyboardProps {
  usedAndWrongLetters: string[]
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
          {row.map((letter, i) => (
            <button
              key={i}
              className={`uppercase flex items-center justify-center 
              w-9 h-12 text-black font-semibold text-sm rounded-lg bg-gray-200`}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
  

