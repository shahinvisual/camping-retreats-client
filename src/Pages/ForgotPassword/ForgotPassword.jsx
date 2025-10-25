import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ForgotPassword = () => {
    const {PasswordReset} = useAuth();
    const navigate = useNavigate();
     // Reset & Password login-----------------
        const handleResetPassword = (e) => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            PasswordReset(email)
                .then(result => {
                    navigate('/login')
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Password Reset Successful!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch(error => {
                    alert(error.message);
                })
        }
    return (
        <div>
            <div>
                <Helmet><title>Camping Retreats || Forgot Password</title></Helmet>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Reset Password!</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleResetPassword} className="fieldset">
                                    {/* Email Field------------------ */}
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" required />
                                    <button className="btn btn-neutral mt-4">Reset Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;