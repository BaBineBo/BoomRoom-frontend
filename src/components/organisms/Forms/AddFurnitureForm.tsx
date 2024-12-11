import { Formik } from "formik";
import { number, object, Schema, string } from "yup";
import { Furniture } from "../../../models/rooms";
import { FormikForm } from "../../molecules/Formik/FormikForm";
import { FormikInputField } from "../../molecules/Formik/FormikInputField";
import { SubmitButton } from "../../molecules/Formik/SubmitButton";

// ? ids should be generated and automatocally connected to room created in
// todo TRANSALTIONS/OWN TEST FOR ERROS
const addFurnitureFormSchema: Schema<Omit<Furniture, "id" | "roomId">> = object(
  {
    name: string().required(),
    price: number().required(),
    currency: string().required(),
    productLink: string().url(),
    // Surely there is a way to see if a website has images that could be used? hmmm
    imageLink: string().url(),
  }
);

const mockInitial: Furniture = {
  name: "",
  price: 432,
  currency: "SEK",
  productLink: "",
  // Surely there is a way to see if a website has images that could be used? hmmm
  imageLink: "",
  roomId: "aaaa",
  id: "string",
};

interface AddFurnitureFormProps {
  onSubmit?: () => void;
}

// TODO fix bug, must press submit twice for onsubmit to exe
export const AddFurnitureForm = ({ onSubmit }: AddFurnitureFormProps) => {
  return (
    <Formik
      initialValues={mockInitial}
      validationSchema={addFurnitureFormSchema}
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
          <FormikInputField name={"price"} label="pris" />
          <FormikInputField name={"currency"} label="valuta" />
          <FormikInputField name={"productLink"} label="produkt-länk" />
          <FormikInputField name={"imageLink"} label="bild-länk" />

          <SubmitButton disabled={isSubmitting} />
        </FormikForm>
      )}
    </Formik>
  );
};
