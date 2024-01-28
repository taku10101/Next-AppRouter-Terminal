"use client";
import React from "react";
import AreaSample from "./_components/AreaSample";
import BarSample from "./_components/BarSample";
import { areaData } from "@/testData/areaData";
import { barData } from "@/testData/barData";

const index = () => {
  return (
    <div>
      <BarSample data={barData} />
      <AreaSample data={areaData} />
    </div>
  );
};

export default index;
