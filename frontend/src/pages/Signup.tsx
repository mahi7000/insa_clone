import { useNavigate } from 'react-router-dom';
import signin from '../assets/signin2.jpg'; 
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            isValid = false;
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        
        if (!isValid) {
            toast.error('Please fix the errors in the form');
        }
        
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        
        toast.promise(
            axios.post('http://localhost:5000/api/user/register', {
                full_name: formData.name,
                email_address: formData.email,
                password: formData.password
            }),
            {
                loading: 'Creating your account...',
                success: (response) => {
                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    });
                    navigate('/');
                    return 'Signup successful! Welcome aboard!';
                },
                error: (error) => {
                    console.error('Signup failed:', error);
                    if (error.response?.data?.message) {
                        return error.response.data.message;
                    }
                    return 'Signup failed. Please try again.';
                }
            }
        ).finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-4">
            <Toaster
                position="top-center"
                toastOptions={{
                    className: '',
                    style: {
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                    },
                    success: {
                    iconTheme: {
                        primary: '#4ade80',
                        secondary: 'white',
                    },
                    },
                    error: {
                    iconTheme: {
                        primary: '#f87171',
                        secondary: 'white',
                    },
                    },
                    duration: 4000,
                }}
                />
            
            <div className="absolute inset-0 z-0">
                <img 
                    src={signin} 
                    alt="Background" 
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="w-full max-w-md p-8 rounded-xl backdrop-blur-lg bg-white/20 shadow-lg border border-white/30 relative z-10">
                <h1 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80">Fullname</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-3 bg-white/20 border ${
                                errors.name ? 'border-red-500' : 'border-white/30'
                            } rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50`}
                            placeholder="Enter your full name"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-3 bg-white/20 border ${
                                errors.email ? 'border-red-500' : 'border-white/30'
                            } rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50`}
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white/80">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-3 bg-white/20 border ${
                                errors.password ? 'border-red-500' : 'border-white/30'
                            } rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50`}
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`mt-1 block w-full p-3 bg-white/20 border ${
                                errors.confirmPassword ? 'border-red-500' : 'border-white/30'
                            } rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50`}
                            placeholder="Confirm your password"
                        />
                        {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                    </div>
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 ${
                            isSubmitting ? 'bg-accent/20' : 'bg-accent/10 hover:bg-accent/40'
                        } text-white font-semibold rounded-lg transition duration-200 border border-white/30 flex items-center justify-center`}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : 'Sign Up'}
                    </button>
                </form>
                <p className="mt-4 text-sm text-white/80 text-center">
                    Already have an account? <a href="/login" className="text-white hover:underline font-medium">Log in</a>
                </p>
            </div>
        </div>
    );
}

export default Signup;