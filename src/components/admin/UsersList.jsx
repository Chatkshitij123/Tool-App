import UserItem from "./UserItem";

const UsersList = ({
  users,
}) => {
  return (
    <div className="admin-card">

      <h2>
        Users
      </h2>

      <table>

        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map(
            (user) => (
              <UserItem
                key={
                  user.id
                }
                user={
                  user
                }
              />
            )
          )}
        </tbody>

      </table>

    </div>
  );
};

export default UsersList;