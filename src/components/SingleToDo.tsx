import Swal from "sweetalert2";

const SingleToDO = ({
  el,
  todoLists,
  index,
  setUpdateNumber,
}: {
  el: any;
  todoLists: any;
  index: any;
  setUpdateNumber: any;
}) => {
  return (
    <>
      <div className="border-b border-blue-200 py-2 flex space-x-3 items-center">
        <div className="w-14">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">
            <i
              className={`${
                el.category === "Life"
                  ? "fas fa-hand-holding-water"
                  : el.category === "Personal"
                  ? "far fa-id-badge"
                  : el.category === "Education"
                  ? "fas fa-graduation-cap"
                  : "fas fa-briefcase"
              } text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-600`}
            ></i>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-black font-semibold truncate">{el.name}</h1>
            <p className="text-gray-700 truncate">{el.description}</p>
          </div>
          <div className="text-right">
            <h1>{el.time}</h1>
            <div className="text-lg">
              <i
                className="fas fa-eye text-indigo-400 mr-2 hover:text-indigo-500 transition-all cursor-pointer"
                onClick={() => {
                  Swal.fire({
                    title: el.name,
                    html: `<h1 class="text-left font-bold">
                            To Do:
                            <span class="font-normal">${el.name} </span>
                          </h1>
                          <h1 class="text-left font-bold">
                            Time:
                            <span class="font-normal">${el.time} </span>
                          </h1>
                          <h1 class="text-left font-bold">
                            Category:
                            <span class="font-normal">${el.category} </span>
                          </h1>
                          <h1 class="text-left font-bold">
                            Description:
                            <span class="font-normal">
                              ${el.description}
                            </span>
                          </h1>`,
                    focusConfirm: false,
                  });
                }}
              ></i>
              {el.status !== "Completed" && (
                <i
                  className="fas fa-clipboard-check text-green-400 hover:text-green-500 transition-all cursor-pointer mr-2"
                  onClick={() => {
                    todoLists[index].status = "Completed";
                    localStorage.setItem("todos", JSON.stringify(todoLists));
                    setUpdateNumber(Math.random() * 9834);
                  }}
                ></i>
              )}
              <i
                className="fas fa-trash text-red-400 hover:text-red-500 transition-all cursor-pointer"
                onClick={() => {
                  localStorage.setItem(
                    "todos",
                    JSON.stringify(
                      todoLists.filter(
                        (el2: number, index2: number) => index2 !== index
                      )
                    )
                  );
                  setUpdateNumber(Math.random() * 9834);
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleToDO;
