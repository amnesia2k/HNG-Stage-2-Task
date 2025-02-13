import * as React from "react";
import JsBarcode from "jsbarcode";
import { useFormContext } from "../contexts/FormContext";

export default function Barcode() {
  const { formData } = useFormContext();
  const barcodeRef = React.useRef(null);

  React.useEffect(() => {
    if (formData.barcode) {
      JsBarcode(barcodeRef.current, formData.barcode, {
        format: "upc",
        displayValue: true,
        fontSize: 16,
        width: 2,
        height: 70,
        background: "transparent",
        lineColor: "#ffffff",
      });
    }
  }, [formData.barcode]);

  return (
    <div className="flex flex-col items-center space-y-4 px-5">
      <svg ref={barcodeRef}></svg>
    </div>
  );
}
