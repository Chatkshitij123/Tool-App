const UserItem = ({
  user,
}) => {
  return (
    <tr>
      <td>{user.email}</td>

      <td>
        {user.role ||
          "user"}
      </td>

      <td>
        {user.createdAt
          ? "Active"
          : "Unknown"}
      </td>
    </tr>
  );
};

export default UserItem;