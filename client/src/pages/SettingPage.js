import React from "react";
import Header from "../components/Header";

const SettingPage = () => {
  return (
    <>
      <Header />
      <div className="mt-20 max-w-[500px] flex flex-col gap-4 mx-auto">
        <div className=" flex justify-between items-center">
          <span>vicky sangwan</span>
          <button className="cursor-pointer bg-gray-500 px-4 py-2 rounded-3xl min-w-[100px]">
            update
          </button>
        </div>
        <div className=" flex justify-between items-center">
          <span>vicky@gmail.com</span>
          <button className="cursor-pointer bg-gray-500 px-4 py-2 rounded-3xl min-w-[100px]">
            update
          </button>
        </div>
        <div className=" flex justify-between items-center">
          <span>********</span>
          <button className="cursor-pointer bg-gray-500 px-4 py-2 rounded-3xl min-w-[100px]">
            update
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
