"use client";

import React, { useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Props {
  aiOutput: string;
  setLoading: boolean;
}

function OutputSection({ aiOutput, setLoading }: Props) {
  const [copied, setCopied] = useState(false);
  const editorRef: any = React.useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = async () => {
    try {
      // Copy the plain text to the clipboard
      await navigator.clipboard.writeText(aiOutput);
      // Indicate success with the tick icon
      setCopied(true);
      // Reset the icon after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="shadow-lg border rounded-lg p-5">
      <div className="flex justify-between items-center p-5">
        <h2>Your Output</h2>
        <Button
          className="bg-purple-600 hover:bg-purple-500 flex items-center gap-2"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-5 w-5 text-white" />
          ) : (
            "Copy"
          )}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        height="700px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
