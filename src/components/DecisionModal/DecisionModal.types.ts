export interface IDecisionModalProps {
    state: IDecisionModalState,
    onClose: () => void,
    onConfirm: () => void,
    onReject: () => void
}


export interface IDecisionModalState {
    visible: boolean,
    title: string,
    emoji: string,
    description: string,
}

export const decisionModalInitialState = {
    visible: false,
    title: "",
    emoji: "",
    description: ""
}