"use client";

import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: Props) {
  const params = props.params;

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params["template-slug"]
  );

  const GenerateAiContent = (formData: any) => {
    console.log("Generated AI Content:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white p-5">
      {/* Back Button */}
      <div className="flex items-center mb-5">
        <Button
          onClick={() => window.history.back()}
          className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
        >
          <ArrowLeft />
          Back
        </Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Form Section */}
        <div className="bg-purple-600 p-5 rounded-lg shadow-lg">
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={(formData: any) => GenerateAiContent(formData)}
          />
        </div>

        {/* Output Section */}
        <div className="bg-purple-600 p-5 rounded-lg shadow-lg">
          <OutputSection />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
