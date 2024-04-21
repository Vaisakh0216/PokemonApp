"use client";
import React, { useEffect, useState } from "react";

const ClickableCategory = ({ children, onCategorySelect }: any) => {
  return (
    <li
      style={{
        listStyle: "none",
        backgroundColor: "yellow",
        padding: "25px",
      }}
      onClick={() => onCategorySelect(children)}
    >
      {children}
    </li>
  );
};

export default ClickableCategory;
