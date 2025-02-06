"use client";
import React from "react";

function Btn({ pages, page }) {
  const changePage = (direction, page) => {
    console.log(pages, page);
    if (
      (direction === "prev" && page === 0) ||
      (direction === "next" && page > pages)
    ) {
      return null;
    }
    window.location.replace(`/dashboard/reservations?page=${page}`);
  };
  return (
    <>
      <button
        onClick={() => {
          changePage("prev", Number(page) - 1);
        }}
        className="bg-[#000] text-[#fff] p-2 rounded-md w-20 hover:bg-[#5b5b5b]"
      >
        Prev
      </button>
      <button
        onClick={() => {
          changePage("next", Number(page) + 1);
        }}
        className="bg-[#000] text-[#fff] p-2 rounded-md w-20 hover:bg-[#5b5b5b]"
      >
        Next
      </button>
    </>
  );
}

export default Btn;
