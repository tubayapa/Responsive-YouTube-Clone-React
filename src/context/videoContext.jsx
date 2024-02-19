import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [videos, setVideos] = useState(null);

  // get category from API based on selected

  useEffect(() => {
    // menu secildiye fonk durdur
    if (selectedCategory.type === "menu") return;

    // onceki kategorinin verileirni temizle
    setVideos(null);

    if (selectedCategory.type === "home") {
      getData("/home").then((res) => setVideos(res.data));
    }
    if (selectedCategory.type === "trending") {
      getData("/trending").then((res) => setVideos(res.data));
    }
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((res) =>
        setVideos(res.data)
      );
    }
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </VideoContext.Provider>
  );
};
