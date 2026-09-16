import React from "react";
import HeadlineCard from "./HeadlineCard";

const images = [
  "ncn.webp",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

const HeadlineGrid = () => {
  return (
    <>
      {images.map((image, index) => (
        <HeadlineCard
          key={index}
          image={image}
        />
      ))}
    </>
  );
};

export default HeadlineGrid;