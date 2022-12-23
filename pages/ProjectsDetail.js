import { useRouter } from "next/router";
import React from "react";

const ProjectsDetail = () => {
  const router = useRouter();
  const details = router.query;
  const { img, name, tech, source, live, time } = details;

  return (
    <div className="flex justify-between px-5">
      <div className="">
        <h1 className="text-3xl font-bold text-primary"> {name}</h1>
        <p className="flex gap-2">
          <a
            href={live}
            className="btn btn-xs btn-outline my-3"
            target="_blank"
          >
            Live Site{" "}
          </a>
          <a
            href={source}
            target="_blank"
            className="btn btn-xs btn-outline  bg-slate-600 text-lime-50 my-3"
          >
            {" "}
            Source{" "}
          </a>
        </p>
      </div>
      <figure>
        <img src={img} className="h-[20rem] " alt="" />
      </figure>
    </div>
  );
};

export default ProjectsDetail;
