export const validateField = (field: string) =>
  ({
    required: {
      value: true,
      message: `${field} is required`,
    },
    maxLength: {
      value: 64,
      message: 'input is too long',
    },
  });