import styled from "@emotion/styled";
import { Form } from "formik";

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.s};
`;
