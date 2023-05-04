import { Wrapper, Title } from "./Section.styled";

export const Section = ({ title, children }) => (
  <Wrapper>
        <Title>{title}</Title>
        { children}
  </Wrapper>
);