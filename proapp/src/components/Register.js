import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
const Signup = ({ onSignupSuccess }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [is_creator, setIs_creator] = useState(false);
    const [is_costomer, setIs_costomer] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    
    
    const handleSignup = (e) => {
        e.preventDefault(); // Corrected spelling
        if (password !== confirmpassword) {
            setError("Passwords don't match");
            return;
        }
        axios.post('http://127.0.0.1:8000/api/sign-up/', {
            username: username,
            email:email,
            is_creator: is_creator,
            is_costomer: is_costomer,
            password: password,
            password2: confirmpassword
        })
        .then(response => {
            setSuccess("Signup successful! Now you can log in.");
            setError('');
            onSignupSuccess();
            navigate('/Home');
            console.log({
                username: username,
                email: email,
                is_creator: is_creator,
                is_costomer: is_costomer,
                password: password, 
                password2: confirmpassword
            });         
        })
        .catch(error => {
            setError("Signup failed! Please try again.");
            console.log({
                username: username,
                email: email,
                is_creator: is_creator,
                is_costomer: is_costomer,
                password: password,
                password2: confirmpassword
            });
        });
    };

    const styles = {
        container: {
            maxWidth: '500px',
            margin: '0 auto',
            marginTop: '100px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f0f2f5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
        label: {
            marginBottom: '8px',
            fontWeight: 'bold'
        },
        input: {
            padding: '10px',
            margin: '10px 0',
            width: '100%',
            maxWidth: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
        },
        checkbox: {
            marginRight: '8px'
        },
        submitButton :{
            padding: '10px 20px',
            margin: '20px 0',
            backgroundColor: '#025440',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
        },
        errorMessage: {
            color: 'red',
            marginTop: '10px'
        },
        successMessage: {
            color: 'green',
            marginTop: '10px'
        },
        title: {
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#025440'
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Sign Up</h2>
            <form style={styles.form} onSubmit={handleSignup}>
                <label style={styles.label}>
                    Username :
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}   
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Email :
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Is creator:
                    <input
                        type="radio"
                        checked={is_creator}
                        name='x'
                        onChange={(e) => setIs_creator(e.target.value)}
                        style={styles.checkbox}
                    />
                </label>
                <label style={styles.label}>
                    Is costomer:
                    <input
                        type="radio"
                        checked={is_costomer}
                        name='x'
                        onChange={(e) => setIs_costomer(e.target.value)}
                        style={styles.checkbox}
                    />
                </label>
                <label style={styles.label}>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        style={styles.input}
                    />
                </label>
                <input
                    type="submit"
                    value="Sign Up"
                    style={styles.submitButton}
                />

            </form>
            <h5>Already have an account? <Link to="/login">Log In</Link></h5>
            {error && <p style={styles.errorMessage}>{error}</p>}
            {success && <p style={styles.successMessage}>{success}</p>}
        </div>
    );
};
export default Signup;
