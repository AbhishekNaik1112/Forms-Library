import React from "react";
import Forms from "./components/Form";
import FormsHooks from "./components/FormHook";

export default function App() {
  return (
    <div className="flex font-bold text-center">
      <Forms />
      <div className="font-extrabold text-2xl text-red-600 underline">

        Only Logging Hook Form
        </div>
      <FormsHooks />
    </div>
  );
}
