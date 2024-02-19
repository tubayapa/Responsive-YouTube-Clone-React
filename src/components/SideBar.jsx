import { useContext } from "react";
import { categories } from "../constants/index";
import { VideoContext } from "../context/videoContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);

  return (
    <div className="flex gap-2 flex-col p-1 md:p-5">
      {categories.map((item) => (
        <div key={item.name} onClick={() => setSelectedCategory(item)}>
          <div
            className={`${
              selectedCategory.name === item.name && "bg-[#2b2a2a]"
            } flex items-center gap-2 py-[0.3rem]  px-2 md:px-3 text-base  md:text-md cursor-pointer rounded-md hover:bg-[#2d2d2d] text-nowrap`}
          >
            <span className="max-sm:text-lg">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>
          {/* if divider is true show line */}

          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
