import ClipLoader from "react-spinners/ClipLoader";
const Spinner = () => {
  return (
    <ClipLoader
      size={100}
      cssOverride={{
        position: "absolute",
        top: "30%",
        left: "50%",
        translate: "-50%  -50%",
      }}
      color="#2776d2"
    />
  );
};

export default Spinner;
