import { useEffect, useState } from "react";
import "./App.css";
import "animate.css";
import { fireToast } from "./hooks/showAlert";
import SingleToDo from "./components/SingleToDo";

const App = () => {
  const [isAddingComponent, setIsAddingComponent] = useState(false);
  const homeCom = document?.getElementsByClassName("home-com")[0];
  const addCom = document?.getElementsByClassName("add-com")[0];
  const [todoName, setTodoName] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("Life");
  const [description, setDescription] = useState("");
  const [todoLists, setTodoLists] = useState<any[]>([]);
  const [updateNumber, setUpdateNumber] = useState(0);

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

  useEffect(() => {
    const todoJSON = localStorage.getItem("todos");
    if (todoJSON) {
      setTodoLists(JSON.parse(todoJSON));
    } else {
      setTodoLists([]);
    }
  }, [updateNumber]);

  const addTodo = (e: any) => {
    const preTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    localStorage.setItem(
      "todos",
      JSON.stringify([
        ...preTodos,
        {
          name: todoName,
          time: time,
          category: category,
          description: description,
          status: "Pending",
        },
      ])
    );
    fireToast();
    setUpdateNumber(Math.random() * 9834);
    e.target.reset();
  };

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
              <h1 className="text-white text-xl truncate">
                {todoLists.filter((el) => el.status === "Pending").length || 0}{" "}
                Works Pending
              </h1>
              <p className="pt-4 text-gray-200">
                {new Date().getDate()},{" "}
                {new Date().toLocaleString("default", { month: "long" })}
              </p>
            </div>
            <div className="col-span-2 w-full"></div>
          </header>
          <div className="p-8 max-h-60 md:max-h-80 overflow-y-auto">
            <div className="overflow-y-auto h-full w-full">
              {todoLists.length ? (
                todoLists?.map((el, index) => {
                  return (
                    <SingleToDo
                      key={index}
                      el={el}
                      todoLists={todoLists}
                      index={index}
                      setUpdateNumber={setUpdateNumber}
                    ></SingleToDo>
                  );
                })
              ) : (
                <div className="text-center">No Todos Yet....</div>
              )}
            </div>
          </div>
          <div
            className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full text-xl text-blue-300 flex items-center justify-center cursor-pointer shadow hover:bg-gray-50 hover:text-blue-400 transition-all"
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
            onSubmit={(e) => {
              e.preventDefault();
              addTodo(e);
            }}
            className="p-6 flex items-stretch flex-col"
          >
            <input
              className="shadow-sm text-black font-bold appearance-none border rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-600 transition ease-in-out focus:shadow-outline mb-3"
              id="username"
              type="text"
              placeholder="To Do"
              autoComplete="off"
              onChange={(e) => setTodoName(e.target.value)}
              required
            />
            <input
              className="shadow-sm text-black font-bold appearance-none border rounded-sm w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-600 transition ease-in-out focus:shadow-outline mb-3"
              id="time"
              type="text"
              placeholder="Time"
              autoComplete="off"
              onChange={(e) => setTime(e.target.value)}
              required
            />
            <div className="relative mb-3">
              <select
                className="form-select text-black font-bold appearance-none block w-full px-3 py-2 bg-white bg-clip-padding bg-no-repeat shadow-sm border rounded-sm transition ease-in-out m-0 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
                required
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
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <button
              className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-sm transition-all font-bold text-center"
              type="submit"
            >
              Add To Do
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
