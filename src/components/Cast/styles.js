import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`text-white bg-black`}
`;
export const CastWrapper = styled.div`
  ${tw``};
`;

export const Image = styled.img`
  height: 350px;
  ${tw`block object-cover w-full rounded-2xl`}
`;

export const Title = styled.div`
  ${tw`px-5 pt-10 text-4xl font-bold text-white sm:px-16 md:px-20`};
`;

export const ContentWrapper = styled.div`
  ${tw`flex p-3 overflow-x-scroll md:p-4 lg:p-5`};
`;

export const ContentItem = styled.div`
  ${tw` min-w-max text-center bg-darkGrey rounded-2xl m-2 duration-500`};
  &:hover {
    transform: scale(1.05);
  }
`;
