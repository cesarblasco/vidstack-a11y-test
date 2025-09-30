export default interface SliderBreakpoint {
    time: number;
    label?: string;
    breakpointType?: 'question' | 'audio-description';
    type?: 'important' | 'warning' | 'info' | 'audio';
    audioContent?: string; // to be used for audio descriptions, include text to be read by the narrator or screen reader
    content?: React.ReactNode; // to be used for OEQ, MCQ, etc or basically display any content in a dialog
}