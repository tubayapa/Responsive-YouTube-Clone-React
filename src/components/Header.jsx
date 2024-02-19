import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { IoVideocam } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();

  //arama yapilinca
  const handleSubmit = (e) => {
    e.preventDefault();

    // aranan kelime
    const text = e.target[0].value;

    navigate(`/results?search_query=${text}`);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" alt="youtube-logo" />

        <h1 className="hidden md:block text-xl ">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          className="px-3 py-1 text-white bg-black outline-none"
          type="search"
        />
        <button className="border-l px-2 text-xl">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <IoVideocam className="hover:text-gray-400 transition duration-[400ms]" />
        <BsBell className="hover:text-gray-400 transition duration-[400ms]" />
      </div>
    </div>
  );
};

export default Header;
