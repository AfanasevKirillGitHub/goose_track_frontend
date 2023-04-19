import styled from 'styled-components';

export const HeartWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Heart = styled.span`
  display: inline-block;
  animation: myAnim 1s ease 0.5s infinite normal forwards;
  font-size: 50px;

  @keyframes myAnim {
    0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.5);
    }
  }
`;

export const HeartTwo = styled.span`
  display: inline-block;
  animation: myAnim 1s ease 0s infinite normal forwards;
  font-size: 50px;

  @keyframes myAnim {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;
