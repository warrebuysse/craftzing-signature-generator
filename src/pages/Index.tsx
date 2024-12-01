import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";
import Preview from "@/components/Preview";
import debounce from "lodash/debounce";

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

  const processImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // Make canvas square based on the largest dimension
        const size = Math.max(img.width, img.height);
        canvas.width = size;
        canvas.height = size;

        if (ctx) {
          // Fill with transparency
          ctx.fillStyle = 'rgba(0,0,0,0)';
          ctx.fillRect(0, 0, size, size);

          // Create circular clipping path
          ctx.beginPath();
          ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.clip();

          // Calculate position to center the image
          const xOffset = (size - img.width) / 2;
          const yOffset = (size - img.height) / 2;
          
          // Draw the image
          ctx.drawImage(img, xOffset, yOffset, img.width, img.height);
          
          // Convert to PNG with transparency
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

  const copyToClipboard = () => {
    const preview = document.querySelector('.preview-container');
    if (preview) {
      const range = document.createRange();
      range.selectNode(preview);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
    }
    toast({
      title: "Copied!",
      description: "Signature code has been copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <div className="container mx-auto p-4 space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8 font-['Satoshi'] text-[#9b87f5]">
          Email Signature Generator
        </h1>
        
        <Card className="bg-[#222632] border-[#2A2F3C]">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#9b87f5]">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                defaultValue={formData.firstName}
                onChange={handleInputChange}
                className="bg-[#1A1F2C] border-[#2A2F3C] text-white focus:border-[#9b87f5]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#9b87f5]">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                defaultValue={formData.lastName}
                onChange={handleInputChange}
                className="bg-[#1A1F2C] border-[#2A2F3C] text-white focus:border-[#9b87f5]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="text-[#9b87f5]">Job Title</Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                defaultValue={formData.jobTitle}
                onChange={handleInputChange}
                className="bg-[#1A1F2C] border-[#2A2F3C] text-white focus:border-[#9b87f5]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#9b87f5]">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={formData.email}
                onChange={handleInputChange}
                className="bg-[#1A1F2C] border-[#2A2F3C] text-white focus:border-[#9b87f5]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#9b87f5]">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                defaultValue={formData.phone}
                onChange={handleInputChange}
                className="bg-[#1A1F2C] border-[#2A2F3C] text-white focus:border-[#9b87f5]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image" className="text-[#9b87f5]">Profile Picture</Label>
              <Input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="bg-[#1A1F2C] border-[#2A2F3C] text-white focus:border-[#9b87f5] cursor-pointer"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#222632] border-[#2A2F3C] p-6">
            <h2 className="text-xl font-semibold mb-4 text-[#9b87f5]">Preview</h2>
            <div className="preview-container border border-[#2A2F3C] p-4 rounded-lg bg-white">
              <Preview formData={formData} />
            </div>
          </Card>

          <Card className="bg-[#222632] border-[#2A2F3C] p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#9b87f5]">Code</h2>
              <Button 
                onClick={copyToClipboard} 
                variant="outline" 
                size="sm"
                className="bg-[#9b87f5] text-white hover:bg-[#7E69AB] border-none"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
            <pre className="bg-[#1A1F2C] p-4 rounded-lg overflow-x-auto text-sm text-white border border-[#2A2F3C]">
              {formData.toString()}
            </pre>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;