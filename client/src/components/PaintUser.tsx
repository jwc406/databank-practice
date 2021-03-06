import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GetData from "./GetData";
import IUser from "../interfaces/IUser.interface";

export default function PaintUser() {
  const user: IUser[] = useFetch("http://localhost:3001/jw-users");

  return (
    <div className="users">
      <h2>π μ μ λ€ π</h2>
      <table>
        <thead>
          <tr>
            <th>μ΄λ¦</th>
            <th>λμ΄</th>
            <th>μ§μ</th>
            <th>μ£Όμ</th>
            <th>νΈμ§</th>
          </tr>
        </thead>
        {user.map((users: IUser) => (
          <GetData user={users} key={users._id} />
        ))}
      </table>
      <Link to="/jw-users/post">
        <button
          className="btns"
          style={{ marginTop: "30px", width: "80px", height: "40px" }}
        >
          μΆκ°
        </button>
      </Link>
    </div>
  );
}
