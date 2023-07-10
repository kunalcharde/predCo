import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function  toastMessage(message) {
    return (
      <div>
        {/* Other components */}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </div>
    );
  }