"use client";
import React, { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateListSection';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface Props {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: Props) {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    userFormInput(formData);
  };

  return (
    <div className="p-6 shadow-md border border-purple-700 rounded-lg bg-gray-800 text-white">
      <img
        src={selectedTemplate?.icon}
        alt="Template Icon"
        width={70}
        height={70}
        className="mb-4"
      />
      <h2 className="font-bold text-2xl mb-2 text-white-500">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-300 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-4">
            <label className="block text-sm font-bold text-gray-300">
              {item.label}
            </label>
            {item.field === 'input' ? (
              <Input
                type="text"
                className="w-full px-4 py-2 border border-purple-500 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field === 'textarea' ? (
              <Textarea
                className="w-full px-4 py-2 border border-purple-500 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                rows={4}
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              ></Textarea>
            ) : null}
          </div>
        ))}
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4"
          type="submit"
          disabled={loading}
        >
          {loading && <Loader2 className='animate-spin' />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
