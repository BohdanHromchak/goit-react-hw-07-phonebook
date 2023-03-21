import css from "./Filter.module.css";
import {  useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filterSlice";


export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    dispatch(filterContacts(e.target.value));
  };


  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
