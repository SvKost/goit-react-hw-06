import "./App.css";
import css from "./components/ContactForm/ContactForm.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <div>
      <h1 className={css.formTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;

// const [search, setSearch] = useState("");

// const [contacts, setContacts] = useState(() => {
//   const stringifiedContacts = localStorage.getItem("contacts");
//   if (!stringifiedContacts) return initialContacts;

//   const parsedContacts = JSON.parse(stringifiedContacts);
//   return parsedContacts;
// });

// useEffect(() => {
//   localStorage.setItem("contacts", JSON.stringify(contacts));
// }, [contacts]);

// const onAddContact = (newContact) => {
//   const finalContact = {
//     ...newContact,
//     id: nanoid(),
//   };

//   setContacts((prevContacts) => {
//     return [...prevContacts, finalContact];
//   });
// };

// const onDeleteContact = (contactId) => {
//   setContacts((prevContacts) => {
//     return prevContacts.filter((contact) => contact.id !== contactId);
//   });
// };

// const filteredContacts = contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(search.toLowerCase())
// );
