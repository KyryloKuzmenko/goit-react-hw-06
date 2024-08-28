import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'; // Importing the nanoid library for generating unique IDs
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';



function App() {

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </>
  );
}

export default App;
