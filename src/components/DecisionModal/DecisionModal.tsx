import { Button, Modal, Text } from '@nextui-org/react';
import { IDecisionModalProps } from './DecisionModal.types';

export const DecisionModal = (
  { state, onClose, onConfirm, onReject }: IDecisionModalProps) => {
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={state.visible}
      onClose={onClose}
    >
      <Modal.Header>
        <Text id="modal-title" size={18} b>
          {state.title}
        </Text>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex", flexDirection: "column", "alignItems": "center" }}>
          <div style={{ fontSize: "40px" }}>{state.emoji}</div>
          <div style={{ textAlign: "center" }}>{state.description}</div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={onReject}>
          No
        </Button>
        <Button auto color="success" onPress={onConfirm}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>);
}