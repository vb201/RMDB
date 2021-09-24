import styled from "styled-components";
import tw from "twin.macro";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../API/config";

export const Wapper = styled.div`
  ${tw`w-full bg-cover // opacity-20 justify-items-end`};
  background: ${({ backdrop }) =>
    backdrop
      ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
      : "#000"};
  background-position: center;

  /* padding: 40px 20px; */

  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  height: 30rem;
  @media (min-width: 768px) {
    height: 35rem;
  }
  @media (min-width: 1024px) {
    height: 40rem;
  }
`;

export const Contents = styled.div`
  ${tw`
  flex
  flex-col
  align-items[flex-start]
  color[whitesmoke]
  mx-5

  sm:pt-24 sm:pl-6
  md:pt-32 md:pl-8
  lg:pt-52
  `};
  @media (max-width: 640px) {
    padding-top: 5rem;
  }
`;

export const Heading = styled.h1`
  ${tw`pb-1 text-3xl font-bold sm:text-4xl md:text-5xl`};
`;

export const Button = styled.button`
  ${tw`my-5 py-2 cursor-pointer color[azure] outline-none border-0 font-bold border-radius[0.2vh] px-8 background-clip[rgba(51,51,51,0.5)]
  hover:color[black] hover:background-color[aliceblue] hover:transition-all`};
`;
export const Text = styled.div`
  width: 90%;
  max-width: 45rem;
  ${tw`font-serif text-xl font-medium sm:text-2xl `};
`;

export const DotsWrapper = styled.div`
  left: 50%;
  transform: translateX(-50%);
  ${tw`
  flex position[absolute] 
    `};
  padding-top: 330px;
  @media (min-width: 768px) {
    padding-top: 340px;
  }
  @media (min-width: 1024px) {
    padding-top: 340px;
  }
`;
export const Dots = styled.div`
  ${tw`
    w-5 h-5 border-radius[50%] mx-1 my-1 background-color[#f1f1f1]
  `};
  /* &.${(props) => props.active} {
    background: rgb(32, 32, 32);
  } */

  background: ${({ active }) => (active ? `rgb(107, 107, 107)` : "")};
`;
