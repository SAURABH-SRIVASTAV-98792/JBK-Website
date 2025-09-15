import { useState } from "react";

function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
      >
        Products ▼
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
          <ul className="py-2 text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Application Management
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Assessment Management
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Digital Result
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Online Evaluation
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
