import "../index.css";
declare const prettyPrint: (objs: Object[], { inspectEl, replaceCircularReference, }?: {
    inspectEl: HTMLElement | null;
    replaceCircularReference: boolean;
}) => void;
export default prettyPrint;
