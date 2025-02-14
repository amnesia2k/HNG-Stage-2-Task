import * as React from "react";
import html2canvas from "html2canvas";
import { ticket } from "../assets";
import { Barcode, Title } from "../components";
import { useFormContext } from "../contexts/FormContext";

export default function Ticket() {
  const { formData, clearForm, setStep } = useFormContext();
  const ticketRef = React.useRef(null);

  const [imagesLoaded, setImagesLoaded] = React.useState(false);

  React.useEffect(() => {
    const loadImages = async () => {
      const images = document.querySelectorAll("img");
      const promises = Array.from(images).map(
        (img) =>
          new Promise((resolve, reject) => {
            if (img.complete) resolve();
            img.onload = resolve;
            img.onerror = reject;
          })
      );

      await Promise.all(promises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  const handleBookAnotherTicket = () => {
    clearForm();
    setStep(1);
  };

  const handleDownload = () => {
    if (ticketRef.current && imagesLoaded) {
      html2canvas(ticketRef.current, {
        scale: 2,
        useCORS: true,
      }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `${formData.fullName}_ticket.png`;
        link.click();
      });
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <Title title={"Your Ticket"} step={3} />
      </div>

      <div
        ref={ticketRef}
        className="relative max-w-[300px] w-full mx-auto h-[600px]"
        style={{ color: "white", backgroundColor: "transparent" }}
      >
        <div>
          <img
            src={ticket}
            alt={`${formData.fullName}_ticket`}
            className="absolute top-0 inset-x-0 w-[300px] h-full z-40 object-cover"
          />

          <div className="absolute inset-0 w-[90%] h-[75%] rounded-xl mt-5 mx-auto z-50 py-2 px-3 border border-[#24A0B5] space-y-5">
            <div className="text-center space-y-4">
              <h3 className="font-road-rage text-[34px] leading-[34px]">
                Techember Fest ”25
              </h3>

              <div className="space-y-2">
                <p className="text-[14px] font-[400px] leading-[15px]">
                  📍 04 Rumens road, Ikoyi, Lagos
                </p>
                <p className="text-[14px] font-[400px] leading-[15px]">
                  📅 March 15, 2025 | 7:00 PM
                </p>
              </div>
            </div>

            <div className="w-[140px] h-[140px] border-3 mx-auto rounded-xl border-[#24A0B580]">
              <img
                src={formData.avatarUrl}
                alt={formData.fullName}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>

            <div className="">
              <div className="grid grid-cols-2 gap-2 border border-[#133D44] bg-[#08343C] rounded-xl p-2">
                <div>
                  <p className="text-[10px] leading-[15px] font-[400px]">
                    Attendee Name:
                  </p>
                  <h3 className="text-[12px] leading-[18px] font-medium">
                    {formData.fullName}
                  </h3>
                </div>
                <div>
                  <p className="text-[10px] leading-[15px] font-[400px]">
                    Attendee Email:
                  </p>
                  <h3 className="text-[12px] leading-[18px] font-medium break-words">
                    {formData.email}
                  </h3>
                </div>
                <div>
                  <p className="text-[10px] leading-[15px] font-[400px]">
                    Ticket Type:
                  </p>
                  <h3 className="text-[12px] leading-[18px] font-medium">
                    {formData.ticketType.label}
                  </h3>
                </div>
                <div>
                  <p className="text-[10px] leading-[15px] font-[400px]">
                    Ticket For:
                  </p>
                  <h3 className="text-[12px] leading-[18px] font-medium">
                    {formData.ticketCount}
                  </h3>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] leading-[15px] font-[400px]">
                    Special Requests:
                  </p>
                  <h3 className="text-[12px] leading-[18px] font-medium">
                    {formData.requests}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-0 md:-bottom-0 inset-x-0 z-50">
          <Barcode />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-5 md:gap-x-5 font-merriweather md:flex-row">
        <button
          onClick={handleDownload}
          className="border border-[#24A0B5] text-[#24A0B5] py-3 rounded-xl w-full cursor-pointer"
        >
          Download Ticket
        </button>
        <button
          onClick={handleBookAnotherTicket}
          className="bg-[#24A0B5] text-white py-3 rounded-xl w-full cursor-pointer"
        >
          Book Another Ticket
        </button>
      </div>
    </div>
  );
}
