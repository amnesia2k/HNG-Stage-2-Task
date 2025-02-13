import { ticket } from "../assets";
import { Barcode, Title } from "../components";
import { useFormContext } from "../contexts/FormContext";

export default function Ticket() {
  const { formData, clearForm, setStep } = useFormContext();

  const handleBookAnotherTicket = () => {
    clearForm(); // Clear the form data
    setStep(1); // Reset to step 1
  };

  return (
    <div className="space-y-5">
      <div>
        <Title title={"Your Ticket"} step={3} />
      </div>

      <div className="relative max-w-[300px] w-full mx-auto h-[600px]">
        <img
          src={ticket}
          alt="ticket"
          className="absolute top-0 left-0 w-full h-full z-40 object-cover"
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
      <div className="absolute -bottom-48 md:-bottom-56 md:left-14 right-14 z-50">
        <Barcode />
      </div>
    </div>
  );
}
