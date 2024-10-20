import React from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { IoIosPaperPlane } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import { Button } from "./Button";

interface Props {
  isLoading: boolean;
  disabled: boolean;
}

const SendButton = ({ isLoading, disabled }: Props) => {
  const iconVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        bounce: 0.5,
        type: "spring",
      },
    },
    close: {
      opacity: 0,
      x: 50,
      y: -50,
      scale: 0,
      transition: {
        duration: 0.5,
        bounce: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <AnimatePresence>
      <Button type="submit" disabled={disabled || isLoading} variant="outline">
        <span className="text-white mr-2">
          {isLoading ? "" : "Send Message"}
        </span>

        {isLoading ? (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
          >
            <LuLoader className="w-5 h-5 animate-spin text-white" />
          </motion.span>
        ) : (
          <motion.span
            animate={"open"}
            initial="open"
            variants={iconVariants}
            className=""
          >
            <IoIosPaperPlane className="w-5 h-5 text-white" />
          </motion.span>
        )}
      </Button>
    </AnimatePresence>
  );
};

export default SendButton;
