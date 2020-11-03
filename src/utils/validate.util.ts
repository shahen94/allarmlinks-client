export const validateField = (field: string, regEx?: RegExp) =>
  regEx
    ? {
      pattern: {
        value: regEx,
        message: `${field} is not valid`,
      },
      required: {
        value: true,
        message: `${field} is required`,
      },
      maxLength: {
        value: 64,
        message: 'input is too long',
      },
    }
    : {
      required: {
        value: true,
        message: `${field} is required`,
      },
      maxLength: {
        value: 64,
        message: 'input is too long',
      },
    };