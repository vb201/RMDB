import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  height: 100px;
  min-width: 350px;
  ${tw`flex items-center pr-5 bg-gray-800`}
  /* background: var(--darkGrey); */

  @media (max-width: 768px) {
    height: 80px;
  }

  @media (max-width: 576px) {
    height: 65px;
  }
`;

export const Content = styled.div`
  height: 55px;
  ${tw`
    relative
    w-full
    // min-w-min
    bg-gray-500
    rounded-2xl
    mr-auto
    color[white]
    // placeholder-white::placeholder
  `}
  /* max-width: var(--maxWidth); */
  /* border-radius: 40px; */
  /* color: var(--white); */

  @media (max-width: 768px) {
    height: 50px;
  }

  @media (max-width: 576px) {
    height: 44px;
  }

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
    @media (max-width: 768px) {
      left: 14px;
      top: 13px;
      width: 24px;
    }
    @media (max-width: 576px) {
      left: 12px;
      top: 11px;
      width: 21px;
    }
  }

  input {
    font-size: var(--fontL);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    @media (max-width: 768px) {
      font-size: var(--fontM);

      height: 32px;
    }

    @media (max-width: 576px) {
      font-size: var(--fontS);
      height: 26px;
    }

    :focus {
      outline: none;
    }
  }
`;
