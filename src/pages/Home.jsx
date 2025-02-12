import { Attendee, Selection, Ticket } from "../components";
import { useFormContext } from "../contexts/FormContext";

export default function Home() {
  const { step } = useFormContext();

  return (
    <div className="max-w-[700px] w-full mx-auto bg-[#05252C] border border-[#197686] rounded-3xl p-5 md:p-10">
      {step === 1 && <Selection />}
      {step === 2 && <Attendee />}
      {step === 3 && <Ticket />}
    </div>
  );
}
