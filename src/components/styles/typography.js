import styled, { css } from "styled-components";
import { BaseText } from "./components/BaseText";

export const StyledText = styled(BaseText)`
  color: ${({ color }) => color};

  ${({ font }) => {
    switch (font) {
      case "heading1":
        return css`
          font-weight: 700;
          font-size: 1.625rem;
        `;
      case "heading2":
        return css`
          font-weight: 700;
          font-size: 1.375rem;
        `;
      case "heading3":
        return css`
          font-weight: 700;
          font-size: 1.125rem;
        `;
      case "heading4":
        return css`
          font-weight: 700;
          font-size: 0.875rem;
        `;
      case "headline":
        return css`
          font-weight: 400;
          font-size: 1rem;
        `;
      case "body":
        return css`
          font-weight: 400;
          font-size: 0.875rem;
        `;
      case "body-600":
        return css`
          font-weight: 600;
          font-size: 0.875rem;
        `;
      case "caption":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
        `;
      default:
        console.log("");
    }
  }};
`;
