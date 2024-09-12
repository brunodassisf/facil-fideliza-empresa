"use client";

const ProgressBar: React.FC = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-white/40 z-50">
      <div className="w-full">
        <div className="h-2.5 w-full bg-pink-100 overflow-hidden">
          <div className="animate-progress w-full h-full bg-blue-700 origin-left-right"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
