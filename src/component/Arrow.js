import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; 

const Arrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-600 transition"
        title="Go to top"
      >
        <ArrowUp size={24} />
      </button>
    )
  );
};

export default Arrow;

