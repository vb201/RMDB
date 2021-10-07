import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const Modal = styled.div`
  ${tw`z-10 top-1/2 left-1/2`};

  /* max-width: 90%; */
`;

export const Overlay = styled.div`
  ${tw`fixed top-0 bottom-0 z-10 flex items-center justify-center w-full h-full`}
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  ${tw`max-w-3xl`};
`;

export const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;
