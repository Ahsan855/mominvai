import React from "react";

const NotFound = () => {
  return (
    <section className="px-4 py-48 mx-auto max-w-7xl bg-slate-100">
      <div className="grid items-center grid-cols-2 gap-2 mx-auto bg-white p-10 rounded-lg">
        <div>
          <h1 className="text-4xl text-red-500">
            This page in Not AvailAble for this website
          </h1>
          <p className="text-2xl">Please Try your right websites</p>
        </div>
         <div className="border-2 rounded-xl">
             <img src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" />
         </div>
      </div>
    </section>
  );
};

export default NotFound;
