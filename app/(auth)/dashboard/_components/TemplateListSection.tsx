import Templates from '@/app/(data)/Templates';
import TemplateCard from './TemplateCard';
import React, { useEffect, useState } from 'react';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}
interface Props {
  userSearchInput: string;
}

function TemplateListSection({userSearchInput}:Props) {
  const [TemplateList,setTemplateList] = useState(Templates)
  useEffect(() => {
    if(userSearchInput) {
      const filterData = Templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase())
    )
      setTemplateList(filterData)
    }else{
      setTemplateList(Templates)
    }
    
  }, [userSearchInput]);
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 bg-black'>
      {TemplateList.map((item: TEMPLATE, index: number) => (
        // Pass the entire item object
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  );
}

export default TemplateListSection;
