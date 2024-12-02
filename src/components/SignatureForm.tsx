import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageIcon, Upload } from "lucide-react";

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

declare global {
  interface Window {
    google: any;
  }
}

const SignatureForm = ({ formData, handleInputChange, handleImageUpload }: SignatureFormProps) => {
  const loadGoogleDrivePicker = () => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      window.gapi.load('picker', () => {
        window.gapi.load('client:auth2', initPicker);
      });
    };
    document.body.appendChild(script);
  };

  const initPicker = async () => {
    const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const FOLDER_ID = '1O3-SXFiRkhkULMdv7me1-b4oEKFH25W_';

    await window.gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: 'https://www.googleapis.com/auth/drive.readonly',
    });

    const auth = window.gapi.auth2.getAuthInstance();
    const user = await auth.signIn();

    if (user) {
      const token = user.getAuthResponse().access_token;
      const view = new window.google.picker.View(window.google.picker.ViewId.DOCS_IMAGES);
      view.setParent(FOLDER_ID);

      const picker = new window.google.picker.PickerBuilder()
        .enableFeature(window.google.picker.Feature.NAV_HIDDEN)
        .setAppId(CLIENT_ID)
        .setOAuthToken(token)
        .addView(view)
        .setCallback(pickerCallback)
        .build();

      picker.setVisible(true);
    }
  };

  const pickerCallback = (data: any) => {
    if (data.action === window.google.picker.Action.PICKED) {
      const fileId = data.docs[0].id;
      const imageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
      const event = {
        target: {
          name: 'image',
          value: imageUrl
        }
      } as React.ChangeEvent<HTMLInputElement>;
      handleInputChange(event);
    }
  };

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
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[--color-neutral-700]">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            defaultValue={formData.lastName}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-[--color-neutral-700]">Job Title</Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            defaultValue={formData.jobTitle}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] rounded-none"
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
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[--color-neutral-700]">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            defaultValue={formData.phone}
            onChange={handleInputChange}
            className="border-[--color-neutral-200] focus-visible:ring-[--color-primary-600] bg-white text-[--color-neutral-800] rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-[--color-neutral-700]">Profile Picture</Label>
          <div className="flex gap-2">
            <Button 
              type="button" 
              onClick={loadGoogleDrivePicker}
              className="flex-1 bg-[--color-primary-600] text-white hover:bg-[--color-primary-700] rounded-none"
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              Select from Google Drive
            </Button>
            <div className="relative flex-1">
              <Input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <Button 
                type="button" 
                className="w-full bg-white border border-[--color-neutral-200] text-[--color-neutral-700] hover:bg-gray-50 rounded-none"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Image
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignatureForm;