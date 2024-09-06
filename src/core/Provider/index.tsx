"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main>
      {children}
      <ToastContainer />
    </main>
  );
};

export default RootProvider;
