import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <div className="p-5 flex flex-col gap-3 cursor-pointer shadow-md border border-purple-700 bg-gray-800 hover:bg-purple-900 transition-colors rounded-lg">
        <img src={item.icon} alt="Template Icon" width={50} height={50} />
        <h2 className="text-lg font-medium text-white">{item.name}</h2>
        <p className="text-gray-300 line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
