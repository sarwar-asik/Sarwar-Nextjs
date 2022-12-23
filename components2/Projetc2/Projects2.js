import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Projects2 = () => {


  
  const [projects2, setProjects] = useState([]);
  useEffect(() => {
    fetch(`https://sarwar-hossain-server.vercel.app/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  


  const projectsDetail =()=>{
    toast('updating....')

  }
  console.log(projects2);
  return (
    <div>
      <h1 className="text-3xl text-center  my-2 font-bold mt-[100px]">
        My Projects
      </h1>
      {projects2?.length ? (
        ""
      ) : (
        <h2 className="text-center text-2xl">Updating .....</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects2?.map((project) => {
          const { img, name, tech, source, live, time } = project;
          // console.log();
          return (
            <>
              <div
                className="card w-[90%]
              mx-auto bg-base-100 shadow-xl "
              >
                <figure>
                  <img src={img} className="h-[19rem]  w-[] projectimg" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {name}
                    <div className="badge badge-info">{time}</div>
                  </h2>
                 
                
                  <Link
                   href={{pathname:'/ProjectsDetail',query:project}}
                  className="py-3 bg-primary text-center text-slate-100 my-3">

                    Details
                  </Link >

                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      <a href={live} className='' target="_blank">
                        {" "}
                        Live Site
                      </a>
                    </div>
                    <div className="badge badge-outline bg-slate-600 text-lime-50">
                      <a href={source} target="_blank">
                        Source
                      </a>
                    </div>
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

export default Projects2;

export const getStaticProps = async () => {
  const res = await fetch(`https://sarwar-hossain-server.vercel.app/projects`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      projects2: data,
    },
  };
};
