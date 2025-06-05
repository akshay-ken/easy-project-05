import items from "../assets/data.json";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";
import reaction from "../assets/images/icon-reaction.svg";
import memory from "../assets/images/icon-memory.svg";

const iconMap = {
  verbal: verbal,
  visual: visual,
  reaction: reaction,
  memory: memory,
};

export function ResultItem() {
  return (
    <>
      {items.map((el) => {
        return (
          <div
            key={el.icon}
            className={`flex justify-between items-center mx-9 ${el.color} rounded-xl max-w-full h-16 p-4 mb-4`}
          >
            <div className="flex items-center gap-x-4 text-xl stroke-3">
              <img src={iconMap[el.icon]} alt="" className="w-8 h-8" />
              <p className={`font-Han font-bold ${el.textColor}`}>
                {el.category}
              </p>
            </div>
            <p className="font-Han font-bold text-xl">
              {el.score}{" "}
              <span className="font-Han font-bold text-xl text-gray-400 ">
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
