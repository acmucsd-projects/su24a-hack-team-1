import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

// https://developers.google.com/identity/gsi/web/reference/js-reference

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const url = process.env.REACT_APP_BACKEND_URL;
    const { handleGoogle, loading, error } = useFetch("http://localhost:4000/login");

    useEffect(() => {
        /* global google */
        if (window.google) {
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: (response) => {
                handleGoogle(response).then(user => {
                    setIsLoggedIn(true);
                    setUserInfo(user);
                });
            },
        });

        google.accounts.id.renderButton(document.getElementById("loginDiv"), {
            // type: "standard",
            theme: "filled_black",
            // size: "small",
            text: "signin_with",
            shape: "pill",
        });

        // google.accounts.id.prompt()
        }
    }, [handleGoogle]);
    return (

        <>
        <div id="main">
        <div id="hero">
            <div id="nav">
            <a href="#">Project<span className="text-purple">Up</span></a>
            <p>About Us<i className="ri-arrow-down-s-line"></i></p>
            </div>
            <div className="center">
            <div id="header">
                <h1>Plan, Post, & Produce </h1>
                <div id="blocktext">
                <h1 id="header2"><span className="text-p">Projects</span>.</h1>
                <h2 id="header3"><span className="desc">Disocover Your Community Now.</span></h2>
                </div>
                <div className="bttns">
                    {isLoggedIn ? (
                        <div>
                        <p>Welcome, {userInfo.name}</p>
                        <img src={userInfo.picture} alt="User profile" />
                    </div>
                    ) : (
                        <>
                        {/* <button id="btn-cont"><i className="fa-brands fa-google"></i>Continue with Google</button> */}
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
                        </>
                    )}
                
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    );
};

export default Login;