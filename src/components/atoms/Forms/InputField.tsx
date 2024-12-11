import styled from "@emotion/styled";

export const InputField = styled.input<{ isError?: boolean }>`
  border-color: ${({ isError, theme }) =>
    isError ? theme.palette.red : theme.palette.text};
  // You can add more styles like border width, etc.
  border-width: 2px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border-style: solid;
`;
