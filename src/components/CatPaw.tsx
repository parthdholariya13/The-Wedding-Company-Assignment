const CatPaw = () => {
  return (
    <div className="absolute left-8 bottom-8 hidden lg:block">
      <div className="relative">
        {/* Speech bubble */}
        <div className="bg-white rounded-2xl px-4 py-2 shadow-md mb-4 relative">
          <span className="text-sm font-medium text-foreground">Best of luck!</span>
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
        
        {/* Cat paw illustration */}
        <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main paw pad */}
          <ellipse cx="50" cy="85" rx="28" ry="32" fill="#FFC0CB" opacity="0.6"/>
          
          {/* Toe pads */}
          <ellipse cx="30" cy="55" rx="12" ry="16" fill="#FFC0CB" opacity="0.6"/>
          <ellipse cx="50" cy="48" rx="12" ry="16" fill="#FFC0CB" opacity="0.6"/>
          <ellipse cx="70" cy="55" rx="12" ry="16" fill="#FFC0CB" opacity="0.6"/>
          
          {/* Paw outlines */}
          <ellipse cx="50" cy="85" rx="28" ry="32" stroke="#FFB6C1" strokeWidth="2" fill="none"/>
          <ellipse cx="30" cy="55" rx="12" ry="16" stroke="#FFB6C1" strokeWidth="2" fill="none"/>
          <ellipse cx="50" cy="48" rx="12" ry="16" stroke="#FFB6C1" strokeWidth="2" fill="none"/>
          <ellipse cx="70" cy="55" rx="12" ry="16" stroke="#FFB6C1" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </div>
  );
};

export default CatPaw;
