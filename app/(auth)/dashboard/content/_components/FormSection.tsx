import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection';

interface Props {
  selectedTemplate?: TEMPLATE;
}
function FormSection({selectedTemplate}:Props) {
  return (
    <div  className='p-5 shadow-md border rounded-lg bg-white'>
        
        <img src={selectedTemplate?.icon} alt="Template Icon" width={70} height={70} />
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-black text-sm'>{selectedTemplate?.desc}</p>
    </div>
  )
}

export default FormSection