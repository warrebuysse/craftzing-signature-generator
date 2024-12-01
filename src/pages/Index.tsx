import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";
import Preview from "@/components/Preview";
import debounce from "lodash/debounce";
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github-dark.css';

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

  const getHighlightedCode = () => {
    const code = getPreviewCode();
    return hljs.highlight(code, { language: 'xml' }).value;
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
        <h1 className="text-4xl font-bold text-center mb-8 font-gt-sectra text-[#9b87f5]">
          Email Signature Generator
        </h1>
        
        <Card className="bg-card border-border">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-primary">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                defaultValue={formData.firstName}
                onChange={handleInputChange}
                className="bg-background border-input focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-primary">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                defaultValue={formData.lastName}
                onChange={handleInputChange}
                className="bg-background border-input focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="text-primary">Job Title</Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                defaultValue={formData.jobTitle}
                onChange={handleInputChange}
                className="bg-background border-input focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={formData.email}
                onChange={handleInputChange}
                className="bg-background border-input focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                defaultValue={formData.phone}
                onChange={handleInputChange}
                className="bg-background border-input focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image" className="text-primary">Profile Picture</Label>
              <Input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="bg-background border-input focus:border-primary cursor-pointer"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                dangerouslySetInnerHTML={{ __html: getHighlightedCode() }}
              />
            </pre>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
