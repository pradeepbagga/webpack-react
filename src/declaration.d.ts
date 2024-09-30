// REFERENCE: https://youtu.be/zb4WQaxdvLA?list=PLIyHGsmsuNsCdfghCkk2rw42Egs7j0j4_&t=1568

declare module '*.png';
declare module '*.jpg';
declare module '*.gif';

declare module '*.svg' {
    const content: string;
    export default content;
}