import { useState, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import debounce from "lodash/debounce";
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github-dark.css';
import SignatureForm from "@/components/SignatureForm";
import SignaturePreview from "@/components/SignaturePreview";

hljs.registerLanguage('xml', xml);

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "Warre",
    lastName: "Buysse",
    email: "warre.buysse@craftzing.com",
    phone: "+32 (0)497 07 21 24",
    jobTitle: "COO",
    image: "https://cv.craftzing.com/uploads/people/_80x80_crop_center-center_none/Mail-avatar-Maarten@3x-3.png"
  });

  const [previewCode, setPreviewCode] = useState('');

  const debouncedSetFormData = useCallback(
    debounce((name: string, value: string) => {
      setFormData(prev => ({ ...prev, [name]: value }));
    }, 300),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    e.target.value = value;
    debouncedSetFormData(name, value);
  };

  const getPreviewCode = () => {
    const previewElement = document.querySelector('.preview-container');
    return previewElement ? previewElement.innerHTML : '';
  };

  const copyToClipboard = () => {
    const code = getPreviewCode();
    setPreviewCode(hljs.highlight(code, { language: 'xml' }).value);
    navigator.clipboard.writeText(code)
      .then(() => {
        toast({
          title: "Copied!",
          description: "Signature code has been copied to clipboard",
        });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to copy signature code",
          variant: "destructive",
        });
      });
  };

  const processImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        const size = Math.max(img.width, img.height);
        canvas.width = size;
        canvas.height = size;

        if (ctx) {
          ctx.fillStyle = 'rgba(0,0,0,0)';
          ctx.fillRect(0, 0, size, size);

          ctx.beginPath();
          ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.clip();

          const xOffset = (size - img.width) / 2;
          const yOffset = (size - img.height) / 2;
          
          ctx.drawImage(img, xOffset, yOffset, img.width, img.height);
          
          resolve(canvas.toDataURL('image/png'));
        } else {
          reject(new Error('Could not get canvas context'));
        }
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 500000) {
        toast({
          title: "Image too large",
          description: "Please select an image smaller than 500KB",
          variant: "destructive"
        });
        return;
      }

      try {
        const processedImageUrl = await processImage(file);
        setFormData(prev => ({ ...prev, image: processedImageUrl }));
      } catch (error) {
        toast({
          title: "Error processing image",
          description: "Failed to process the image. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-4 space-y-8">
        <div className="flex items-center justify-between">
          <img 
            src="https://cv.craftzing.com/uploads/logos/_AUTOx94_fit_center-center_none/craftzing-group.png" 
            alt="Craftzing" 
            className="h-12"
          />
          <h1 className="text-4xl font-bold text-center font-gt-sectra text-[#9b87f5]">
            Email Signature Generator
          </h1>
          <div className="w-[200px]" /> {/* Spacer for centering */}
        </div>
        
        <SignatureForm 
          formData={formData}
          handleInputChange={handleInputChange}
          handleImageUpload={handleImageUpload}
        />

        <SignaturePreview 
          formData={formData}
          copyToClipboard={copyToClipboard}
          previewCode={previewCode}
        />
      </div>
    </div>
  );
};

export default Index;
