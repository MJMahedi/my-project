import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase.config';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";



function Register() {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = e => {
        e.preventDefault();
        console.log("clicked");
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accept = e.target.terms.checked;
        console.log(name,email, password, accept);
        // reset error 
        setRegisterError('');
        // reset Success 
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password Should Be at least 6 character or longer');
            return;
        }
        else if (!accept) {
            setRegisterError('Please accept our terms & Conditions');
            return;

        }

        // create User
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfuly');
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
            })
    }

    return (

        <div>
            <section className=" py-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-sky-100">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>

                            {/* input form  */}
                            <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label type="" for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email" type="email" placeholder="Your email" required />
                                </div>
                                {/* <div className="relative" >
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <span className="absolute" onClick={() => setShowPassword(!showPassword)}>{
                                        showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>

                                    }</span> <br />
                                </div> */}
                                <div className="relative">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:ring-primary-600 focus-within:border-primary-600 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-transparent w-full p-2.5 pl-3 pr-10 text-sm rounded-lg focus:outline-none"
                                            required
                                        />
                                        <span
                                            className="absolute right-3 cursor-pointer text-gray-500 dark:text-gray-400"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input name="terms" id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>


                                <input className="btn btn-secondary mb-4 w-3/4" type="submit" value="Create an account" />

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to={"/login"} className="font-medium text-sky-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                            {
                                registerError && <p className="text-red-700">{registerError}</p>
                            }
                            {
                                success && <p className="text-green-600">{success}</p>
                            }

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register
