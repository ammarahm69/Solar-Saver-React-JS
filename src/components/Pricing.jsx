import "../App.css";
import Home from "../assets/home.svg";
function Pricing() {
  return (
    <div className="navbar text-white flex flex-col items-center">
      {/*  Heading   */}
      <div className="mt-5">
        <h1 className="text-3xl tracking-wider">TRANSPARENT PRICING</h1>
      </div>
      {/* Cards div */}
      <div className="flex pt-10 gap-5">
        <div className="w-96 h-80 flex flex-col bg-black rounded-lg p-4">
          <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center flex-col justify-center">
            <img src={Home} alt="" />
          </div>
          <div className="text-3xl p-2 tracking-widest">
            {" "}
            <span className="text-orange-400 font-bold">STANDARD</span> PLAN
          </div>
          <div className="text-1xl mt-3 p-4">
            Efficient and affordable solar solutions for every Household.
            Perfect for Residential use.
          </div>
          <p className="font-bold mt-2 p-4">$1.50 / watt</p>
        </div>
        <div className="w-96 h-80 flex flex-col bg-black rounded-lg p-4">
          <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center flex-col justify-center">
            <img src={Home} alt="" />
          </div>
          <div className="text-3xl p-2 tracking-widest">
            {" "}
            <span className="text-orange-400 font-bold">Premium</span> PLAN
          </div>
          <div className="text-1xl mt-3 p-4">
            Efficient and affordable solar solutions for every Household.
            Perfect for Residential use.
          </div>
          <p className="font-bold mt-2 p-4">$1.50 / watt</p>
        </div>
        <div className="w-96 h-80 flex flex-col bg-black rounded-lg p-4">
          <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center flex-col justify-center">
            <img src={Home} alt="" />
          </div>
          <div className="text-3xl p-2 tracking-widest">
            {" "}
            <span className="text-orange-400 font-bold">Commercial</span> PLAN
          </div>
          <div className="text-1xl mt-3 p-4">
            Efficient and affordable solar solutions for every Household.
            Perfect for Residential use.
          </div>
          <p className="font-bold mt-2 p-4">$1.50 / watt</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
