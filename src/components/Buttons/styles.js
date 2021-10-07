import styled from "styled-components";
import tw from "twin.macro";

export const PrimaryButtonWrapper = styled.button`
  ${tw`my-3 py-1 cursor-pointer  outline-none border-0 font-bold border-radius[0.2vh] px-4 text-white bg-black
  hover:text-black hover:bg-white hover:transition-all`};
`;

export const LoadMoreButtonWrapper = styled.div`
  ${tw`block w-1/4 h-10 text-black bg-lightGrey rounded-3xl hover:text-white hover:bg-medGrey hover:transition-all`};
  min-width: 200px;
`;
