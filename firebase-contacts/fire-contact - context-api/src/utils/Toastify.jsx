import { toast } from 'react-toastify';

const Toastify = (msg) => {
    toast(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

export default Toastify