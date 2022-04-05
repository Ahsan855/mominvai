import React from "react";
import Reviews from "../Reviews/Reviews";
import useParams from "../useParams/useParam";

const Reviwe = () => {
  const [reviwe] = useParams();
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 sm:grid-rows-1 md:grid-rows-2 md:gap-4 m-8 border-4 rounded-xl mb-10 bg-gray-200">
      {reviwe.map((pd) => (
        <Reviews pd={pd} key={pd.id}></Reviews>
      ))}
    </div>
  );
};

export default Reviwe;
