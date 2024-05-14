interface QuestionTitleProps {
  title: string;
}

const QuestionTitle = ({ title }: QuestionTitleProps) => {
  return (
    <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">{title}</h1>
  );
};

export default QuestionTitle;
