const CustomProgressBar = ({ value, max = 100, className = '' }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`w-full bg-gray-700 rounded-full h-2.5 ${className}`}>
      <div
        className="bg-green-500 h-2.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default CustomProgressBar;