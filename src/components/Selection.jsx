import { Title } from "../components";
import { ticketTypes } from "../assets";
import { useFormContext } from "../contexts/FormContext";

export default function Selection() {
  const { formData, updateForm, clearForm, nextStep } = useFormContext();

  return (
    <div className="space-y-5">
      <div>
        <Title title={"Ticket Selection"} step={1} />
      </div>

      <div className="max-w-[700px] w-full mx-auto md:bg-[#08252B] md:border md:border-[#0E464F] md:rounded-3xl md:p-5 space-y-7">
        <div className="bg-gradient-to-br from-[#07373F] to-[#0A0C11] border border-[#07373F] w-full mx-auto rounded-3xl text-center md:py-5 md:px-0 p-3 space-y-5 md:space-y-2">
          {/*bg-gradient-to-br from-[#07373F] to-[#0A0C11] ...this is the best i could get the gradient to look like*/}
          <h3 className="font-road-rage text-[40px] md:text-[62px] leading-[100%]">
            Techember Fest ”25
          </h3>
          <h4 className="max-w-[340px] w-full mx-auto leading-[150%] text-sm md:text-base">
            Join us for an unforgettable experience at Techember! Secure your
            spot now.
          </h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-3">
            <h3>📍 The Zone Tech Park</h3>
            <h2 className="hidden md:block">||</h2>
            <h3>March 15, 2025 | 11:00 AM</h3>
          </div>
        </div>

        <div>
          <div className="h-1 w-full bg-[#0E464F]" />
        </div>

        <div className="space-y-3">
          <h3 className="leading-[150%]">Select Ticket Type:</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-[#052228] border border-[#07373F] w-full mx-auto rounded-3xl p-5">
            {ticketTypes.map((ticket) => (
              <div
                key={ticket?.id}
                className={`flex flex-col gap-2 p-3 rounded-xl border border-[#197686] cursor-pointer ${
                  formData.ticketType?.id === ticket?.id ? "bg-[#12464E]" : ""
                }`}
                onClick={() => updateForm("ticketType", ticket)}
              >
                <div>
                  <h4 className="text-xl font-semibold">{ticket?.price}</h4>
                </div>
                <div className="flex flex-col gap-y-1">
                  <h3 className="leading-[150%] uppercase">{ticket?.label}</h3>
                  <h4 className="text-sm">{`${ticket?.amountLeft}/52`}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="leading-[150%]">Number of Tickets</h3>

          <div>
            <select
              name="Number of Tickets"
              value={formData?.ticketCount}
              onChange={(e) =>
                updateForm("ticketCount", Number(e.target.value))
              }
              className="custom-select border border-[#07373F] w-full px-5 py-3 rounded-xl"
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1} className="bg-[#052228]">
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-5 md:gap-x-5 font-merriweather md:flex-row">
          <button
            className="border border-[#24A0B5] text-[#24A0B5] py-3 px-20 rounded-xl w-full cursor-pointer"
            onClick={clearForm}
          >
            Cancel
          </button>
          <button
            className="bg-[#24A0B5] text-white py-3 px-20 rounded-xl w-full cursor-pointer"
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
