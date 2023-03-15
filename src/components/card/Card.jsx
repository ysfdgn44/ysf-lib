import React from "react";
import { CardButton, CardContainer, CardHeader, CardImg } from "./Card.style";
import book from "../../assets/book.jpg";
import { useNavigate } from "react-router-dom";
const Card = ({ item }) => {
  const navigate = useNavigate();
  console.log(item);
  return (
    <CardContainer>
      <CardHeader>{item.volumeInfo.title}</CardHeader>
      <CardImg src={item?.volumeInfo?.imageLinks?.smallThumbnail || book} />
      <CardButton
        onClick={() =>
          navigate(item.id ? `/detail/${item.id}` : "/", { state: item })
        }
      >
        viev more
      </CardButton>
    </CardContainer>
  );
};

export default Card;
