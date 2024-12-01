import { memo, useRef } from "react";

interface PreviewProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    image: string;
    jobTitle: string;
  };
}

const Preview = memo(({ formData }: PreviewProps) => {
  const previewRef = useRef<HTMLDivElement>(null);

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
                            <h2 style="Margin: 0; Margin-bottom: 10px; color: #5e5e5e; font-family: 'Helvetica Neue', arial, sans-serif; font-size: 12px; font-weight: 300; line-height: 1.16; margin: 0; margin-bottom: 15px; padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; text-align: left; word-wrap: normal;">${formData.jobTitle}</h2>
                            <div>
                              <a style="color: #6b52d0 !important; font-family: 'Helvetica Neue', arial, sans-serif; font-size: 12px; font-weight: normal; line-height: 1.3; padding: 0; text-align: left; text-decoration: underline;" href="mailto:${formData.email}">${formData.email}</a>
                            </div>
                            <div>
                              <a style="color: #6b52d0 !important; font-family: 'Helvetica Neue', arial, sans-serif; font-size: 12px; font-weight: normal; line-height: 1.3; padding: 0; text-align: left; text-decoration: underline;" href="tel:${formData.phone}">${formData.phone}</a>
                            </div>
                          </th>
                          <th style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; color: #0a0a0a; font-family: Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding-bottom: 5px; padding-left: 20px; padding-right: 10px; padding-top: 0; text-align: left; vertical-align: top; width: 290px; word-wrap: break-word;" valign="top" align="left">
                            <a style="color: #7868ba; font-family: Arial, sans-serif; font-weight: normal; line-height: 1.3; padding: 0; text-align: left; text-decoration: none !important;" title="Craftzing" href="https://craftzing.com/" target="_blank" rel="noopener noreferrer">
                              <img style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none; height: 40px;" alt="Craftzing" src="/lovable-uploads/8f9f0b9f-2deb-420c-9f9b-7b2689c790c9.png">
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

  return (
    <div ref={previewRef} dangerouslySetInnerHTML={{ __html: getSignatureCode() }} />
  );
});

Preview.displayName = "Preview";

export default Preview;