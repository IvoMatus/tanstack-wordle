import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Guess } from '~/components/game/guess'
import { Keyboard } from '~/components/game/keyboard'

interface Data {
    word: string
    guesses: string[]
    currentRow: number
    usedAndWrongLetters: string[]
}
export const Route = createFileRoute('/')({
  component: Home,
})
const TODAYS_WORD = 'SUNDAY'
const todaysWordAsArray = TODAYS_WORD.split('')
function Home() {;
    const [data, setData] = useState<Data>({
        word: TODAYS_WORD,
        guesses: ["", "", "", "", "", ""],
        currentRow: 0,
        usedAndWrongLetters: []
})
    useEffect(() => {
        function handleKeyup(event: KeyboardEvent) {
                if (data.currentRow >= 6) return; // No más filas disponibles

                const newGuesses = [...data.guesses];
                if(event.key.match(/^[A-z]$/) && data.guesses[data.currentRow].length < 6) {
                newGuesses[data.currentRow] += event.key.toUpperCase();
                        setData(current => ({
                                ...current,
                                guesses: newGuesses,
                        }));
                    }
                if(event.key === 'Enter' && data.guesses[data.currentRow].length === 6) {
                    const currentGuess = data.guesses[data.currentRow];
                    const newUsedAndWrongLetters = [...data.usedAndWrongLetters];
                    currentGuess.split('').forEach((letter, index) => {
                            if (!TODAYS_WORD.includes(letter)) {
                                    newUsedAndWrongLetters.push(letter);
                            }
                    });

                    setData(current => ({
                            ...current,
                            currentRow: data.currentRow + 1,
                            usedAndWrongLetters: [...new Set(newUsedAndWrongLetters)], // Remove duplicates
                    }));
                }
        }

        window.addEventListener('keydown', handleKeyup);
        return () => window.removeEventListener('keydown', handleKeyup);
}, [data]);
    
  return (
    <div className="bg-gray-600 flex flex-col items-center justify-center max-h-screen h-screen">
      <h1 className='text-5xl font-semibold pb-8 text-center
      text-transparent bg-gradient-to-tr from-blue-600 to-green-500 bg-clip-text'>
        6-LETTER WORDLE
        </h1>


     {/* GAME */}
     <div className='space-y-1'>

     {Array.from({ length: 6 }, (_, i) => (
        <div className='flex gap-x-1'>

            <Guess
                usedAndWrongLetters={data.usedAndWrongLetters}
                index={i} 
                currentRow={data.currentRow}
                word={data.guesses[i]}
                TODAYS_WORD={TODAYS_WORD} 
                isGuessed={false}
                todaysWordAsArray={todaysWordAsArray}
                />
        </div>
     ))}
     </div>
     <div className='space-y-2 mt-6'>
        <Keyboard usedAndWrongLetters={data.usedAndWrongLetters} />
     {JSON.stringify(data.guesses)}
     </div>
    </div>
  )
}
