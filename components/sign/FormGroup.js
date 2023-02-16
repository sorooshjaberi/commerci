 
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import FormHelperText from '@mui/material/FormHelperText'

const FormGroup = ({ styles, formik, type, title }) => {
  return (
    <FormControl>
      <InputLabel sx={{ ...styles.inputLabel }} htmlFor={type}>
        {title}
      </InputLabel>
      <Input
        id={type}
        name={type}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[type]}
        sx={{ ...styles.inputs }}
      />
      {formik.errors[type] && formik.touched[type] ? (
        <FormHelperText sx={{ ...styles.inputHelper }}>
          {formik.errors[type]}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default FormGroup;
