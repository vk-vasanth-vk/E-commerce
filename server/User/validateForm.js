export const validateRegisterForm = (data) => {
  const errors = {};

  if (!data.name) errors.name = "Name is required";
  if (!data.email) errors.email = "Email is required";
  if (!data.password) errors.password = "Password is required";

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateLoginForm = (data) => {
  const errors = {};

  if (!data.email) errors.email = "Email is required";
  if (!data.password) errors.password = "Password is required";

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};