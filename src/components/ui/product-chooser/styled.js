import styled from "styled-components";

export const ChooserWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 353px;
  padding: 24px 20px;
  margin-bottom: 18px;
`;

export const Label = styled.label`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 284px;
    width: 24px;
    height: 24px;
    background: #f7f7f7;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 29px;
  }
`;

export const P = styled.p`
  text-align: center;
  width: 100%;
`;
