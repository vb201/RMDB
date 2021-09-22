import styled from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.div`
  min-height: 60px;
  ${tw`flex flex-row items-center justify-between  w-full  px-10 bg-gray-800 sm:px-16 md:px-20`}

  @media (max-width: 576px) {
    /* height: 65px; */
  }
`;

export const LogoContainer = styled.div`
  ${tw``};
`;
