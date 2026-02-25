export default function Loader({ size = "md", className = "" }) {
  const sizeMap = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeMap[size]} animate-spin`}>
        <div className="w-full h-full border-4 border-gray-200 dark:border-gray-700 border-t-eco-500 rounded-full"></div>
      </div>
    </div>
  );
}
