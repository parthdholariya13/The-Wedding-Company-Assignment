import { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";

interface QuizCardProps {
  children: ReactNode;
  showBorder?: boolean;
}

const QuizCard = ({ children, showBorder = false }: QuizCardProps) => {
  return (
    <Card 
      className={`w-full max-w-3xl mx-auto shadow-2xl ${
        showBorder ? 'border-4 border-primary' : 'border-0'
      }`}
      style={{
        borderRadius: '2rem',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
      }}
    >
      <CardContent className="p-12">
        {children}
      </CardContent>
    </Card>
  );
};

export default QuizCard;
