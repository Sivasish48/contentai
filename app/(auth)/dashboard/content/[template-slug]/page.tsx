"use client";

import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/AiModel";

interface Props {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: Props) {

  const [loading, setLoading] = React.useState(false);
  const [aiOutput, setAiOutput] = React.useState<string>("");
  const params = props.params;

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params["template-slug"]
  );

  const GenerateAiContent = async(formData: any) => {
    // console.log("Generated AI Content:", formData);
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;

    const FinalAiPrompt = JSON.stringify(formData) + " , " + SelectedPrompt;

    const result = await  chatSession.sendMessage(FinalAiPrompt);
    setAiOutput(result.response.text());
    setLoading(false);
    console.log("AI Response:", result.response.text());
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
            loading={loading}
          />
        </div>

        {/* Output Section */}
        <div className="bg-gray-900 p-5 rounded-lg shadow-lg">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
