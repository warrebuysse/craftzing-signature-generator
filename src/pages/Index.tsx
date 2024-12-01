import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "Warre",
    lastName: "Buysse",
    email: "warre.buysse@craftzing.com",
    phone: "+32 (0)497 07 21 24",
    image: "https://cv.craftzing.com/uploads/people/_80x80_crop_center-center_none/Mail-avatar-Maarten@3x-3.png"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const getSignatureCode = () => {
    return `<table style="Margin: 0; background: #ffffff; border-collapse: collapse; border-spacing: 0; color: #0a0a0a; font-family: Arial, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.3; margin: 0; padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; vertical-align: top; width: 100%;" class="fa-a30xfy">
      <tbody>
        <tr style="padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; vertical-align: top;">
          <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #0a0a0a; font-family: Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; vertical-align: top; word-wrap: break-word;" valign="top">
            <table style="Margin: 0 auto; background: #fefefe; border-collapse: collapse; border-spacing: 0; margin: 0 auto; padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; text-align: inherit; vertical-align: top; width: 600px;" class="fa-fn006d" align="left">
              <tbody>
                <tr style="padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; vertical-align: top;">
                  <td style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0; border-collapse: collapse !important; color: #0a0a0a; font-family: Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0; padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; vertical-align: top; word-wrap: break-word;">
                    <table style="border-collapse: collapse; border-spacing: 0px; display: table; padding: 0px; text-align: left; vertical-align: top; width: 100%;" class="fa-ycovfp">
                      <tbody>
                        <tr style="padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; vertical-align: top;">
                          <th style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; color: #0a0a0a; font-family: Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding-bottom: 5px; padding-left: 10px; padding-right: 5px; padding-top: 0; text-align: left; vertical-align: top; width: 40px; word-wrap: break-word;" valign="top" align="left">
                            <img style="-ms-interpolation-mode: bicubic; clear: both; display: block; height: 40px !important; max-width: 40px !important; outline: none; text-decoration: none; width: 40px !important;" alt="" height="40" width="40" src="${formData.image}">
                          </th>
                          <th style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; border-right: 1px solid #D5D5D5; color: #0a0a0a; font-family: Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding-bottom: 5px; padding-left: 7px; padding-right: 5px; padding-top: 5px; text-align: left; vertical-align: top; width: 240px; word-wrap: break-word;" valign="top" align="left">
                            <h1 style="Margin: 0; Margin-bottom: 10px; color: inherit; font-family: 'Helvetica Neue', arial, sans-serif; font-size: 14px; font-weight: bold; line-height: 1.16; margin: 0; margin-bottom: 2px; padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; word-wrap: normal;">${formData.firstName} ${formData.lastName}</h1>
                            <h2 style="Margin: 0; Margin-bottom: 10px; color: #5e5e5e; font-family: 'Helvetica Neue', arial, sans-serif; font-size: 12px; font-weight: 300; line-height: 1.16; margin: 0; margin-bottom: 15px; padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; word-wrap: normal;">COO</h2>
                            <div>
                              <a style="color: #7868ba !important; font-family: 'Helvetica Neue', arial, sans-serif; font-size: 12px; font-weight: normal; line-height: 1.3; padding: 0; text-align: left; text-decoration: underline;" href="mailto:${formData.email}">${formData.email}</a>
                            </div>
                            <div>
                              <a style="color: #7868ba !important; font-family: 'Helvetica Neue', arial, sans-serif; font-size: 12px; font-weight: normal; line-height: 1.3; padding: 0; text-align: left; text-decoration: underline;" href="tel:${formData.phone}">${formData.phone}</a>
                            </div>
                          </th>
                          <th style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; color: #0a0a0a; font-family: Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding-bottom: 5px; padding-left: 20px; padding-right: 10px; padding-top: 0; text-align: left; vertical-align: top; width: 290px; word-wrap: break-word;" valign="top" align="left">
                            <a style="color: #7868ba; font-family: Arial, sans-serif; font-weight: normal; line-height: 1.3; padding: 0; text-align: left; text-decoration: none !important;" title="Craftzing" href="https://craftzing.com/" target="_blank" rel="noopener noreferrer">
                              <img style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none;" alt="Craftzing Group" height="47" width="193.5" src="https://cv.craftzing.com/uploads/logos/_AUTOx94_fit_center-center_none/craftzing-group.png">
                            </a>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getSignatureCode());
    toast({
      title: "Copied!",
      description: "Signature code has been copied to clipboard",
    });
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Email Signature Generator</h1>
      
      {/* Input Form */}
      <Card className="p-6">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="image">Profile Picture</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="cursor-pointer"
            />
          </div>
        </CardContent>
      </Card>

      {/* Preview and Code Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Preview */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="border p-4 rounded-lg bg-white" dangerouslySetInnerHTML={{ __html: getSignatureCode() }} />
        </Card>

        {/* Code */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Code</h2>
            <Button onClick={copyToClipboard} variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              Copy Code
            </Button>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {getSignatureCode()}
          </pre>
        </Card>
      </div>
    </div>
  );
};

export default Index;