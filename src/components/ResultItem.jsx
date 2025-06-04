import items from "../assets/data.json";

export function ResultItem() {
  return (
    <>
      {items.map((el, index) => {
        return (
          <div key={index} className="flex justify-between items-center mx-9">
            <p className="font-Han font-bold text-xl">{el.category}</p>
            <p className="font-Han font-bold text-xl">
              {el.score}{" "}
              <span className="font-Han font-bold text-xl text-gray-400">
                {"  "}
                /100
              </span>
            </p>
          </div>
        );
      })}
    </>
  );
}
