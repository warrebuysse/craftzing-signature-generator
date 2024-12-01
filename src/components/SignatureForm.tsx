import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

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
  );
};

export default SignatureForm;