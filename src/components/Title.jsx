import PropTypes from "prop-types";

export default function Title({ title, step }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-[32px] font-merriweather">{title}</h1>
        <h3 className="text-base leading-[150%]">{`Step ${step}/3`}</h3>
        {/* ${step} (would be dynamically updated when all pages are ready...both the steps and the progress bar) */}
      </div>
      <div className="relative h-1 w-full bg-[#0E464F]">
        <div className="absolute top-0 left-0 h-1 w-[50%] bg-[#24A0B5]" />
      </div>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};
