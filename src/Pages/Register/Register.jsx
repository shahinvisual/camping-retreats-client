import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Sign up today to become a member of our exclusive community. Enjoy personalized content and member-only benefits.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                {/* Name Field------------------ */}
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" />
                                {/* Email Field------------------ */}
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                {/* Photo-URL Field------------------ */}
                                <label className="label">Photo-URL</label>
                                <input type="text" className="input" placeholder="photo-url" />
                                {/* Password-URL Field------------------ */}
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                                <p className="text-center mt-3">Already have an account? <Link to='/login' className="font-medium text-sm">Login</Link></p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;