 import { toast } from "react-toastify";
 import { ToastContainer } from "react-toastify";

 const useToast = () => {

   <ToastContainer />;
   const addToast = ({ text, time, type = "success", theme }) => {
     toast(text, {
       position: toast.POSITION.TOP_RIGHT,
       type: type || "success",
       theme: theme || "colored"
     });
   };

   return { addToast };
 };

 export default useToast;