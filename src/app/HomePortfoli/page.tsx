"use client"
import {NextUIProvider} from "@nextui-org/react";
import React from "react";
import ShowNavBar from "@/app/HomePortfoli/components/ShowNavBar";
import { DescriptiontHome } from "./components/TextHome";
import { BarSocialMedia } from "@/components/ButtomClick";

export default function HomePortfoli() {
  return (
    <NextUIProvider>
      <div className="">
        <div>
          <div className="">
            <div className="">
              <ShowNavBar></ShowNavBar>
            </div>
            <div className="h-full w-full py-10">
              <div className="grid grid-rows-2 grid-flow-col gap-4 ">
                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-3/12 warxs:w-2/12 h-unit-2  bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <h1 className="guty2lg:text-2xl text-7xl font-extrabold text-center px-5">Follow my work</h1>
                  <hr className="w-3/12 warxs:w-2/12 h-unit-2  bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </div>
                <div className="flex items-center justify-center">
                  <BarSocialMedia></BarSocialMedia>
                </div>
              </div>
            </div>
            <div>
              <DescriptiontHome></DescriptiontHome>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </NextUIProvider>
  );
}

