import React from "react";

const projects = () => {
  return (
    <div>
      <h1 className="text-3xl mt-[100px]"> My Project</h1>
    </div>
  );
};

export default projects;

export const getStaticProps = async () => {
  const res = await fetch(`https://sarwar-hossain-server.vercel.app/projects`);
  const data = res.json();
console.log(data);
  return {
    props: {
      project: data
    },
  };
};
