import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { Text } from "../atoms/Text";

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  header?: string;
  backgroundColor?: string;
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: "block";
  z-index: 999;
`;

const ModalContent = styled(motion.div)<{ backgroundColor?: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.palette.accent};
  padding: ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.borderRadius.l};
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

// TODO this design does not work on phones
export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  backgroundColor,
  onClose,
  header,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <ModalContent
            backgroundColor={backgroundColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{header}</Text>
              <CloseButton onClick={onClose}>&times;</CloseButton>
            </div>

            {children}
          </ModalContent>
        </>
      )}
    </AnimatePresence>
  );
};
