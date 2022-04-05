import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import useParams from "../useParams/useParam";

const Home = () => {
  const [reviwe] = useParams();
  return (
    <div>
      <div className="p-44 grid grid-cols-2 justify-center items-center">
        <div className="p-30">
          <h1 className="text-4xl text-orange-600">This is Heading Add Me</h1>
          <p>This is good awesome momin vai</p>
          <button className="py-3 px-2 bg-cyan-500 text-white border-2 rounded-lg hover:bg-red-600 duration-150">
            Momin Vai koy?
          </button>
        </div>
        <div>
          <img
            className="border-2 rounded-lg"
            src="https://media.istockphoto.com/photos/food-for-healthy-brain-picture-id1299079243?b=1&k=20&m=1299079243&s=170667a&w=0&h=vav4VYNuuV0Qc4fl2JhROewXaKGEYnhlXddiB4PCKm8="
            alt=""
          />
        </div>
      </div>
      <div className="p-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 grid-rows-1">
          {reviwe.slice(0, 3).map((pd) => (
            <Reviews pd={pd} key={pd.id}></Reviews>
          ))}
        </div>
        <Link className="mb-10" to="/reviwe">
          <button className="py-3 px-2 hover:bg-orange-500 duration-300 bg-cyan-500 text-white border-2 rounded-lg text-2xl">
            Reviwes All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
