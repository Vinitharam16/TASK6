import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../../Contexts/Authentication.context";

export default function Login() {
    const { loggedIn, setLoggedIn } = useAuthentication();
    const navigate = useNavigate();
    return (
        <div>
            {!loggedIn && (
                <React.Fragment>
                    <button
                        className="btn"
                        onClick={() => {
                            setLoggedIn(true);
                            navigate("/app/notes");
                        }}>
                        Login
                    </button>
                </React.Fragment>
            )}

        </div>
    );
}