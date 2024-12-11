import { Formik } from "formik";
import { object, Schema, string } from "yup";
import { Room } from "../../../models/rooms";
import { FormikForm } from "../../molecules/Formik/FormikForm";
import { FormikInputField } from "../../molecules/Formik/FormikInputField";
import { SubmitButton } from "../../molecules/Formik/SubmitButton";

// ? ids should be generated and automatocally connected to room created in
// todo TRANSALTIONS/OWN TEST FOR ERROS
const addRoomFormSchema: Schema<Omit<Room, "id" | "furniture" | "order">> =
  object({
    wallcolor: string(),
    name: string().required(),
  });

const mockInitial: Omit<Room, "id" | "furniture" | "order"> = {
  wallColor: "",
  name: "",
};

interface AddRoomFormProps {
  onSubmit?: () => void;
}

// TODO fix bug, must press submit twice for onsubmit to exe
export const AddRoomForm = ({ onSubmit }: AddRoomFormProps) => {
  return (
    <Formik
      initialValues={mockInitial}
      validationSchema={addRoomFormSchema}
      onSubmit={async (a) => {
        console.log(a);
        window.alert(JSON.stringify(a));
        if (onSubmit) {
          onSubmit();
        }
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FormikInputField name={"name"} label="namn" />
          <FormikInputField name={"wallColor"} label="Färg" />

          <SubmitButton disabled={isSubmitting} />
        </FormikForm>
      )}
    </Formik>
  );
};
