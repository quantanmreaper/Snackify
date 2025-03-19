import React, { useState } from 'react';
import { Camera } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = () => {
    const [imagePreview, setImagePreview] = useState(null);
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <main className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">User Profile</h1>
                    
                    {/* Profile Image Upload */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative w-32 h-32 mb-4">
                            {imagePreview ? (
                                <img 
                                    src={imagePreview} 
                                    alt="Profile Preview" 
                                    className="w-full h-full rounded-full object-cover border-4 border-gray-200"
                                />
                            ) : (
                                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                                    <Camera size={40} className="text-gray-400" />
                                </div>
                            )}
                            
                            <label 
                                htmlFor="profile-image" 
                                className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-gray-700 transition"
                            >
                                <Camera size={20} className="text-white" />
                            </label>
                            
                            <input 
                                type="file" 
                                id="profile-image" 
                                accept="image/*" 
                                className="hidden" 
                                onChange={handleImageChange}
                            />
                        </div>
                        <p className="text-sm text-gray-500">Click the camera icon to upload a profile image</p>
                    </div>
                    
                    {/* Profile Form */}
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input 
                                    type="text" 
                                    id="firstname" 
                                    name="firstname" 
                                    defaultValue="John" 
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input 
                                    type="text" 
                                    id="lastname" 
                                    name="lastname" 
                                    defaultValue="Doe" 
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                defaultValue="johndoe@gmail.com" 
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                            />
                        </div>
                        
                        <div className="flex justify-end">
                            <button 
                                type="submit" 
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default Profile;