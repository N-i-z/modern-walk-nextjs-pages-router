import React from "react";
import { DrawerProps } from "./Drawer.component.types";

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className="w-3/4 md:w-1/3 bg-white h-full shadow-xl overflow-y-auto fixed right-0">
        {children}
      </div>
      {isOpen && (
        <div
          className="flex-grow bg-black bg-opacity-50"
          onClick={onClose}
        ></div>
      )}
    </div>
  );
};

export default Drawer;
