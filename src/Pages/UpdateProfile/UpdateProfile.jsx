import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const { user, userProfileUpdate } = useAuth();
    const navigate = useNavigate();
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        userProfileUpdate(name, photo_url)
            .then(res => {
                navigate('/userProfile')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Updated User Profile!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update Your Profile now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleUpdateProfile} className="fieldset">
                                {/* Name Field------------------ */}
                                <label className="label">Name</label>
                                <input defaultValue={user?.displayName} type="text" name='name' className="input" placeholder="Name" required />
                                {/* Photo-URL Field------------------ */}
                                <label className="label">Photo-URL</label>
                                <input defaultValue={user?.photoURL} type="text" name='photo_url' className="input" placeholder="photo-url" required />
                                <button className="btn btn-neutral mt-4">Update Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;