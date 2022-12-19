import React from "react";

function Test() {
  const blog = 1;
  return (
    <div>
      {blog === 1 ? 
      <img src={
            process.env.PUBLIC_URL +
            '/images/snowmanList/HealthHealth.png'
          }
          alt="snowman"
        /> : <h1>없음</h1>}
    </div>
  );
}

export default Test;