import "../App.css";
import Solar from "../assets/main.webp"
function Home() {
  return (
    <div className="w-full navbar text-white flex flex-col items-center relative">
      {/* Hero div */}
      <div className="mt-32 ">
        <h1 className="text-7xl font-semibold uppercase ms-10">
          {" "}
          <span className="text-orange-500">Does Your Home </span>Need Quality{" "}
          <br /> Solar Panel Installation?
        </h1>
        <p className="text-center mt-10 text-1xl tracking-wide">
          Trust our experienced solar power experts to customize the perfect
          solution for your home.
        </p>
        {/* Button */}
        <div className="flex flex-col items-center mt-10">
          <button className="button  text-white py-2 px-4 rounded-md">
            Calculate Solar
          </button>
        </div>
        {/* Image Main Solar */}
        <div className="flex flex-col items-center">
            <img src={Solar} alt="" width={1150}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
