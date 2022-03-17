import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Loader = ({ setIsShowLoader }) => {
  const { state, fetchComplited } = useAuthContext();

  useEffect(() => {
    state || (!state && fetchComplited && setIsShowLoader(false));
  }, [state, fetchComplited]);

  return (
    <>
      <div className="loader ">
        <div className="border-[12px] border-solid border-gray-100 w-[8rem] h-[8rem] rounded-full border-t-blue-600"></div>
      </div>
    </>
  );
};

export default Loader;
