"use client"
import {NextUIProvider} from "@nextui-org/react";
import React from "react";
import ShowNavBar from "@/app/HomePortfoli/components/ShowNavBar";
import { DescriptiontHome } from "./components/TextHome";
import { FollowMyHome } from "./components/TextHome";

export default function HomePortfoli() {
  return (
    <NextUIProvider>
      <div className="">
        <div>
          <div className="">
            <div className="">
              <ShowNavBar></ShowNavBar>
            </div>
            <div>
              <FollowMyHome></FollowMyHome>
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

