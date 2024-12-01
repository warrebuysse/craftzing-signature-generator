import { memo } from "react";

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
  return (
    <table style={{ Margin: 0, background: "#ffffff", borderCollapse: "collapse", borderSpacing: 0, color: "#0a0a0a", fontFamily: "Arial, sans-serif", fontSize: 16, fontWeight: "normal", lineHeight: 1.3, margin: 0, padding: 0, textAlign: "left", verticalAlign: "top", width: "100%" }} className="fa-a30xfy">
      <tbody>
        <tr style={{ padding: 0, textAlign: "left", verticalAlign: "top" }}>
          <td style={{ margin: 0, borderCollapse: "collapse !important", color: "#0a0a0a", fontFamily: "Arial, sans-serif", fontSize: 16, fontWeight: "normal", lineHeight: 1.3, padding: 0, textAlign: "left", verticalAlign: "top", wordWrap: "break-word" }} valign="top">
            <table style={{ margin: "0 auto", background: "#fefefe", borderCollapse: "collapse", width: 600 }} className="fa-fn006d" align="left">
              <tbody>
                <tr style={{ padding: 0, textAlign: "left", verticalAlign: "top" }}>
                  <td style={{ margin: 0, borderCollapse: "collapse !important", color: "#0a0a0a", fontFamily: "Arial, sans-serif", fontSize: 16, fontWeight: "normal", lineHeight: 1.3, padding: 0, textAlign: "left", verticalAlign: "top", wordWrap: "break-word" }}>
                    <table style={{ borderCollapse: "collapse", width: "100%" }} className="fa-ycovfp">
                      <tbody>
                        <tr style={{ padding: 0, textAlign: "left", verticalAlign: "top" }}>
                          <th style={{ margin: "0 auto", borderCollapse: "collapse !important", color: "#0a0a0a", fontFamily: "Arial, sans-serif", fontSize: 16, fontWeight: "normal", lineHeight: 1.3, padding: "0 10px 5px 10px", textAlign: "left", verticalAlign: "top", width: 40, wordWrap: "break-word" }} valign="top" align="left">
                            <img style={{ display: "block", height: 40, width: 40 }} alt="" src={formData.image} />
                          </th>
                          <th style={{ margin: "0 auto", borderCollapse: "collapse !important", borderRight: "1px solid #D5D5D5", color: "#0a0a0a", fontFamily: "Arial, sans-serif", fontSize: 16, fontWeight: "normal", lineHeight: 1.3, padding: "5px 10px 5px 7px", textAlign: "left", verticalAlign: "top", width: 240, wordWrap: "break-word" }} valign="top" align="left">
                            <h1 style={{ margin: 0, marginBottom: 10, color: "inherit", fontFamily: "'Helvetica Neue', arial, sans-serif", fontSize: 14, fontWeight: "bold", lineHeight: 1.16 }}>{formData.firstName} {formData.lastName}</h1>
                            <h2 style={{ margin: 0, marginBottom: 15, color: "#5e5e5e", fontFamily: "'Helvetica Neue', arial, sans-serif", fontSize: 12, fontWeight: 300, lineHeight: 1.16 }}>{formData.jobTitle}</h2>
                            <div>
                              <a style={{ color: "#7868ba !important", fontFamily: "'Helvetica Neue', arial, sans-serif", fontSize: 12, fontWeight: "normal", lineHeight: 1.3, textDecoration: "underline" }} href={`mailto:${formData.email}`}>{formData.email}</a>
                            </div>
                            <div>
                              <a style={{ color: "#7868ba !important", fontFamily: "'Helvetica Neue', arial, sans-serif", fontSize: 12, fontWeight: "normal", lineHeight: 1.3, textDecoration: "underline" }} href={`tel:${formData.phone}`}>{formData.phone}</a>
                            </div>
                          </th>
                          <th style={{ margin: "0 auto", borderCollapse: "collapse !important", color: "#0a0a0a", fontFamily: "Arial, sans-serif", fontSize: 16, fontWeight: "normal", lineHeight: 1.3, padding: "0 20px 5px 10px", textAlign: "left", verticalAlign: "top", width: 290, wordWrap: "break-word" }} valign="top" align="left">
                            <a style={{ color: "#7868ba", fontFamily: "Arial, sans-serif", fontWeight: "normal", lineHeight: 1.3, textDecoration: "none !important" }} title="Craftzing" href="https://craftzing.com/" target="_blank" rel="noopener noreferrer">
                              <img style={{ display: "block", maxWidth: "100%" }} alt="Craftzing Group" height="47" src="https://cv.craftzing.com/uploads/logos/_AUTOx94_fit_center-center_none/craftzing-group.png" />
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
    </table>
  );
});

Preview.displayName = "Preview";

export default Preview;
