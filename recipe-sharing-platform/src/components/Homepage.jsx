import { useEffect, useState } from "react";

const Homepage = () => {
  const [Recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRecipe(data)
      })
      .catch((err) => console.error(err));
    }, []);

  return (
    <>
      <div className="flex flex-row justify-center">
        {Recipe.map((item) => (
          <div className = "basic-xl" key={item.id}>
           <h1 className="text-2xl font-bold">{item.title}</h1>
           <p>{item.summary}</p>
           <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
