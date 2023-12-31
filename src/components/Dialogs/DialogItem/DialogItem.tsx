import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

type PropsType = {
  id?: number;
  name?: string;
};

const DialogItem: React.FC<PropsType> = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="avatar"
          className="avatar"
        />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
