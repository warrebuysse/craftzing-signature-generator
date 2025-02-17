import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";
import Preview from "@/components/Preview";
import Header from "@/components/Header";
import SignatureForm from "@/components/SignatureForm";
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

  const copyToClipboard = () => {
    const previewElement = document.querySelector('.preview-container');
    const code = previewElement ? previewElement.innerHTML : '';
    
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

  return (
    <div className="min-h-screen bg-[#F8F7FC]">
      <Header />
      
      <main className="container mx-auto px-4 pt-[84px] pb-12 space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto my-[30px]">
          <h1 className="text-[56px] leading-[64px] font-bold font-['gt_sectra'] text-black">
            Craftsignature Generator
          </h1>
          <p className="text-[20px] leading-[32px] text-gray-600 font-['tt_commons_pro']">
            Maak je professionele e-mailhandtekening in enkele seconden. Vul de vereiste informatie hieronder in, upload je Craftzing profielfoto en klik op "kopieer code". Plak de HTML-code als HTML in je e-mailprogramma.
          </p>
        </div>

        <SignatureForm 
          formData={formData}
          handleInputChange={handleInputChange}
          handleImageUpload={handleImageUpload}
        />

        <Card className="bg-white shadow-sm border-gray-100 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Voorbeeld</h2>
            <Button 
              onClick={copyToClipboard} 
              variant="outline"
              className="bg-[--color-primary-600] text-white hover:bg-[--color-primary-700] border-none rounded-none"
            >
              <Copy className="w-4 h-4 mr-2" />
              Kopieer Code
            </Button>
          </div>
          <div className="preview-container border border-gray-200 p-4 rounded-lg bg-white">
            <Preview formData={formData} />
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Index;
