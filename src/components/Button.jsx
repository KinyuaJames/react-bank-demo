import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} capitalize rounded-[10px] py-4 px-6 bg-blue-gradient font-glacialindiff font-medium text-[18px] text-primary outline-none `}
    >
      get started
    </button>
  );
};

export default Button;
