import PropTypes from "prop-types";

export default function Title({ title, step }) {
  const totalSteps = 3;
  const progress = `${(step / totalSteps) * 100}%`;

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-[32px] font-merriweather">{title}</h1>
        <h3 className="text-base leading-[150%]">{`Step ${step}/3`}</h3>
      </div>
      <div className="relative h-1 w-full bg-[#0E464F] rounded-full">
        <div
          className="absolute top-0 left-0 h-1 bg-[#24A0B5] rounded-full"
          style={{ width: progress }}
        />
      </div>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};
