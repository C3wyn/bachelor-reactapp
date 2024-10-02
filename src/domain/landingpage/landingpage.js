import React, { useEffect, useState } from "react";
import { Hero } from "./widgets/hero/hero";
import { Brands } from "./widgets/brands/brands";
import { Phones } from "./widgets/phones/phones";

export const Landingpage = () => {

  
  return (
    <div>
      <Hero/>
      <Brands/>
      <Phones/>
    </div>
  );
}