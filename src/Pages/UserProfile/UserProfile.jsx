import { FaUserEdit } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user } = useAuth();

    return (
        <div className="px-4 py-8">
            {/* Title */}
            <h1 className="text-center text-xl md:text-2xl font-semibold mb-6">
                Welcome to <span className="font-black">{user?.displayName}</span>
            </h1>

            {/* Profile Card Container */}
            <div className="max-w-2xl mx-auto bg-base-100 shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="avatar">
                    <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL || '/default-user.png'} alt="User" />
                    </div>
                </div>

                {/* User Info */}
                <div className="text-center md:text-left flex-1">
                    <h2 className="text-lg md:text-xl font-semibold">
                        {user?.displayName || 'User Name'}
                    </h2>
                    <p className="text-sm text-gray-500">{user?.email || 'user@example.com'}</p>

                    {/* Action Button */}
                    <Link to="/updateProfile">
                        <button className="btn btn-outline btn-sm mt-4">
                            <FaUserEdit className="mr-2" /> Update Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
