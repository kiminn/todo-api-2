/* 
모든 페이지에서 
자주 재사용되는 컴포넌트 (select, button, input) => 공용 컴포넌트(src/components)
디자이너와 협업 -> 컴포넌트 공유 -> UI 인벤토리 -> storybook

디자이너가 이미 만들어진 컴포넌트를 기반으로 디자인하여
컴포넌트의 재사용성을 극대화하는 개발 방식을 CDD(컴포넌트 주도 개발)

아토믹 디자인 방식에서는 필수로 사용되는 개발 방법론
*/

import { css, styled } from "styled-components";

const SYButton = ({ variant, size, shape, children, ...rest }) => {
  // console.log(props)
  // 객체
  // 나머지 매개변수 이용해서 …rest로 정의
  console.log(variant, size, shape, children);
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
  );
};
export default SYButton;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary[300]};
    color: ${({ theme }) => theme.COLORS.font};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.secondary};
  `,
};

const sizeCSS = {
  small: css`
    width: 100px;
    height: 30px;
    padding: 10px 0;
  `,
  medium: css`
    width: 80px;
    height: 50px;
    padding: 10px 0;
  `,
  large: css`
    width: 100px;
    height: 30px;
    padding: 10px 0;
  `,
  full: css`
    width: 100%;
    aspect-ratio: 8 / 1;
  `,
};

const shapeCSS = {
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]} // primary
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: gray;
    color: white;
  }
`;
