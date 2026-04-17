import React, { useEffect } from "react";

const Contact = () => {
  const [like,setLike]=React.useState(0);
  const [dislike,setDislike]=React.useState(0);

  const fetchData = () => {
    console.log("Data is being fetched");
  }

  useEffect(() => {
    fetchData();
  }, [like,dislike])
  return(
<div className="bg-linear-to-br text-white pt-10 from-black to-green-900 min-h-screen">
     <button 
      className="mr-10 bg-blue-500 p-2 rounded-md"
     onClick={() => setLike((prevState) => prevState + 1)}>
      Like
      </button>
      <button 
      className="bg-blue-500 p-2 rounded-md"
      onClick={() => setDislike((prevState) => prevState + 1)}>
        Dislike
        </button>
                 <button
                 className= "bg-blue-500 p-2 rounded-md"
                  onClick={() => {
                  setLike(0);
                  setDislike(0);
                }}>
                   Reset
                </button>
        <p className="mt-10 text-2xl font-bold">
          like: {like} dislike:{dislike}
        </p>
      </div>
  ) ;
  
};

export default Contact;