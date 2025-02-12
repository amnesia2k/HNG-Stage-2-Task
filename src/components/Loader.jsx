import PropTypes from "prop-types";
import { BarLoader } from "react-spinners";

export default function Loader({ loading }) {
  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-2 flex justify-center items-center">
      <BarLoader className="w-full bg-[#24A0B5] mb-2" />
    </div>
  );
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
