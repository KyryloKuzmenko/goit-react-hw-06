import styles from "./Contact.module.css"
import { IoPersonSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch()
  const delContact = () => dispatch(deleteContact(id));

  
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <p className={styles.name}>
          <IoPersonSharp />
          {name}
        </p>
        <p className={styles.number}>
          <IoCall /> {number}
        </p>
      </div>
      <button
        onClick={delContact}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;