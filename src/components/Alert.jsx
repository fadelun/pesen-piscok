import { CircleCheckBig } from "lucide-react";

export default function Alert({ message }) {
  return (
    <div
      role="alert"
      className="fixed top-4 inset-x-0 max-w-xl mx-auto bg-green-200/50 text-green-800 rounded-md border-2 border-green-300 p-3 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <CircleCheckBig />

        <div className="flex-1">
          <strong className="font-medium "> {message} </strong>
        </div>
      </div>
    </div>
  );
}
