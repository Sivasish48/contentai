"use client";

import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Define proper page props type for Next.js
interface PageProps {
  params: Record<string, string>;
  searchParams: { [key: string]: string | string[] | undefined };
}


// Make it a client component explicitly


export default async function CreateNewContent({ params }: PageProps) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [aiOutput, setAiOutput] = React.useState<string>("");
  const { user } = useUser();

  // Move this inside the component to ensure params is available
  const resolvedParams = await params; // Await if needed
  const selectedTemplate = Templates.find((item) => item.slug === resolvedParams["template-slug"]);

  const GenerateAiContent = async (formData: any) => {
    try {
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;

      if (!SelectedPrompt) {
        throw new Error("Template prompt not found");
      }

      const FinalAiPrompt = JSON.stringify(formData) + " , " + SelectedPrompt;

      const result = await chatSession.sendMessage(FinalAiPrompt);
      const responseText = result.response.text();
      setAiOutput(responseText);
      await SaveInDb(formData, selectedTemplate?.slug, responseText);
    } catch (error) {
      console.error("Error generating content:", error);
      // Handle error appropriately - maybe set an error state
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (formData: any, slug: string | undefined, aiResp: string) => {
    try {
      const createdBy = user?.primaryEmailAddress?.emailAddress ?? 'Unknown';
      
      await db.insert(AiOutput).values({
        formData: formData,
        templateSlug: slug ?? 'unknown',
        aiResponse: aiResp,
        createdBy: createdBy,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Error saving to database:", error);
      // Handle database error appropriately
    }
  };

  if (!selectedTemplate) {
    return (
      <div className="min-h-screen bg-black text-white p-5">
        <div className="text-center">Template not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-5">
      {/* Back Button */}
      <div className="flex items-center mb-5">
        <Button
          onClick={() => router.back()}
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
            userFormInput={GenerateAiContent}
            loading={loading}
          />
        </div>

        {/* Output Section */}
        <div className="bg-gray-900 p-5 rounded-lg shadow-lg">
          <OutputSection aiOutput={aiOutput} setLoading={false}  />
        </div>
      </div>
    </div>
  );
}