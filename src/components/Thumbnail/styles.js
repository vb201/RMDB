import styled from "styled-components";
import { css } from "styled-components";
import tw from "twin.macro";
import { POSTER_SIZE } from "../../API/config";

export const Image = styled.img`
  ${tw`object-contain w-full transition duration-300 rounded-2xl`};
  max-width: ${POSTER_SIZE};
  max-height: ${({ small }) => (small ? `350px` : "")};

  ${(props) =>
    props.small &&
    css`
      &:hover {
        transform: scale(1.1);
      }
    `}

  ${(props) =>
    props.onHoverOpacity &&
    css`
      &:hover {
        opacity: 0.8;
      }
    `} /* &:hover {
    transform: scale(1.1);
  } */
`;
