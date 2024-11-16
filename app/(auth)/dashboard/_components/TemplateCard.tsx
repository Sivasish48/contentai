import React from 'react';
import { TEMPLATE } from './TemplateListSection';

function TemplateCard(item: TEMPLATE) {
  return (
    <div className='p-5 flex flex-col gap-3 cursor-pointer shadow-md border bg-white'>
      <img src={item.icon} alt="Template Icon" width={50} height={50} />
      <h2 className='text-lg font-medium'>{item.name}</h2>
      <p className='text-black line-clamp-3'>{item.desc}</p>
    </div>
  );
}

export default TemplateCard;
