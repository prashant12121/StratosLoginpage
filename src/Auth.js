import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Auth = () => {
    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const res = await axios.post('http://localhost:5000/auth/google', {
                id_token: credentialResponse.credential,
            });
            console.log('User logged in:', res.data);
            // Handle successful login (e.g., save user info, redirect)
        } catch (error) {
            console.error('Google login error:', error);
        }
    };

    const handleGitHubLogin = () => {
        window.location.href = 'http://localhost:5000/auth/github';
    };

    const handleLinkedInLogin = () => {
        window.location.href = 'http://localhost:5000/auth/linkedin';
    };

    return (
        <GoogleOAuthProvider clientId="your_google_client_id">
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h5>Or Login Using</h5>
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={error => console.error('Login Failed:', error)}
                />
                <div style={{ marginTop: '10px' }}>
                    <button onClick={handleGitHubLogin} style={{ margin: '5px', padding: '5px 5px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        GitHub
                    </button>
                    <button onClick={handleLinkedInLogin} style={{ margin: '5px', padding: '5px 5px', backgroundColor: '#0077B5', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        LinkedIn
                    </button>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Auth;