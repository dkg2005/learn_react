import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import styles  from './index.css'

const PassGenerator = ({ pass }) => {
  const passRef = useRef(null);
  const [pdfUrl, setPdfUrl] = useState("");

  const generatePDF = async () => {
    if (!passRef.current) return;

    // Capture the pass details as an image
    const canvas = await html2canvas(passRef.current);
    const imgData = canvas.toDataURL("image/png");

    // Create a PDF
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 180, 160);

    // Convert PDF to Blob and create a downloadable URL
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    setPdfUrl(pdfUrl);
  };

  return (
    <div>
      {/* Pass Details Section */}
      {pass && (
        <div ref={passRef} className="passCard" style={{ padding: "10px", border: "1px solid #ddd" }}>
          <h2>Pass Details</h2>
          <p><strong>Vehicle Number:</strong> {pass.vehicleNo}</p>
          <p><strong>Owner:</strong> {pass.owner}</p>
          <p><strong>Type:</strong> {pass.vehicleType}</p>
          <p><strong>Duration:</strong> {pass.duration}</p>
          <p><strong>Price:</strong> ₹{pass.price}</p>
          <p><strong>Issue Date:</strong> {pass.issueDate}</p>
          <p><strong>Expiry Date:</strong> {pass.expiryDate}</p>
        </div>
      )}

      {/* Generate QR Code and PDF Button */}
      <button onClick={generatePDF} className="qrcodeBtn">
        Generate QR Code
      </button>

      {/* Display QR Code after PDF is generated */}
      {pdfUrl && (
        <div style={{ marginTop: "20px",padding:"10px",textAlign:"center"}}>
          <QRCodeCanvas value={pdfUrl} size={200} />
          <p>Scan to Download Pass</p>
          {/* Direct Download Button */}
          <a href={pdfUrl} download="pass_details.pdf"> 
            <button className="downloadBtn">Download PDF</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default PassGenerator;
