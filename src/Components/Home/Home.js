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
          <h1 className="text-4xl text-orange-600">
            This is Gamming Chiar Website
          </h1>
          <p>
            GAMIFIED SEATING: A racecar-style gaming chair that provides luxury
            and comfort, whether it's used for intense gaming sessions and
            climbing to the top of the leaderboards, or long work days.
            ERGONOMIC COMFORT.
          </p>
          <button className="py-3 px-2 bg-cyan-500 text-white border-2 rounded-lg hover:bg-red-600 duration-150">
            Momin Vai koy?
          </button>
        </div>
        <div>
          <img
            className="border-2 rounded-lg"
            src="https://m.media-amazon.com/images/I/71y8rPagzDL._AC_UL320_.jpg"
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
