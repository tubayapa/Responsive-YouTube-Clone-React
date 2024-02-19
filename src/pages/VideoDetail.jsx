import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import ReactPlayer from "react-player";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../components/StringArea";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";
import CommentsArea from "../components/CommentArea";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);

  // 1- arama parametresine erisim icin kurulum
  const [SearchParams] = useSearchParams();

  // 2-) url'den v (video) isimli arama parametresini al

  const id = SearchParams.get("v");

  // 3-) id'si bilinen videonun bilgilerini api'den al

  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => {
      setVideo(data);

      // console.log(data);
    });
  }, [SearchParams]);

  return (
    <div className="detail-page h-screen overflow-auto flex gap-12 p-3 ml-10">
      {/* video content */}
      <div>
        <ReactPlayer
          className={"rounded"}
          width={"100%"}
          height={"70vh"}
          controls
          playing
          light
          url={`https://www.youtube.com/watch?v=${id}`}
        />

        {!video ? (
          <p>downloading...</p>
        ) : (
          <>
            {/* title info */}
            <h1 className="my-3 text-xl font-bold">{video.title} </h1>

            {/* channel info */}
            <div className="flex justify-between">
              {/* sol */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                />

                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white text-black rounded-full ml-5 px-3 h-9 transition hover:bg-gray-400">
                  Subscribe
                </button>
              </div>

              {/* sag */}
              <div className="flex items-center bg-[#272727] rounded-full cursor-pointer">
                <div className="flex items-center gap-4 px-4 border-r">
                  <AiFillLike />
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
            </div>

            {/* video info */}
            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} view</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>
            <div>{<CommentsArea />}</div>
          </>
        )}
      </div>
      {/* related videos */}
      <div className="flex flex-col gap-5 me-10 md:p-6 p-1 max-md:mt-2">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard video={item} isRow={true} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
