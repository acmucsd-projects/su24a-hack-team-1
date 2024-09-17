import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

// https://developers.google.com/identity/gsi/web/reference/js-reference

const SignUp = () => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const { handleGoogle, loading, error } = useFetch(url + "/signup");

    useEffect(() => {
        /* global google */
        if (window.google) {
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleGoogle,
        });

        google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
            // type: "standard",
            theme: "filled_black",
            // size: "small",
            text: "continue_with",
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
                <button id="btn-cont"><i class="fa-brands fa-google"></i>Continue with Google</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {loading ? (<div>Loading....</div>) : (<div id="signUpDiv" data-text="signup_with"></div>)}
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    );
};

export default SignUp;