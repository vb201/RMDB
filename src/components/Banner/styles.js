import styled, { css } from "styled-components";
import tw from "twin.macro";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../API/config";

export const Wapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop
      ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)), url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
      : "#000"};
  ${tw`w-full bg-center bg-cover`};

  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  height: 384px;
  @media (min-width: 768px) {
    height: 435px;
  }
  @media (min-width: 1024px) {
    height: 493px;
  }
`;

export const Contents = styled.div`
  ${tw`flex flex-col items-start mx-5 text-white sm:pt-24 sm:pl-6 md:pt-32 md:pl-8 lg:pt-52 `};
  @media (max-width: 640px) {
    padding-top: 72px;
  }
`;

export const Heading = styled.h1`
  ${tw`pb-1 text-3xl font-bold sm:text-4xl md:text-5xl`};
`;


export const Text = styled.div`
  width: 90%;
  max-width: 560px;
  ${tw`font-serif text-xl font-medium sm:text-2xl `};
`;

export const DotsWrapper = styled.div`
  left: 50%;
  transform: translateX(-50%);
  ${tw`
  flex position[absolute] 
    `};
  padding-top: 268px;
  /* @media (min-width: 640px) {
    padding-top: 2px;
  } */
  @media (min-width: 768px) {
    padding-top: 258px;
  }
  @media (min-width: 1024px) {
    padding-top: 240px;
  }
`;
export const Dots = styled.div`
  ${tw`w-5 h-5 border-radius[50%] mx-1 my-1 bg-white`};

  @media (max-width: 400px) {
    ${tw`w-4 h-4 my-1`}
  }

  ${(props) =>
    props.active &&
    css`
      ${tw`bg-medGrey`}
    `}/* background: ${({ active }) => (active ? `rgb(107, 107, 107)` : "")}; */
`;
