import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (msg, type) => {
    toast(msg, {
        type,
        position: "top-right",
        theme: "colored",
        hideProgressBar: false,
    });
}

export const toastComponents = () => {
    return (
        <ToastContainer transition={Slide} />
    );
}