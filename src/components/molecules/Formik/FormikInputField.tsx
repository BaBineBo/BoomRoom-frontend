import styled from "@emotion/styled";
import { useField } from "formik";
import { InputField } from "../../atoms/Forms/InputField";
import { Label } from "../../atoms/Forms/Label";
import { titleCaseWord } from "../../../utils/titleCaseWord";

interface FormikInputFieldProps {
  name: string;
  placeholder?: string;
  type?: string;
  label?: string;
}

const ErrorText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.palette.red};
`;

// TODO form width changes when error-text expands
export const FormikInputField = ({
  label,
  ...props
}: FormikInputFieldProps) => {
  const [field, meta] = useField(props);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {label && <Label htmlFor={props.name}>{titleCaseWord(label)}</Label>}
      <InputField
        {...field}
        {...props}
        id={props.name}
        name={props.name}
        isError={Boolean(meta.touched && meta.error)}
      />
      {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    </div>
  );
};
