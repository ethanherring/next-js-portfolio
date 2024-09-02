'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"
import BlinkingCursor from "./BlinkingCursor"


interface TerminalTypes {
  minimizeTerminal: () => void,
  closeTerminal: () => void,
  text?: string,
}

const MinimizedTerminal: React.FC<TerminalTypes> = ({ minimizeTerminal, closeTerminal }) => {
  return (
    <div className="h-24">
      <div className="flex flex-row justify-center align-center rounded-lg white-glow  bg-gray-800 text-white overflow-hidden">
        <div className="flex justify-start items-center p-3 bg-gray-800">
          <div
            onClick={() => closeTerminal()}
            className="h-3 w-3 rounded-full bg-red-500 mr-2"
          ></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
          <div
            onClick={() => minimizeTerminal()}
            className="h-3 w-3 rounded-full bg-green-500"
          ></div>
        </div>
      </div>
    </div>
  )
}

const MaximizedTerminal: React.FC<TerminalTypes> = ({ text, minimizeTerminal, closeTerminal }) => {
  const [maximize, setMaximize] = useState(false)


  const maximizeTerminal = () => {
    setMaximize(!maximize)
  }
  // w-1/2
  return (
    <div className="w-[300px] sm:w-[500px] h-[300px]">
      <div className={`flex flex-col rounded-lg items-center white-glow`}>
        <div className="w-full mx-auto bg-black  rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-start items-center p-3 bg-gray-800">
            <div
              onClick={() => closeTerminal()}
              className="h-3 w-3 rounded-full bg-red-500 mr-2"
            ></div>
            <div
              onClick={() => minimizeTerminal()}
              className="h-3 w-3 rounded-full bg-yellow-500 mr-2 hover:border-dashed"
            ></div>
            <div
              onClick={() => maximizeTerminal()}
              className="h-3 w-3 rounded-full bg-green-500"
            ></div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 border-solid border-white">
            <pre className="text-white">
              <code className="text-white">
                {" "}
                {`> echo "Hi, I'm Ethan"`}
                {`\n\n Hi, I'm `}
                <span className="text-indigo-500">Ethan</span>
                {`\n\n> I'm `}
                <span className="text-indigo-500">
                  {text}
                  <BlinkingCursor />
                </span>
                {`\n`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

const TerminalGraphic = () => {
  const [terminalClosed, setTerminalClosed] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [text, setText] = useState("")
  //const [words, setWords] = useState([
  // "a developer",
  //  "a problem solver",
  //  "a data nerd",
  //  "a creator",
  //  "a team player",
  //)]
  const words = [
    "a developer",
    "a problem solver",
    "a data nerd",
    "a creator",
    "a team player",
  ]


  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<any>(null)

  const minimizeTerminal = () => {
    setMinimized(!minimized)
  }

  const closeTerminal = () => {
    setTerminalClosed(!terminalClosed)
  }

  // This Function Loops through each word in words and types out the word one letter at a time
  const typeWord = (index: any) => {
    let currentWord = words[index] ?? "Loading..."
    let currentLetterIndex = 0
    setText("")

    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (currentLetterIndex < currentWord.length) {
        currentLetterIndex++
        setText((prevText) => prevText + currentWord[currentLetterIndex - 1])
      } else {
        clearInterval(intervalRef.current)
        setTimeout(() => {
          const nextIndex = (index + 1) % words.length
          setCurrentIndex(nextIndex)
          typeWord(nextIndex)
        }, 2000)
      }
    }, 50)
  }

  useEffect(() => {

    typeWord(currentIndex)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [currentIndex])

  if (minimized === true && terminalClosed === false) {
    return <MinimizedTerminal minimizeTerminal={minimizeTerminal} closeTerminal={closeTerminal} />
  } else if (minimized === false && terminalClosed === false) {
    return (
      <MaximizedTerminal
        text={text}
        minimizeTerminal={minimizeTerminal}
        closeTerminal={closeTerminal}
      />
    )
  }
}

export default TerminalGraphic
