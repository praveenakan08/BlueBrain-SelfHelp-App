interface QuestionProps {
  question: string;
  option1: string;
  option2: string;
  option3: string;
}

const Question = (props: QuestionProps): JSX.Element => {
  return (
    <div className="flex flex-col items-start">
      {/* Question */}
      <div>
        <label className="text-base mb-2">{props.question}</label>
      </div>

      {/* Options */}
      <div className="flex -mx-2 justify-between">
        <div className="px-2">
          <label className="text-gray-700 text-sm mb-2">
            <input type="radio" id="option1" className="mr-2" />
            {props.option1}
          </label>
        </div>
        <div className="px-2">
          <label className="text-gray-700 text-sm mb-2">
            <input type="radio" id="option2" className="mr-2" />
            {props.option2}
          </label>
        </div>
        <div className="px-2">
          <label className="text-gray-700 text-sm mb-2">
            <input type="radio" id="option3" className="mr-2" />
            {props.option3}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Question;
