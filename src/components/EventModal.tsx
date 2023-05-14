import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const EventModal = () => {
  const { setShowEventModal, daySelected, dispatchCalEvents, selectedEvent } =
    useContext(GlobalContext);
  //@ts-ignore
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  //@ts-ignore
  const [desc, setDesc] = useState(selectedEvent ? selectedEvent.desc : "");
  const labelColors = ["indigo", "blue", "red", "gray", "green"];

  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? //@ts-ignore
        labelColors.find((lbl) => lbl === selectedEvent.label)
      : labelColors[0]
  );
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      desc,
      label: selectedLabel,
      //@ts-ignore
      day: daySelected?.valueOf(),
      //@ts-ignore
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvents({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvents({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justiify-between items-center">
          {selectedEvent && (
            <span
              onClick={() => {
                dispatchCalEvents({ type: "delete", payload: selectedEvent });
                setShowEventModal(false);
              }}
              className="text-gray-400 cursor-pointer"
            >
              <img
                src="data:image/png;base64,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"
                className="w-7 h-7"
              />
            </span>
          )}
          <span className="text-gray-400"></span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="text-gray-400">
              <img
                src="https://w7.pngwing.com/pngs/1008/558/png-transparent-computer-icons-button-close-angle-rectangle-logo-thumbnail.png"
                className="w-7 h-7"
              />
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              required
              className="p-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200
              focus:outline-none focus:ring-0 focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              <img
                src="data:image/png;base64,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"
                className="w-5 h-5"
              />

              {/* @ts-ignore */}
              <p>{daySelected?.format("dddd, MMMM DD")}</p>
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add Description"
              required
              className="p-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200
              focus:outline-none focus:ring-0 focus:border-blue-500 "
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              <img
                src="https://thumbs.dreamstime.com/b/bookmark-icon-vector-isolated-white-background-your-web-mobile-app-design-bookmark-logo-concept-bookmark-icon-vector-134161428.jpg"
                className="w-8 h-8"
              />
            </span>
            <div className="flex gap-x-2">
              {labelColors.map((lblClass: any, i: any) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 h-6 w-6 flex items-center rounded-full justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      ^
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-3 mt-3">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
