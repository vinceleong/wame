import { motion } from "framer-motion";
import { isMobile } from "utils/screenUtils";
import Icon from "./Icon";

function Modal({ children, open, onClose }) {
  if (!open) return null;

  if (isMobile) {
    return (
      <motion.div
        className="z-10 fixed h-full w-full left-0 top-0 flex flex-col justify-end items-center rounded-t-md"
        initial={{
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)",
        }}
        animate={{
          backdropFilter: "blur(7px)",
          WebkitBackdropFilter: "blur(7px)",
        }}
        transition={{
          duration: 0.2,
        }}
        onClick={onClose}
      >
        {/* <div className="w-full flex bg-black justify-end items-center pt-3 px-5">
          <div>Done</div>
        </div> */}
        <div
          className="relative z-20 shadow-md bg-white dark:bg-black rounded-md w-full h-[300px] px-4 py-2 overflow-auto"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="z-10 fixed h-full w-full left-0 top-0 flex justify-center items-center"
      initial={{
        backdropFilter: "blur(1px)",
        WebkitBackdropFilter: "blur(1px)",
      }}
      animate={{
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClose}
    >
      <div
        className="relative z-20 shadow-md bg-white dark:bg-black rounded-md xs:max-w-xs sm:max-w-xl md:max-w-2xl h-[500px] p-4 overflow-auto"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default Modal;
