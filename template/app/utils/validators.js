import _isEqual from "lodash/isEqual";

const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
const REGEX_PHONE = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; // eslint-disable-line no-useless-escape

const stringNotBlank = (errorMsg = "ne peut pas être vide") => (value) =>
  !!value && !!`${value}`.trim() ? null : errorMsg;

const isSelectedValidator = (errorMsg = "il faut selectioner le champ") => (
  value,
) => (value ? null : errorMsg);

const fieldsEqualValidator = (
  comparedValue,
  errorMsg = "le champ a  == le champ b ",
) => (value) => (_isEqual(comparedValue, value) ? null : errorMsg);
const emailValidator = (errorMsg = "le format de l'email est invalide") => (
  value,
) => (REGEX_EMAIL.test(String(value).toLowerCase()) ? null : errorMsg);

const phoneValidator = (errorMsg = "Le format du numéro est invalide") => (
  value,
) => (REGEX_PHONE.test(String(value).toLowerCase()) ? null : errorMsg);

export {
  stringNotBlank,
  emailValidator,
  phoneValidator,
  fieldsEqualValidator,
  isSelectedValidator,
};
