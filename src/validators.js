export const required = value => (value ? undefined : 'Required');

export const notEmpty = value => (value.trim() !== '' ? undefined : 'Field cannot be empty');

export const requiredLength = value => (value.length === 5 ? undefined : 'Value must be 5 characters');

export const isNumber = value => ((typeof value) === 'string' ? undefined : 'Value must be number');
