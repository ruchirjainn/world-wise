import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        type="back"
        onClick={(e) => {
          e.preventDefault();   // No submission of form
          navigate(-1);
        }}
      >
        &larr; Back
      </Button>
    </div>
  );
}

export default ButtonBack;
