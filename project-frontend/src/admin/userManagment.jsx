import axios from "axios";
import { useEffect, useState } from "react";

export default function UserManagment() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getUsers(){
        try{
            setLoading(true);
            const res = await axios.get(import.meta.env.VITE_BACKEND_URL + '/api/user/getuser');
            setUsers(res.data);
            console.log(res.data);
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        getUsers();
    },[])

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-white">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 616 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">User Management</h1>
                        <p className="text-green-200 text-lg">Manage all registered users and their roles</p>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-slate-50 border-b border-slate-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{users.length}</div>
                        <p className="text-blue-700 text-sm">Total Users</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                            {users.filter(u => u.role === 'customer').length}
                        </div>
                        <p className="text-green-700 text-sm">Customers</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                            {users.filter(u => u.role === 'seller').length}
                        </div>
                        <p className="text-purple-700 text-sm">Leasers</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-amber-600 mb-1">
                            {users.filter(u => u.role === 'admin').length}
                        </div>
                        <p className="text-amber-700 text-sm">Admins</p>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="p-6">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="relative">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500/30 border-t-green-500 mx-auto mb-4"></div>
                            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
                        </div>
                        <span className="text-slate-600 text-lg">Loading users...</span>
                    </div>
                ) : users.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 616 0zM17 6a3 3 0 11-6 0 3 3 0 616 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">No Users Found</h3>
                        <p className="text-slate-600">No registered users in the system</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="text-left px-6 py-4 font-bold text-slate-800">First Name</th>
                                    <th className="text-left px-6 py-4 font-bold text-slate-800">Last Name</th>
                                    <th className="text-left px-6 py-4 font-bold text-slate-800">Email</th>
                                    <th className="text-center px-6 py-4 font-bold text-slate-800">Role</th>
                                    <th className="text-center px-6 py-4 font-bold text-slate-800">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index} className="border-b border-slate-100 hover:bg-blue-50 transition-colors duration-200">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                                    {user.firstName?.charAt(0)?.toUpperCase()}
                                                </div>
                                                <div className="font-semibold text-slate-800">{user.firstName}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-slate-800">{user.lastName}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-slate-700">{user.email}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-3 py-1 text-sm font-semibold rounded-full capitalize ${
                                                user.role === 'customer' 
                                                    ? 'bg-green-100 text-green-700 border border-green-200' 
                                                    : user.role === 'leaser'
                                                    ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                                    : user.role === 'admin'
                                                    ? 'bg-amber-100 text-amber-700 border border-amber-200'
                                                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                                            }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center space-x-2">
                                                <button className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 rounded-lg transition-colors duration-200">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                <button className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-700 rounded-lg transition-colors duration-200">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                    </svg>
                                                </button>
                                                <button className="p-2 bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 rounded-lg transition-colors duration-200">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Footer */}
            {!loading && users.length > 0 && (
                <div className="bg-slate-50 border-t border-slate-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-600">
                            Showing {users.length} registered users
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-slate-600">All Users</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}