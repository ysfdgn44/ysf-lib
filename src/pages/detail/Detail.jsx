import React from "react";
import { useLocation, useParams } from "react-router-dom";
import book from "../../assets/book.jpg";
import {
  DetailContainer,
  DetailTitle,
  DetailImg,
  Description,
  InfoPart,
} from "./Detail.style.jsx";
const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  console.log(state, id);
  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg>
        <img
          src={state.volumeInfo.imageLinks?.smallThumbnail || book}
          alt={state.volumeInfo.title}
        />
      </DetailImg>
      <Description> {state.volumeInfo.description} </Description>
      <InfoPart>
        <p>
          {state.volumeInfo.authors?.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </p>
        <p>
          {state.volumeInfo?.publishedDate}
          {"  "}
          {state.volumeInfo.publisher && (
            <span>/ {state.volumeInfo.publisher}</span>
          )}
        </p>
      </InfoPart>
    </DetailContainer>
  );
};

export default Detail;
