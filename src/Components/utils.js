import { toast } from "react-toastify"

export const toastinfo = () => {
    toast.info('Cleared!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark'
    });
}

export const toastsuccess = () => {
    toast.success('Success!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
    })
}

export const toasterror = () => {
    toast.error('Server Error!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
    })
}

export const toastmismatch = () => {
    toast.error('Password Mismatch!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
    })
}

export const toastduplicateinfo = () => {
    toast.error('Email already exists!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
    })
}

export const toastwrongentry = () => {
    toast.error('Username/Password Incorrect!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
    })
}

export const toastnoemail = () => {
    toast.info('We found that this Email is not registered with us!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
    })
}

export const toastfakeotp = () => {
    toast.info('OTP is Invalid!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: false,
        progress: undefined,
        theme: 'dark',
    })
}