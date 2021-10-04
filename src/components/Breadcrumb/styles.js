import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex items-center justify-center w-full bg-darkGrey`}
  height: 70px;
`;

export const Content = styled.div`
  ${tw`flex w-full pl-5 `}
  span {
    ${tw`pr-3 text-lg text-white md:text-base`}
  }
`;
