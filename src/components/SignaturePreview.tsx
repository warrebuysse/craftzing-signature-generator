import { Card } from "@/components/ui/card";
import Preview from "./Preview";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import hljs from 'highlight.js/lib/core';

interface SignaturePreviewProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    jobTitle: string;
    image: string;
  };
  copyToClipboard: () => void;
  previewCode: string;
}

const SignaturePreview = ({ formData, copyToClipboard, previewCode }: SignaturePreviewProps) => {
  return (
    <div className="space-y-8">
      <Card className="bg-card border-border p-6">
        <h2 className="text-xl font-semibold mb-4 text-primary font-tt-commons">Preview</h2>
        <div className="preview-container border border-border p-4 rounded-lg bg-white">
          <Preview formData={formData} />
        </div>
      </Card>

      <Card className="bg-card border-border p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary font-tt-commons">Code</h2>
          <Button 
            onClick={copyToClipboard} 
            variant="outline" 
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 border-none"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Code
          </Button>
        </div>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm text-foreground border border-border">
          <code 
            className="hljs language-xml"
            dangerouslySetInnerHTML={{ __html: previewCode }}
          />
        </pre>
      </Card>
    </div>
  );
};

export default SignaturePreview;