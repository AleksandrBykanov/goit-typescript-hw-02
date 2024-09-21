import css from "../SearchBar/SearchBar.module.css";
import { Field, Form, Formik} from "formik";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.css';

type Props = {
  onSubmit: (arg: string)=>void;
  setPage: (arg: 1)=>void;
};


const SearchBar = ({ onSubmit, setPage }: Props) => {
  const handleSubmit = (values:any) => {
    if (values.search.trim() === "") {
      iziToast.error({
        position: 'topRight',
        message:'Please, enter search word!'
      });
      return;
    } 
    setPage(1)
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{search: ""}}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <Field
          className={css.field}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
