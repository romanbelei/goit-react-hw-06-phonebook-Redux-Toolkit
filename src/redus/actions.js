import { createAction } from '@reduxjs/toolkit';

export const filterAction = createAction('filter');
export const addContactAction = createAction('contact/add');
export const removeContactAction = createAction('contact/remove');

//функція  filterAction(value)  return {type:'filter, payload:(value)}

// export const filterAction = event => ({
//   type: 'filter',
//   payload: event.currentTarget.value,
//   //   payload: '',
// });

// export const addContactAction = (name, number) => ({
//   type: 'contact/add',
//   payload: { name: name, number: number },
// });

// export const removeContactAction = contactId => ({
//   type: 'contact/remove',
//   payload: contactId,
// });
