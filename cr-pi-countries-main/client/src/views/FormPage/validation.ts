interface Form {
  name: string;
  difficulty: number;
  duration: string;
  season: string;
  countries: string[];
}

interface Errors {
  name?: string;
  difficulty?: string;
  duration?: string;
  season?: string;
  countries?: string;
}

export const validate = (form: Form): Errors => {
  let errors: Errors = {};

  if (!form.name) {
    errors.name = 'A name is required.';
  } else if (!/^[A-Za-z\sñÑ]+$/.test(form.name)) {
    errors.name = 'Only letters are allowed in the name.';
  } else if (form.name.length < 5) {
    errors.name = 'Activities must have at least 5 characters';
  } else if (!form.difficulty) {
    errors.difficulty = "Difficulty level can't be blank.";
  } else if (form.difficulty < 1 || form.difficulty > 5) {
    errors.difficulty = "Difficulty must be between 1 and 5.";
  } else if (!form.duration) {
    errors.duration = "Please, select the amount of time the activity takes.";
  } else if (!form.season || form.season.length === 0) {
    errors.season = "Please, select the season where this activity takes place.";
  } else if (!form.countries || form.countries.length === 0) {
    errors.countries = "Select at least 1 country.";
  }

  return errors;
};
