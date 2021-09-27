import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`bg-black`};
`;

export const Title = styled.div`
  ${tw`text-4xl font-bold text-white px-5 py-3 sm:px-16 md:px-20`};
`;

export const ContentWrapper = styled.div`
  ${tw``};
`;
export const Content = styled.div`
  ${tw`flex overflow-y-hidden p-3 md:p-4 lg:p-5`};
  /* @media (min-width: 640px) {
    padding-top: 2px;
  } */
`;
export const ContentImage = styled.img`
  &:hover {
    transform: scale(1.1);
  }
  ${tw` w-full
  object-contain p-1 max-h-64 transition-transform duration-500`};
`;
