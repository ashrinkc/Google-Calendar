import React from "react";

const CreateEventButton = () => {
  return (
    <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <img
        src="https://media.istockphoto.com/id/1225992522/vector/plus-symbol-sign-in-hand-drawn-style-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Wnant8VeHQjGicntDLyLv4uVPx_uaYdcYkvRqZdmgJc="
        className="w-7 h-7"
      />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
};

export default CreateEventButton;
