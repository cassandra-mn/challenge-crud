import { AiOutlineArrowLeft } from "react-icons/ai";

const GoBack = () => {
  return (
    <div className="back">
      <AiOutlineArrowLeft onClick={() => window.history.back()}/>
    </div>
  );
};

export default GoBack;
