import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </Layout>
  );
};
