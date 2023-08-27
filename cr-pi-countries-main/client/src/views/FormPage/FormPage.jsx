import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllCountries, postActivity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./FormPage.module.css"
import { validate } from "./validation";
// import axios from "axios";

const FormPage = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);

  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: []
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...form,
      [event.target.name]: event.target.value
    }))
  }


  const handleSelect = (event) => {
    if (!form.countries.includes(event.target.value)) {
      setForm({
        ...form,
        countries: [...form.countries, event.target.value]
      })
      setErrors(validate({
        ...form,
        countries: [...form.countries, event.target.value]
      }))
    }
  }

  console.log(form)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !form.name ||
      !form.difficulty ||
      !form.duration ||
      !form.season ||
      !form.countries
    ) {
      return alert("Complete mandatory fields");
    }
    if (
      errors.name ||
      errors.difficulty ||
      errors.duration ||
      errors.season ||
      errors.countries
    ) {
      return alert("Wrong input, please fill only with valid data");
    }

    dispatch(postActivity(form));
    alert("Activity created succesfully!");
    setForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    })
    navigate('/home');
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className={style.formContainer}>
      <div>
        <Link to='/home'>
          <button className={style.backButton}>Back</button>
        </Link>
      </div>
      <div>
        <div>
          <h1>Create Activities</h1>
        </div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div>
            <label className={style.formLabel}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(event) => handleChange(event)}
              autoComplete="off"
              maxLength="25"
              placeholder="Only letters are allowed"
              className={style.formInput} />
            {errors.name && (
              <p className={style.error}>{errors.name}</p>
            )}
          </div>
          <div>
            <label className={style.formLabel}>
              Difficulty:
            </label>
            <input
              type="number"
              name="difficulty"
              value={form.difficulty}
              placeholder="Select a difficulty"
              onChange={(event) => handleChange(event)} className={style.formInput} />
            {errors.difficulty && (
              <p className={style.error}>{errors.difficulty}</p>
            )}
          </div>
          <div>
            <div>
              <fieldset className={style.fieldset}>
                <legend className={style.formLabel}>Season:</legend>
                <label>
                  <input
                    type="radio"
                    name="season"
                    value="Spring"
                    checked={form.season === "Spring"}
                    onChange={handleChange} // Usar la misma función para todos los radio inputs
                  /> Spring
                </label>
                <label>
                  <input
                    type="radio"
                    name="season"
                    value="Summer"
                    checked={form.season === "Summer"}
                    onChange={handleChange}
                  /> Summer
                </label>
                <label>
                  <input
                    type="radio"
                    name="season"
                    value="Autumn"
                    checked={form.season === "Autumn"}
                    onChange={handleChange}
                  /> Autumn
                </label>
                <label>
                  <input
                    type="radio"
                    name="season"
                    value="Winter"
                    checked={form.season === "Winter"}
                    onChange={handleChange}
                  /> Winter
                </label>
              </fieldset>
            </div>


          </div>
          <div>
            <label className={style.formLabel}>Countries</label>
            <select name="countries" onChange={(event) => handleSelect(event)} className={style.selectCountries}>
              {countries.map(elem => (
                <option value={elem.id} key={elem.id} className={style.selectedCountries}>
                  {elem.name}
                </option>
              ))}
            </select>
            {errors.countries && (
              <p className={style.error}>{errors.countries}</p>
            )}
            <ul>
              {form.countries.map((elem, index) => (
                <li key={index}>
                  {elem}{" "}
                  <button
                    onClick={() => {
                      const updatedCountries = form.countries.filter(item => item !== elem);
                      setForm({
                        ...form,
                        countries: updatedCountries,
                      });
                    }}
                    className={style.removeButton}>
                    ⊘
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label className={style.formLabel}>
              Duration:
            </label>
            <input
              type="time"
              name="duration"
              value={form.duration}
              onChange={(event) => handleChange(event)}
              className={style.formInput} />
            {errors.duration && (
              <p className={style.error}>{errors.duration}</p>
            )}
          </div>


          <button
            type="submit"
            className={style.createButton}
          >Create</button>
        </form>
      </div>
    </div>
  )
}

export default FormPage