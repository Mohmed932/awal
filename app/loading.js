import LoadingFour from "@/components/Loading/LoadingFour";
import LoadingThree from "@/components/Loading/LoadingThree";

const loading = () => {
  return (
    <div className="home_loading_countainer">
      <div className="home_loading">
        <LoadingFour />
        <LoadingThree />
      </div>
    </div>
  );
};

export default loading;
