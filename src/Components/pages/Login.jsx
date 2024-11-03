import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase.config';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";





function Login() {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null);


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        // reset error 
        setRegisterError('');
        // reset Success 
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password Should Be at least 6 character or longer');
            return;
        }

        // add validation 
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                console.log("success login")
                setSuccess('Login Success.')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
            });
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log("Please provide an email", emailRef.current.value)
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log("please write a valid email")
            return;

        }
        //   send validate email 
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Please Check Your Email");
                // window.alert("Hello world!");
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <section className="bg-sky-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-sky-100">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login here..
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin} >
                              
                                <div>
                                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        ref={emailRef}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="relative">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
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


                                {/* <button type="submit" name="login" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button> */}
                                <label className="label">
                                    <a onClick={handleForgetPassword} className="label-text-alt link link-hover">Forget Password?</a>
                                </label>
                                <input className="btn btn-secondary mb-4 w-3/4" type="submit" value="Login Now" />


                            </form>
                            {
                                registerError && <p className="text-red-700">{registerError}</p>
                            }
                            {
                                success && <p className="text-green-600">{success}</p>
                            }
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account? <Link to={"/register"} className="font-medium text-red-500 hover:underline dark:text-primary-500">Register here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
