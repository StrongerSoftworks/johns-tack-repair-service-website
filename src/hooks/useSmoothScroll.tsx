import { useEffect } from "react";

const useSmoothScroll = (offset = 100) => {
  useEffect(() => {
    const handleClick = (event: any) => {
      const targetId = event.currentTarget.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const targetPosition =
            targetElement.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, [offset]);
};

export default useSmoothScroll;
