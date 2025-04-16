import { useState } from "react";
import { Progress } from "../components/ui/progress";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Aurora from "../components/ui/aurora";

const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: [
      { id: "a", text: "London" },
      { id: "b", text: "Berlin" },
      { id: "c", text: "Paris" },
      { id: "d", text: "Madrid" },
    ],
    correct: "c",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: [
      { id: "a", text: "Venus" },
      { id: "b", text: "Mars" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Saturn" },
    ],
    correct: "b",
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "6" },
    ],
    correct: "b",
  },
];

// Question component to display individual questions
const Question = ({ question, options, onAnswer }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // console.log('  Question rendered with options:', options)

  const handleSelection = (id) => {
    setSelectedId(id);
    // console.log('  Selected option:', id)
  };

  const handleSubmit = () => {
    if (selectedId) {
      setIsSubmitting(true);
      // console.log(' Submitting answer:', selectedId)
      setTimeout(() => {
        onAnswer(selectedId);
        setSelectedId(null);
        setIsSubmitting(false);
      }, 500);
    }
  };

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-xl transform transition-all duration-300 hover:shadow-xl border border-gray-800 ">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">{question}</h2>
      <div className="space-y-4 mb-8">
        {options.map((option) => (
          <div
            key={option.id}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedId === option.id
                ? "bg-blue-900/50 border-blue-500 scale-105"
                : "border-gray-700 hover:border-blue-400 hover:bg-gray-800/50"
            }`}
            onClick={() => handleSelection(option.id)}
          >
            <div className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                  selectedId === option.id
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-600"
                }`}
              >
                {selectedId === option.id && (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                )}
              </div>
              <span className="text-lg text-gray-100">{option.text}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-200 ${
          selectedId
            ? "bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.02]"
            : "bg-gray-700 cursor-not-allowed"
        } ${isSubmitting ? "opacity-75" : ""}`}
        onClick={handleSubmit}
        disabled={!selectedId || isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Answer"}
      </button>
    </div>
  );
};

// Results component to display the score
const Results = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  const isPassing = percentage >= 70;
  // console.log(Final score:', score, 'out of', total)

  return (
    <Card className="w-full max-w-xl transform transition-all duration-300 hover:shadow-xl bg-gray-900/80 backdrop-blur-sm border border-gray-800">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold mb-2 text-gray-100">
          Quiz Results
        </CardTitle>
        <p className="text-gray-400">You've completed the quiz!</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center py-8">
        <div className="relative w-48 h-48 mb-8">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-800"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            <circle
              className={`${
                isPassing ? "text-green-500" : "text-amber-500"
              } transition-all duration-1000`}
              strokeWidth="8"
              strokeDasharray={`${percentage * 2.51} 251`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-4xl font-bold text-gray-100">
              {percentage}%
            </div>
            <div className="text-sm text-gray-400">
              {score}/{total} correct
            </div>
          </div>
        </div>
        <div
          className={`text-xl font-semibold mb-4 ${
            isPassing ? "text-green-400" : "text-amber-400"
          }`}
        >
          {isPassing
            ? "🎉 Great job! You passed!"
            : "Keep practicing to improve!"}
        </div>
      </CardContent>
      <CardFooter className="justify-center pb-8">
        <button
          onClick={onRestart}
          className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
        >
          Try Again
        </button>
      </CardFooter>
    </Card>
  );
};

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  // console.log('  Current game state:', { currentQuestion, score, isComplete })

  const handleAnswer = (selectedId) => {
    // console.log('✨ Processing answer:', selectedId)
    if (quizData[currentQuestion].correct === selectedId) {
      setScore(score + 1);
      // console.log('  Correct answer!')
    }

    if (currentQuestion === quizData.length - 1) {
      setIsComplete(true);
      // console.log('🎯 Quiz completed!')
    } else {
      setCurrentQuestion(currentQuestion + 1);
      // console.log('⏭ Moving to next question')
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsComplete(false);
    // console.log(' Restarting quiz')
  };

  return (
    <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center p-4 overflow-hidden">
     
      <div className="w-full max-w-2xl mb-8 text-center relative">
        <h1 className="text-5xl font-bold text-gray-100 mb-3">Quiz Game</h1>
        <p className="text-gray-400 text-xl">Test your knowledge!</p>
      </div>

      {!isComplete ? (
        <div className="w-full max-w-2xl space-y-6 relative flex flex-col justify-center items-center">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-800">
            <div className="flex justify-between items-center mb-2 w-100">
              <span className="text-sm font-medium text-gray-400">
                Question {currentQuestion + 1} of {quizData.length}
              </span>
              <span className="text-sm font-medium text-gray-400">
                Score: {score}
              </span>
            </div>
            <Progress
              value={(currentQuestion / quizData.length) * 100}
              className="h-2"
            />
          </div>
          <Question
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            onAnswer={handleAnswer}
          />
        </div>
      ) : (
        <Results
          score={score}
          total={quizData.length}
          onRestart={handleRestart}
        />
      )}

      <div className="fixed inset-0 pointer-events-none mix-blend-overlay opacity-80">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.5}
          speed={1.0}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default QuizApp;
