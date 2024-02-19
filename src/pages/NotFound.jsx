import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid place-items-center m-auto mt-10 w-80">
      <img src="/public/404.gif" alt="" />
      <p className="text-center my-4 text-nowrap">
        Sorry, the video you are looking for could not be found.
      </p>
      <div className="flex justify-center ">
        <Link
          className=" font-bold text-[red] p-2 text-decoration-none "
          to={"/"}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
