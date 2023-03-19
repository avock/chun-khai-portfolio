import { useState, useEffect } from "react";
import { useColorModeValue } from '@chakra-ui/react'

const Typewriter = ({ fixedWords, words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const type = () => {
      const currentIndex = currentWordIndex % words.length;
      const currentWord = words[currentIndex];
      const typeSpeed = 100;
      const deleteSpeed = 80;
      const pauseTime = 810;

      if (isTyping) {
        setCurrentWord((prevWord) => {
          const nextLetter = currentWord.substring(prevWord.length, prevWord.length + 1);
          if (nextLetter === "") {
            setIsTyping(false);
            setTimeout(() => {
              setIsDeleting(true);
              setTypingSpeed(deleteSpeed);
            }, pauseTime);
          }
          return prevWord + nextLetter;
        });
      } else if (isDeleting) {
        setCurrentWord((prevWord) => {
          const nextLetter = currentWord.substring(0, prevWord.length - 1);
          if (nextLetter === "") {
            setIsDeleting(false);
            if (currentWordIndex === words.length - 1) {
              setCurrentWordIndex(0);
            } else {
              setCurrentWordIndex(currentWordIndex + 1);
            }
            setIsTyping(true);
            setTypingSpeed(typeSpeed);
          }
          return nextLetter;
        });
      }
    };

    const intervalId = setInterval(type, typingSpeed);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentWord, currentWordIndex, isTyping, isDeleting, words, typingSpeed]);

  const cursor = isTyping || isDeleting ? "|" : "";
  const textColor = useColorModeValue('teal', 'orange');

  return (
    <span style={{fontSize: "20px", color:"grey" }}>
      {fixedWords}
      <span style={{color: textColor}}>
      {currentWord}
      </span>
      <span style={{}}>{cursor}</span>
    </span>);
};

export default Typewriter;
