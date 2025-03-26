import React, { useState } from 'react';
import {FaGoogle, FaFacebook} from 'react-icons/fa';

const SignUpForm = () => {
    // Form field states
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userType, setUserType] = useState("customer"); // Default value
    
    // Error states
    const [errors, setErrors] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: ''
    });
    
    // Loading state
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Validation functions
    const validateFullname = (name) => {
        if (!name.trim()) return "Fullname is required";
        if (name.trim().length < 2) return "Fullname must be at least 2 characters";
        return "";
    };
    
    const validateEmail = (email) => {
        if (!email.trim()) return "Email is required";
        if (!email.includes('@')) return "Email must contain @ symbol";
        return "";
    };
    
    const validatePassword = (password) => {
        if (!password) return "Password is required";
        
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
        if (password.length < 8) return "Password must be at least 8 characters";
        if (!hasLowercase) return "Password must contain a lowercase letter";
        if (!hasUppercase) return "Password must contain an uppercase letter";
        if (!hasNumber) return "Password must contain a number";
        if (!hasSpecial) return "Password must contain a special character";
        
        return "";
    };
    
    const validateConfirmPassword = (confirmPwd) => {
        if (!confirmPwd) return "Please confirm your password";
        if (confirmPwd !== password) return "Passwords do not match";
        return "";
    };
    
    // Handle input changes - FIXED VERSION
    const handleChange = (e, fieldName) => {
        const value = e.target.value;
        
        // Update the appropriate state based on field name
        switch (fieldName) {
            case 'fullname':
                setFullname(value);
                setErrors(prev => ({
                    ...prev,
                    fullname: validateFullname(value)
                }));
                break;
            case 'email':
                setEmail(value);
                setErrors(prev => ({
                    ...prev,
                    email: validateEmail(value)
                }));
                break;
            case 'password':
                setPassword(value);
                setErrors(prev => ({
                    ...prev,
                    password: validatePassword(value)
                }));
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                setErrors(prev => ({
                    ...prev,
                    confirmPassword: validateConfirmPassword(value)
                }));
                break;
            case 'userType':
                setUserType(value);
                setErrors(prev => ({
                    ...prev,
                    userType: value ? '' : 'Please select a user type'
                }));
                break;
            default:
                break;
        }
    };
    
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate all fields
        const fullnameError = validateFullname(fullname);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const confirmPasswordError = validateConfirmPassword(confirmPassword);
        
        // Update error state
        const newErrors = {
            fullname: fullnameError,
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
            userType: userType ? '' : 'Please select a user type'
        };
        
        setErrors(newErrors);
        
        // Check if there are any errors
        if (Object.values(newErrors).some(error => error !== "")) {
            return;
        }
        
        // If no errors, proceed with form submission
        setIsSubmitting(true);
        
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
    
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Fullname</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.fullname ? 'border-red-500' : ''}`}
                  value={fullname}
                  onChange={(e) => handleChange(e, 'fullname')}
                  required
                />
                {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-red-500' : ''}`}
                  value={email}
                  onChange={(e) => handleChange(e, 'email')}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? 'border-red-500' : ''}`}
                  value={password}
                  onChange={(e) => handleChange(e, 'password')}
                  required
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  value={confirmPassword}
                  onChange={(e) => handleChange(e, 'confirmPassword')}
                  required
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700">User Type</label>
                <select
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.userType ? 'border-red-500' : ''}`}
                  value={userType}
                  onChange={(e) => handleChange(e, 'userType')}
                  required
                >
                  <option value="">Select User Type</option>
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                  <option value="vendor">Vendor</option>
                </select>
                {errors.userType && <p className="text-red-500 text-sm mt-1">{errors.userType}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-900 transition duration-300"
              >
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </button>
            </form>
            
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button className="p-3 rounded-full bg-red-500 text-white hover:bg-red-700 transition duration-300">
                <FaGoogle size={24} />
              </button>
              
              <button className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-900 transition duration-300">
                <FaFacebook size={24} />
              </button>
            </div>

            <div className="mt-4 text-center">
              <a href="/signin" className="text-blue-500">Already have an account? Sign In</a>
            </div>
          </div>
        </div>
    );
};

export default SignUpForm;