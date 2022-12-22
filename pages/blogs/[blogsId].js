import { useRouter } from "next/router";
import React from "react";

const blogsId = () => {
  const router = useRouter();
  const id = router.query.blogsId;
  return (
    <div>
      <h1 className="text-3xl text-center">this is blogs dynamic page of blogs {id} </h1>
    </div>
  );
};

export default blogsId;
