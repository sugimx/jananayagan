import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function downloadA4Pdf(divId: string, fileName = 'document.pdf') {
  const element = document.getElementById(divId);
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: '#333333', 
  });

  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let position = 0;
  let remainingHeight = imgHeight;

  const drawPage = () => {
    pdf.setFillColor('#333333');
    pdf.rect(0, 0, pageWidth, pageHeight, 'F'); 
  };

  if (imgHeight < pageHeight) {
    drawPage();
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  } else {
    while (remainingHeight > 0) {
      drawPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      remainingHeight -= pageHeight;
      position -= pageHeight;
      if (remainingHeight > 0) pdf.addPage();
    }
  }

  pdf.save(fileName);
}

export default downloadA4Pdf