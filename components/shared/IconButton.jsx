import Image from "next/legacy/image";

const IconButton = () => {
  return (
    <button>
      <Image src={buttonBorder} alt="bg" layout="fill" objectFit="fill" />
      <i></i>
      <strong>Training</strong>
    </button>
  );
};
export default IconButton;
