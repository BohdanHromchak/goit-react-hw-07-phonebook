import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { getContacts, getFilterValue } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const handleFilterQuery = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const filterQuery = handleFilterQuery(contacts, filter);

  return (
    <ul className={css.list}>
      {filterQuery.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button
            onClick={() => dispatch(deleteContact(id))}
            className={css.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
