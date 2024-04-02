import React from "react";
import { MaskContainer } from "../components/MaskContainer"; 

function MyComponent() {
  const textColor = "red";

  return (
    // <div
    //   className="bg-cover bg-center"
    //   style={{ backgroundImage: `url('../public/grimore.jpg')` }}
    // >
      <MaskContainer
        children={
          <>
            Welcome To{" "}
            <span style={{ color: textColor }}>5 Leaf</span>
            {" "}Grimoire Project
          </>
        }
        revealText="The Grimoire Project"
      />
    // </div>
  );
}

export default MyComponent;


