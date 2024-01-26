"use client";
import React from "react";
import BarSample from "./BarSample";
import { barData } from "@/testData/barData";
const index = () => {
  return (
    <div>
      <BarSample data={barData} />
    </div>
  );
};

export default index;
