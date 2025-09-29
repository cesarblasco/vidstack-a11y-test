export default interface SliderBreakpoint {
    time: number;
    label?: string;
    type?: 'important' | 'warning' | 'info';
    content?: React.ReactNode;
}