import "./App.css";
const App = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden flex items-center justify-center">
        <div className="max-w-md w-full bg-blue-50 shadow rounded-md overflow-hidden">
          <header
            className="h-56 grid grid-cols-5"
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
          <div className="p-6 h-80 overflow-y-auto">
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
      </div>
    </>
  );
};

export default App;
