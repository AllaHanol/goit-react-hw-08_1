import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { selectAuthUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Greetings, {user.name}</p>
      <p className={css.email}>{user.email}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
