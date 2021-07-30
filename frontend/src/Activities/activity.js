

export default function Activity({user}){

    const isAuthenticated = Boolean(user?.email);
  console.log("isAuthenticated:", isAuthenticated);
  return (
    <div className="Activity">
      <div className="content">
        {isAuthenticated ? <h1>Welcome, {user.email}!</h1> : null}
      </div>
    </div>
  );
}

