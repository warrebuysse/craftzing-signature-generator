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
          <Label htmlFor="firstName" className="text-[--color-neutral-700]">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            defaultValue={formData.firstName}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[--color-neutral-700]">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            defaultValue={formData.lastName}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-[--color-neutral-700]">Job Title</Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            defaultValue={formData.jobTitle}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[--color-neutral-700]">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue={formData.email}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[--color-neutral-700]">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            defaultValue={formData.phone}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image" className="text-[--color-neutral-700]">Profile Picture</Label>
          <Input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white cursor-pointer"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SignatureForm;