import React, {  useEffect } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";

interface Props {
  aiOutput: string;
}
function OutputSection({aiOutput}: Props) {

  const editorRef:any = React.useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput]);
  return (
    <div className="shadow-lg border rounded-lg p-5">
      <div className="flex justify-between items-center p-5">
        <h2>Your Output</h2>
        <Button className="bg-purple-600 hover:bg-purple-500">Copy</Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        height="700px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
    
  );
}

export default OutputSection;
