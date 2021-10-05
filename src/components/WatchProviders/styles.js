import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`items-center w-full bg-black `};
`;
export const Title = styled.div`
  ${tw`px-5 py-4 text-4xl font-bold text-white sm:px-16 md:px-20`};
`;

export const ButtonContainer = styled.div`
  ${tw`m-1 `};
`;
export const Button = styled.button`
  ${tw`my-3 py-1 cursor-pointer  outline-none border-0 font-bold border-radius[0.2vh] px-4 
  hover:text-black hover:bg-white hover:transition-all`};

  /* display: ${({ active }) => (active ? `none` : "flex")}; */

  color: ${({ active }) => (active ? `rgb(0, 0, 0)` : `rgb(255, 255, 255)`)};
  background: ${({ active }) =>
    active ? `rgb(255, 255, 255)` : `rgb(0, 0, 0)`};
`;

export const Content = styled.div`
  ${tw`flex p-3 overflow-y-hidden md:p-4 lg:p-5`};
  /* @media (min-width: 640px) {
    padding-top: 2px;
  } */
`;
