import { useState } from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleGoogle = async (response) => {
        setLoading(true);
        fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },

            body: JSON.stringify({ token: response.credential }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.isNewUser) {
                window.location.href = '#'; // redirect to signup page
            } else {
                window.location.href = '#'; // redirect to the profile page
            }
        })
        .catch(error => console.error('Error during authentication:', error))
    };
    return { loading, error, handleGoogle };
};

export default useFetch;