import { WifiOff } from "lucide-react";

export default function Offline() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <WifiOff className="w-20 h-20" />
      <div className="text-center">
        <h1 className="text-2xl font-bold">You are offline</h1>
        <p className="mt-2">Please check your internet connection.</p>
      </div>
    </div>
  );
}
