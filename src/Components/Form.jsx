import "./Form.css";
import { ThemeContext } from "../Context/Themecontex";
import { useContext } from "react";

const Form = () => {
   const { theme } = useContext(ThemeContext);

   return (
      <div style={theme} className="formDiv">
         <h1>Enter Employee Details</h1>
         <form className="form">
            <input
               type="text"
               id="name"
               className="name"
               placeholder="Enter name"
            />
            <input
               type="text"
               id="age"
               className="age"
               placeholder="Enter age"
            />
            <input
               type="text"
               id="address"
               className="address"
               placeholder="Enter address"
            />
          
            <select id="department" className="dep">
               <option value="">Choose</option>
               <option value="IA">IA</option>
               <option value="Teaching">Teaching</option>
               <option value="Placements">Placements</option>
               <option value="Management">Management</option>
            </select>
            <input
               type="text"
               id="salary"
               className="salary"
               placeholder="Enter salary"
            />
          
            <input type="submit" className="submit" />
         </form>
      </div>
   );
};

export default Form;