import styled from "styled-components";
import tw from "twin.macro";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../API-V2/config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};

  ${tw`w-full px-5 py-10 bg-center bg-cover`}

  animation: animateMovieInfo 1s;
  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  ${tw`block m-0 rounded-2xl md:flex`}

  background: rgba(0, 0, 0, 0.7);
`;

export const Text = styled.div`
  ${tw`w-full mx-5 my-10 overflow-hidden text-white `}
`;
