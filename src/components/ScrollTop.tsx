/**
 * @import
 */

// import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

/**
 * @define Styled-components
 */

// const ScrollButtonWrapper = styled.div<ScrollButtonProps>`
//   position: fixed;
//   width: 46px;
//   height: 46px;
//   background: white;
//   color: #00c3ff;
//   text-transform: uppercase;
//   text-align: center;
//   bottom: 45px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   right: ${({ showButton }) => (showButton ? 40 : -50)}px;
//   transition: all 0.2s ease-in;
//   z-index: 100;
//   :hover {
//     transform: translateY(-5px);
//   }
// `;

// const ButtonDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   border-radius: 50%;
//   font-size: 20px;
//   color: #00c3ff;
// `;

/**
 * @define Main component
 */

const ScrollTop = () => {
  const [enable, setEnable] = useState(false);
  let timeout: any;
  const handleOnScroll = (isMounted: any) => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      isMounted && setEnable(true);
      clearTimeout(timeout);
    } else {
      isMounted && setEnable(false);
    }
  };
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      window.addEventListener("scroll", () => handleOnScroll(isMounted));
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", () => {
        return;
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`md:block cursor-pointer hidden fixed bottom-0 right-3 scroll-top-btn text-white p-4 ${
        enable ? "opacity-75" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </div>
  );
};
export default ScrollTop;
