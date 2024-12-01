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
    // Base64 encoded Craftzing logo, resized to match height of 47px while maintaining aspect ratio
    const craftingLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAAAvCAYAAABmx0TmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDQtMTVUMTY6NDc6NDUrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDQtMTVUMTY6NDc6NDUrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA0LTE1VDE2OjQ3OjQ1KzAyOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY0ZjM4ZjE5LTQ5ZDgtNDI0ZC1hMjU3LTQ4ZjNhZjVlZjZhZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk3ZjQ3ZDY5LTY0ZjgtNDU0Yy1h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";

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
                              <a style="color: #7868ba !important; font-family: 'Helvetica Neue', arial, sans-serif; font-size: 12px; font-weight: normal; line-height: 1.3; padding: 0; text-align: left; text-decoration: underline;" href="mailto:${formData.email}">${formData.email}</a>
                            </div>
                            <div>
                              <a style="color: #7868ba !important; font-family: 'Helvetica Neue', arial, sans-serif; font-size: 12px; font-weight: normal; line-height: 1.3; padding: 0; text-align: left; text-decoration: underline;" href="tel:${formData.phone}">${formData.phone}</a>
                            </div>
                          </th>
                          <th style="-moz-hyphens: auto; -webkit-hyphens: auto; Margin: 0 auto; border-collapse: collapse !important; color: #0a0a0a; font-family: Arial, sans-serif; font-size: 16px; font-weight: normal; hyphens: auto; line-height: 1.3; margin: 0 auto; padding-bottom: 5px; padding-left: 20px; padding-right: 10px; padding-top: 0; text-align: left; vertical-align: top; width: 290px; word-wrap: break-word;" valign="top" align="left">
                            <a style="color: #7868ba; font-family: Arial, sans-serif; font-weight: normal; line-height: 1.3; padding: 0; text-align: left; text-decoration: none !important;" title="Craftzing" href="https://craftzing.com/" target="_blank" rel="noopener noreferrer">
                              <img style="-ms-interpolation-mode: bicubic; clear: both; display: block; max-width: 100%; outline: none; text-decoration: none;" alt="Craftzing" height="47" width="193.5" src="${craftingLogo}">
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