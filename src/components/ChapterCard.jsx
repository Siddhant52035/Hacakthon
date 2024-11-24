import React, { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import jspdf from "jspdf";

const ChapterCard = ({ key, name, desc }) => {
  const GeneratePdfButton = () => {
    const doc = new jspdf();

    doc.text(desc, 10, 10, { align: "left" });
    doc.save(`${name}.pdf`);
  };
  return (
    <div
      className="-[400px] h-[300px] shadow-xl  flex  flex-col justify-center  items-center gap-8 bg-[#F3F8FF] rounded-xl group hover:shadow-2xl"
      key={key}
    >
      <h1 className="font-bold text-2xl group-hover:text-3xl">{name}</h1>
      <p className="px-8 text-center group-hover:text-xl ">{desc}</p>
      <button
        className="py-2 bg-[#2EA0D7] rounded-lg px-4 font-semibold"
        onClick={GeneratePdfButton}
      >
        Download PDF
      </button>
    </div>
  );
};

export default ChapterCard;
