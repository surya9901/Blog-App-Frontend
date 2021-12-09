import { ToastContainer } from 'react-toastify'

function Toastoptions() {
    return (
        <ToastContainer position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false} />
    )
}

export default Toastoptions
