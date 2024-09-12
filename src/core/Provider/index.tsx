"use client";

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "../context/store";

const RootProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SessionProvider>
      <StoreProvider>
        <main>
          {children}
          <ToastContainer />
        </main>
      </StoreProvider>
    </SessionProvider>
  );
};

export default RootProvider;
