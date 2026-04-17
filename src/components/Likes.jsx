import React, { useState } from "react"

const Likes = () => {
  //   const [like, setLike] = useState(0)

  // return (
  //   <div 
  //   style={{
  //       maxWidth: 500,
  //       margin: "auto",
  //   }}
  //   >
  //       <h1>{like}</h1>
  //       <button onClick={() => setLike(like + 1)}>like👍</button>
  //       <button onClick={() => setLike(like - 1)}>Dislike👎</button>
  //       <button onClick={() => setLike(0)}>Reset</button>
  //   </div>
  // )

  // state that holds a boolean value
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Hide Text" : "Show Text"}
      </button>

      {showText && <p>This text is now visible</p>}
    </div>
  );
}


export default Likes