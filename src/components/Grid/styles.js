import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`py-0 mx-auto my-0 `}/* margin: 0 auto;
  padding: 0 20px; */
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
