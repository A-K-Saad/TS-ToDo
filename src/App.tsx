import { useEffect, useState } from "react";
import "./App.css";
import "animate.css";

const App = () => {
  const [isAddingComponent, setIsAddingComponent] = useState(false);
  const homeCom = document?.getElementsByClassName("home-com")[0];
  const addCom = document?.getElementsByClassName("add-com")[0];

  useEffect(() => {
    if (isAddingComponent) {
      homeCom?.classList?.add("hidden");
      addCom?.classList?.remove("hidden");
      addCom?.classList?.add("animate__animated", "animate__zoomIn");
    } else {
      homeCom?.classList?.remove("hidden");
      homeCom?.classList?.add("animate__animated", "animate__zoomIn");
      addCom?.classList?.add("hidden");
      addCom?.classList?.remove("animate__animated", "animate__zoomIn");
    }
  }, [isAddingComponent]);

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden flex items-center justify-center p-3">
        <div className="max-w-md w-full bg-blue-50 shadow rounded overflow-hidden m-auto relative home-com">
          <header
            className="md:h-56 grid grid-cols-5"
            style={{
              background:
                "url(https://i.ibb.co/Sm1F755/luca-zanon-X0-Oo-Hr-Pvg-XE-unsplash-scaled.jpg), no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="col-span-3 border-b-4 border-blue-400 bg-black bg-opacity-25 h-full flex flex-col justify-center p-5">
              <h1 className="text-white text-3xl truncate">10 Works Today</h1>
              <p className="pt-4 text-gray-200">
                {new Date().getDate()},{" "}
                {new Date().toLocaleString("default", { month: "long" })}
              </p>
            </div>
            <div className="col-span-2 w-full"></div>
          </header>
          <div className="p-6 h-60 md:h-80 overflow-y-auto">
            <div className="overflow-y-auto h-full w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => {
                return (
                  <div
                    className="border-b border-blue-200 py-2 flex space-x-3 items-center"
                    key={el}
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                      <i className="fas fa-walking text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600"></i>
                    </div>
                    <h1>{el}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="absolute bottom-5 right-5 w-14 h-14 bg-white rounded-full text-3xl text-blue-300 flex items-center justify-center cursor-pointer shadow hover:bg-gray-50 hover:text-blue-400 transition-all"
            onClick={() => setIsAddingComponent(true)}
          >
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="add-com max-w-md w-full bg-white shadow rounded overflow-hidden m-auto relative hidden">
          <button
            className="bg-blue-500 text-white px-6 py-2 text-xl"
            onClick={() => setIsAddingComponent(false)}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <form
            onSubmit={() => console.log("lak")}
            className="p-6 flex items-stretch flex-col"
          >
            <input
              className="shadow-sm text-black font-bold appearance-none border rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-600 transition ease-in-out focus:shadow-outline mb-3"
              id="username"
              type="text"
              placeholder="To Do"
              autoComplete="off"
            />
            <input
              className="shadow-sm text-black font-bold appearance-none border rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-600 transition ease-in-out focus:shadow-outline mb-3"
              id="time"
              type="text"
              placeholder="Time"
              autoComplete="off"
            />
            <div className="relative mb-3">
              <select
                className="form-select text-black font-bold appearance-none block w-full px-3 py-2 bg-white bg-clip-padding bg-no-repeat shadow-sm border rounded-sm transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option disabled value="Life">
                  Select the work category
                </option>
                <option value="Life">Life</option>
                <option value="Personal">Personal</option>
                <option value="Education">Education</option>
                <option value="Work">Work</option>
              </select>
              <i className="fas fa-chevron-down absolute top-3 right-5"></i>
            </div>
            <textarea
              name="description"
              className="shadow-sm text-black font-bold appearance-none border rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-600 transition ease-in-out focus:shadow-outline mb-3"
              rows={5}
              placeholder="Enter your task details"
            ></textarea>
            <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-sm transition-all font-bold text-center">
              Add To Do
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
