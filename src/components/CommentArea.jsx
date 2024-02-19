import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import Loader from "./Loader";

const CommentsArea = () => {
  const [comments, setComments] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("v");

  useEffect(() => {
    getData(`/comments?id=${id}&sort_by=newest`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(comments);

  return (
    <div className="detail-comment">
      <div>
        {!comments ? (
          <Loader />
        ) : (
          comments.map((comment, index) => (
            <div className="flex my-8 items-center" key={index}>
              <img
                className="flex rounded-full me-4 "
                src={comment.authorThumbnail[0].url}
              />
              <div className="">
                <strong className="me-3">{comment.authorText}</strong>
                <small>{comment.publishedTimeText}</small>
                <p>{comment.textDisplay}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentsArea;
