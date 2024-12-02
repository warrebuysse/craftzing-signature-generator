import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";

interface SignatureFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    jobTitle: string;
    image: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignatureForm = ({ formData, handleInputChange, handleImageUpload }: SignatureFormProps) => {
  return (
    <Card className="bg-white shadow-sm border-[--color-neutral-200]">
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-[--color-neutral-700]">Voornaam</Label>
          <Input
            id="firstName"
            name="firstName"
            defaultValue={formData.firstName}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[--color-neutral-700]">Achternaam</Label>
          <Input
            id="lastName"
            name="lastName"
            defaultValue={formData.lastName}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-[--color-neutral-700]">Functietitel</Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            defaultValue={formData.jobTitle}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[--color-neutral-700]">E-mailadres</Label>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue={formData.email}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[--color-neutral-700]">Telefoonnummer</Label>
          <Input
            id="phone"
            name="phone"
            defaultValue={formData.phone}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] rounded-none"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="image" className="text-[--color-neutral-700]">Profielfoto</Label>
            <a 
              href="https://drive.google.com/open?id=1O3-SXFiRkhkULMdv7me1-b4oEKFH25W_&usp=drive_fs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[--color-primary-600] hover:text-[--color-primary-700] text-sm"
            >
              Craftzing profielfoto's op Google Drive
            </a>
          </div>
          <Input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] cursor-pointer rounded-none file:mr-4 file:py-[6px] file:my-[-1px] file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-[--color-primary-600] file:text-white hover:file:bg-[--color-primary-700]"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SignatureForm;