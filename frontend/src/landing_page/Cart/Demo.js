import React from "react";
import { useParams } from "react-router-dom";

function Demo(){
  const {id} = useParams();
  console.log(id);
  return(
    <>
    <h1> hiiiiii.....{id}  </h1>
    </>
  )
}

export default Demo