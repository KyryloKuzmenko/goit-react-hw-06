import { Field, Form, Formik } from "formik";
import styles from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filterValue = useSelector(state => state.filters.filter);
  const dispatch = useDispatch()

  const selectNmaeFilter = (e) => {
    const value = e.target.value.trim();
    dispatch(changeFilter(value));
  };

    return (
      <Formik>
        <Form className={styles.form}>
          <label className={styles.label} htmlFor="searchField">
            Find contacts by name
          </label>
          <Field
            className={styles.inp}
            type="text"
            name="search"
            id="searchField"
            value={filterValue} // Value of the search field
            onChange={selectNmaeFilter}
          />
        </Form>
      </Formik>
    );
};


export default SearchBox;