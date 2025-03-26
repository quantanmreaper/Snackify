import React, { useState } from 'react';
import {FaGoogle, FaFacebook} from 'react-icons/fa';
import {Link} from "react-router-dom";

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateEmail = (email) => {	
        if (!email.trim()) return "Email is required";
        if (!email.includes('@')) return "Email must contain @ symbol";
        return "";
    };
    
    const handleChange = (e,fieldName) => {
        const value = e.target.value;

        switch(fieldName){
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailError = validateEmail(email);
        if (emailError) {
            alert(emailError);
            return;
        }
       
        try {
            // Mock API call - replace with your actual signup logic
            console.log("Form submitted successfully", { 
                fullname, email, password, userType 
            });
            
            // Successful submission logic would go here
            alert("Sign up successful!");
            
        } catch (error) {
            console.error("Signup error:", error);
            alert("An error occurred during signup. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  value={email}
                  onChange={(e) => handleChange(e, 'email')}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  value={password}
                  onChange={(e) => handleChange(e, 'password')}
                  required
                />
              </div>

              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-900 transition duration-300">
                Sign In
                </button>

              <div className="mt-4 text-center">
                <Link to="/signup" className="text-blue-600 hover:text-purple-800">Dont have an Account SignUp?</Link>
                </div>

            </form>
            </div>

        </div>

    );
}

export default SignInForm;