import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const useReactSpeakerBoardPdf = () => {
  const downloadPdf = async (slide: (() => JSX.Element)[], fileName?: string) => {
    const slideLength = slide.length;

    // Get the width and height of the slide
    const target = document.getElementById(`slide-1`);
    if (target === null) return;
    const { width, height } = await html2canvas(target)
    const pdf = new jsPDF({
      orientation: 'l',
      unit: 'px',
      format: [width / 5, height / 5],
    });

    for (let i = 1; i <= slideLength; i++) {
      const target = document.getElementById(`slide-${i}`);
      if (target === null) return;

      const canvas = await html2canvas(target)
      const imgData = canvas.toDataURL('image/svg', 1);
      pdf.addImage(imgData, 'SVG', 0, 0, canvas.width / 5, canvas.height / 5, `slide-${i}`);
      if (i !== slideLength) pdf.addPage();
    }
    pdf.save(fileName ?? "reactspeakerboard.pdf");
  };
  return { downloadPdf };
}
