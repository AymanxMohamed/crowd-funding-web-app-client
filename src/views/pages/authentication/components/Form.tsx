import { Form, Formik } from "formik";

const MyForm = ({ chilrden, ...rest }: any) => {
  return <Formik {...rest}></Formik>;
};

export default MyForm;
