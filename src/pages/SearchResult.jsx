import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";

const SearchResult = () => {
  const [results, setResults] = useState(null);
  // url'den aratilan terimi al

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  // api'dan aratilana uygun videolari al
  // her yeni terim aratildiginda useeffectin tekrar calismaisni istiyoruz
  // bu yuzen bagimlilik dizesini arama parametresi verdik

  useEffect(() => {
    getData(`/search?query=${query}&type=video`).then((res) => {
      setResults(res);
    });
  }, [query]);

  return (
    <div className="flex ">
      <SideBar />
      <div className="flex items-center flex-1 px-4 gap-10 h-screen overflow-auto">
        <div className="flex gap-10 flex-col max-w-[1000px]">
          <p className="flex  text-lg">
            <span>Results for</span>
            <span className="font-bold">{query}</span>
          </p>
          {!results ? (
            <Loader />
          ) : (
            results.data.map(
              (item) =>
                item.type === "video" && <VideoCard video={item} isRow={true} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
