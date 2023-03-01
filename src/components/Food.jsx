import menuSections from '../Data/Data'
const Food = () => {
    return (
      <div className="">
        {menuSections.map((section) => (
          <div className="">
            <h2 className="text-white font-bold text-5xl pl-48 mb-8">{section.category}</h2>
            <ul className="mb-10">
            {section.meals.map((item) => (
            <div className="flex justify-center ">
            <div className="mb-4 rounded-lg bg-accent_orange w-4/5">  
            
            <div className="flex items-center justify-between  ">
            <div><li className="text-white font-semibold text-2xl p-3">{item.title}</li></div>
            <div><li className="text-white pr-3 font-semibold">{item.price} KM</li></div>
            </div>
            <li className="text-white pl-3 pb-3">{item.ingredients.join(", ")}</li>
            </div>
            </div>
            ))}          
            </ul>
          </div>
        ))}
      </div>
    );
  };
  export default Food