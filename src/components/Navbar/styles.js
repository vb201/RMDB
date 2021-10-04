import styled from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.div`
  /* max-height: 100px; */
  height: 100px;
  ${tw`flex flex-row items-center justify-between  w-full  px-5 bg-black sm:px-16 md:px-20`}

  @media (max-width: 400px) {
    height: 75px;
  }

  @media (min-width: 576px) {
    height: 80px;
  }
  @media (min-width: 768px) {
    height: 90px;
  }
  @media (min-width: 1280px) {
    height: 90px;
  }
`;

export const LogoContainer = styled.div`
  ${tw``};
`;
