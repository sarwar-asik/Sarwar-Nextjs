import React from "react";

const projects = ({ projects }) => {
  console.log(projects);

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-3xl text-center  my-2 font-bold mt-[100px]">
        {" "}
        My Project
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project) => {
          const { img, name } = project;
          return (
            <>
              <div
                className="card w-[90%]
              mx-auto bg-base-100 shadow-xl "
              >
                <figure>
                  <img src={img} className="h-[19rem] w-full" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {name}
                    <div className="badge badge-info">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default projects;

export const getStaticProps = async () => {
  const res = await fetch(`https://sarwar-hossain-server.vercel.app/projects`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      projects: data,
    },
  };
};
