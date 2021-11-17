import React from 'react';
import s from './TeamsForm.module.css'
import { Formik, useFormik } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as Yup from "yup";

const TeamsForm = (props) => {
  const formik = useFormik(
    {
      initialValues: {
        full_name: "",
        city: "",
        abbreviation: "",
        conference: ""
      },
      validationSchema: Yup.object({
        city: Yup.string().matches(/^[aA-zZ\s]+$/, "Only letters")
      }),
      onSubmit: (value) => props.setNewTeam(value)
    }
  );

  return <form onSubmit={formik.handleSubmit} className={s.myForm}>
    <a className={s.input}>
      <InputLabel id="full_name">Name</InputLabel>
      <input className={s.input} id="full_name" name="full_name" type="text" onChange={formik.handleChange} value={formik.values.full_name} />
    </a>
    {formik.errors.city ?
      <a className={s.input}>
        <InputLabel id="city">City</InputLabel>
        <input className={s.input} className={`${s.input} ${s.error}`} id="city" name="city" type="text" value={formik.values.city} onChange={formik.handleChange} />
        <p className={s.error}>{formik.errors.city}</p>
      </a>
      : <a className={s.input}>
        <InputLabel id="city">City</InputLabel>
        <input className={s.input} id="city" name="city" type="text" value={formik.values.city} onChange={formik.handleChange} />
      </a>}
    <a className={s.input}><InputLabel id="abbreviation">Abbreviation</InputLabel>
      <input className={s.input} id="abbreviation" name="abbreviation" type="text" placeholder="Only uppercase"
        value={formik.values.abbreviation} onChange={formik.handleChange} /></a>
    <a className={s.select}><InputLabel id="conference">Conference</InputLabel>
      <Select className={s.select}
        labelId="conference"
        id="conference"
        name="conference"
        value={formik.values.conference}
        label="conference"
        onChange={formik.handleChange}
      >
        <MenuItem value={"East"}>East</MenuItem>
        <MenuItem value={"West"}>West</MenuItem>
      </Select></a>

    <button type="submit" className={s.button} >Add team</button>

  </form>

}
export default TeamsForm;