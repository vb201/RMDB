import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`bg-black`};
`;

export const Title = styled.div`
  ${tw`px-5 py-3 text-4xl font-bold text-white sm:px-16 md:px-20`};
`;

export const ContentWrapper = styled.div`
  ${tw`overflow-hidden`};
`;
export const Content = styled.div`
  ${tw`flex p-3 overflow-x-scroll md:p-4 lg:p-5`};
`;

export const ContentItem = styled.div`
  ${tw`px-2 min-w-max`};
`;
export const ContentImage = styled.img`
  ${tw`object-contain w-full p-2 transition-transform duration-500 max-h-80 rounded-2xl`};
  /* height: 20rem;
  width: 13.34rem; */
  &:hover {
    transform: scale(1.1);
  }
`;
