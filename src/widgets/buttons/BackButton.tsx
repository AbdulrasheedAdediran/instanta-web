import { Sizes } from "@/utils/types";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const BackButton = ({
  path,
  className,
}: {
  path?: string;
  className?: string;
}) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (path) {
      navigate(path);
    } else {
      navigate(-1);
    }
  };
  return (
    <Button
      size={Sizes.SM}
      applyBaseClassName={false}
      className={`rounded-[50%] w-10 h-10 border-solid border-[.5px] border-deepKaomaru ${className}`}
      onClick={handleGoBack}
    >
      <MdArrowBack className="w-6 h-6 text-white" />
    </Button>
  );
};

export default BackButton;
