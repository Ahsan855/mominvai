import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-cyan-500 text-white py-3 px-2 text-2xl">
      <CustomLink className="ml-4" to="/">
        Home
      </CustomLink>
      <CustomLink className="ml-4" to="/reviwe">
        Reviwe
      </CustomLink>
      <CustomLink className="ml-4" to="/dashBord">
        DashBord
      </CustomLink>
      <CustomLink className="ml-4" to="/blog">
        Blog
      </CustomLink>
    </div>
  );
};

export default Header;
