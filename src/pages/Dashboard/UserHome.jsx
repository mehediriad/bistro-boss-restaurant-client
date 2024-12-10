import useAuth from "../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <div>
            <h2 className="font-cinzel text-3xl">Hi! Welcome {user?.displayName ? user.displayName : "Back"}</h2>
        </div>
        </div>
    );
};

export default UserHome;