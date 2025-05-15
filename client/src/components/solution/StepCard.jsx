const StepCard = ({ step }) => {
  return (
    <div className="p-6 rounded-lg space-y-4 hover:bg-light-blue transition">
      <h3 className="text-5xl font-bold text-normal-orange">{step.number}</h3>
      <h4 className="text-lg font-semibold text-normal-blue">{step.title}</h4>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
};

export default StepCard;
