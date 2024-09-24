import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import CardForm from "../organisms/CardForm";
import CardGenerator from "../template/CardGenerator";

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 p-4 shadow-md z-20">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          <button
            className="md:hidden"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {isDrawerOpen ? (
              <div className="w-6 h-6 text-white">X</div>
            ) : (
              <div className="w-12 h-6 mr-5 text-white">Edit Card</div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
       {/* Mobile Drawer */}
       <Transition
        show={isDrawerOpen}
        enter="transition ease-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className="fixed inset-y-0 left-0 z-30 w-4/5 bg-gray-900 p-4 md:hidden overflow-y-scroll"
      >
        <div className="overflow-y-auto h-full">
          <button className="mb-4" onClick={() => setIsDrawerOpen(false)}>
            <div className="w-6 h-6 text-white">X</div>
          </button>
          <div className="">
            <CardForm />
          </div>
        </div>
      </Transition>

      {/* Desktop Drawer */}
      <div
        className={` w-1/2 bg-gray-900 p-4 shadow-md hidden md:block translate-x-0 h-[100vh]`}
      >
        <button className="mb-4" onClick={() => setIsDrawerOpen(false)}>
          <div className="w-6 h-6 text-white">X</div>
        </button>
        <div className="w-[100%] flex justify-end items-center flex-col">
        <CardForm />
        </div>
      
      </div>

      {/* Content */}
      <div className="fixed top-20 right-[10%] bottom-0">
        <CardGenerator/>
      </div>
    </div>
  );
};

export default Layout;