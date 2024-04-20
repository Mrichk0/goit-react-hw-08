import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = store => store.contacts.contacts;
export const selectError = store => store.contacts.error;
export const selectIsLoading = store => store.contacts.isLoading;
export const selectFilter = store => store.filter;
console.log(selectIsLoading);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
