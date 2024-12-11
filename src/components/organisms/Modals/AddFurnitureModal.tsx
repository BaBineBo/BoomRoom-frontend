import { useTheme } from "../../../hooks/useTheme";
import { Modal, ModalProps } from "../../molecules/Modal";
import { AddFurnitureForm } from "../Forms/AddFurnitureForm";

type AddFurnitureModalProps = Omit<ModalProps, "children">;

export const AddFurnitureModal = ({ ...props }: AddFurnitureModalProps) => {
  const { theme } = useTheme();
  return (
    <Modal
      {...props}
      header="Lägg till möbel"
      // matches furnitureCard
      backgroundColor={theme.palette.accent}
    >
      <AddFurnitureForm onSubmit={props.onClose} />
    </Modal>
  );
};
