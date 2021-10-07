import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`py-0 my-0 `}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
