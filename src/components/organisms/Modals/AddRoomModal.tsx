import { useTheme } from "../../../hooks/useTheme";
import { Modal, ModalProps } from "../../molecules/Modal";
import { AddRoomForm } from "../Forms/AddRoomForm";

type AddRoomModalProps = Omit<ModalProps, "children">;

export const AddRoomModal = ({ ...props }: AddRoomModalProps) => {
  const { theme } = useTheme();
  return (
    <Modal
      {...props}
      header="Lägg till Rum"
      // matches RoomCard
      backgroundColor={theme.palette.secondary}
    >
      <AddRoomForm onSubmit={props.onClose} />
    </Modal>
  );
};
