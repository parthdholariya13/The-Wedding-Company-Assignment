import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import QuizCard from "./QuizCard";
import ProgressBar from "./ProgressBar";
import CatPaw from "./CatPaw";
import { Button } from "./ui/button";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Which country has the largest land area in the world?",
    options: ["China", "Russia", "Canada"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Who was the first Prime Minister of independent India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B.R. Ambedkar"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Where is the headquarters of the United Nations (UN) located?",
    options: ["Geneva", "London", "New York"],
    correctAnswer: 2
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(Math.round((correctCount / questions.length) * 100));
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const showBorder = currentQuestion >= 2;

  if (showResults) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-4xl"
          >
            <div 
              className="bg-card rounded-[2rem] border-4 border-primary p-16 text-center shadow-2xl"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}
            >
              <p className="text-lg mb-6 text-foreground">Keep Learning!</p>
              <h2 className="font-display italic text-4xl text-[hsl(var(--quiz-title))] mb-4">
                Your Final score is
              </h2>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="text-[120px] font-bold font-display text-[hsl(var(--quiz-title))] leading-none"
              >
                {score}
                {score > 0 && <span className="text-6xl">%</span>}
              </motion.div>
              {score > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <Button
                    onClick={handleRestart}
                    className="bg-secondary hover:bg-secondary/90 text-foreground px-8 py-6 text-lg rounded-xl"
                  >
                    Start Again
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {currentQuestion === 0 && <CatPaw />}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-4xl"
        >
          <QuizCard showBorder={showBorder}>
            <div className="text-center mb-8">
              <h1 className="font-display italic text-5xl mb-2 text-[hsl(var(--quiz-title))]">
                Test Your <span className="text-[hsl(var(--quiz-title))]">Knowledge</span>
              </h1>
              <p className="text-muted-foreground">Answer all questions to see your results</p>
            </div>

            <ProgressBar current={currentQuestion + 1} total={questions.length} />

            <div className="bg-secondary rounded-xl p-4 mb-6">
              <h2 className="text-lg font-medium text-center text-foreground">
                {currentQuestion + 1}. {questions[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-3 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-center font-medium ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-card hover:border-primary/50 hover:bg-secondary/30'
                  }`}
                  aria-pressed={selectedAnswers[currentQuestion] === index}
                >
                  {option}
                </button>
              ))}
            </div>

            {currentQuestion === questions.length - 1 ? (
              <div className="flex justify-end">
                <Button
                  onClick={handleSubmit}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className="bg-secondary hover:bg-secondary/90 text-foreground px-8 py-6 text-base rounded-xl disabled:opacity-50"
                >
                  Submit
                </Button>
              </div>
            ) : (
              <div className="flex justify-end gap-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  aria-label="Previous question"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  aria-label="Next question"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>
              </div>
            )}
          </QuizCard>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
