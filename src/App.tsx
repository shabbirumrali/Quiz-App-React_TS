import { useState, useEffect } from 'react';
import { fetchQuizQuestions } from './api/api';
import { Difficulty } from './api/api';
import './App.css';
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswer, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  
  useEffect(() => {
    console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
  }, [])

  const startTrivia = async () => {} 
  const checkAnswer = (e: Event) => {}
  const nextQuestion = () => {}

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      <button className='start' onClick={startTrivia}>Start Quiz</button>
      <p className='score'>Score: </p>
      <p className='loading'>Loading questions... </p>
      {/* <QuestionCard 
        questionNum={number+1} 
        totalQuestions={TOTAL_QUESTIONS} 
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
