export const required = (value) => (value ? undefined : 'Required');

export const someTimesRequired = (conditioner) => (value) => {
  if (!conditioner) {
    return undefined;
  }

  return value ? undefined : 'Required';
};

export const trim = (value) => value && value.trim && value.trim();

export const mustBeNumber = (value) =>
  isNaN(value) ? 'Must be a number' : undefined;

export const minValue = (min) => (value) =>
  isNaN(value) || value >= min
    ? undefined
    : `Should be equal or greater than ${min}`;

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
