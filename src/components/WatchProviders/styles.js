import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`items-center w-full bg-black `};
`;
export const Title = styled.div`
  ${tw`px-5 py-4 text-4xl font-bold text-white sm:px-16 md:px-20`};
`;

export const ButtonContainer = styled.div`
${tw`flex flex-row space-x-4 m-1 overflow-x-auto overflow-y-hidden w-full`}
`;
export const Button = styled.button`
  min-width: max-content;
  ${tw`my-3 py-1 cursor-pointer  outline-none border-0 font-bold border-radius[0.2vh] px-4 
  hover:text-black hover:bg-white hover:transition-all`};

  /* display: ${({ active }) => (active ? `none` : "flex")}; */

  color: ${({ active }) => (active ? `rgb(0, 0, 0)` : `rgb(255, 255, 255)`)};
  background: ${({ active }) =>
    active ? `rgb(255, 255, 255)` : `rgb(0, 0, 0)`};
`;

export const ContentWrapper = styled.div`
  min-height: 350px;
  min-width: 200px;
  ${tw`flex p-3 overflow-x-scroll md:p-4 lg:p-5`};
`;

export const Content = styled.div`
  ${tw`flex p-3 overflow-y-hidden md:p-4 lg:p-5`};
  /* @media (min-width: 640px) {
    padding-top: 2px;
  } */
`;
