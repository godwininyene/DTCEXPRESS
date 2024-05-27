import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import phoneMock from '@/Assets/images/phonemock.png'
import bg from '@/Assets/images/banner_bg.jpg';
import logo from '@/Assets/images/logo.png';
import {IoLogInOutline} from 'react-icons/io5';
import Loader from '@/Components/Loader';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="bg-primary hidden md:block bg-cover bg-right-bottom" style={{backgroundImage : `url(${bg})`}}>
                <div className={`h-full bg-gradient-to-b from-[#000000ec] via-[#000000b9] to-[#000000b9] bg-opacity-95 text-primary`}>
                    
                    {/* <div className='h-full pt-20 pl-10'>
                        <img src={phoneMock} alt="mock" className={`w-[70%]`} />
                    </div> */}
                </div>
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className="relative min-h-full px-4 py-10 flex items-center justify-center dark:bg-slate-950 bg-slate-100">
                <section className={`w-full md:max-w-md mx-auto`}>

                    <div className='text-center'>
                        <Link href={route('home')}>
                            <img src={logo} alt="" className={`h-16 mb-4 inline-block`} />
                        </Link>
                    </div>

                    
                    <div className='px-4 py-6 md:p-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:text-white'>
                        <h3 className='font-bold text-2xl mb-1'>Login</h3>
                        <p className='text-sm font-medium leading-[1.6] mb-8'>Enter your login credentials to continue.</p>

                        {status && <div className="mb-7 font-medium text-sm text-green-600">{status}</div>}
                        
                        <form className='' method='post' onSubmit={submit}>
                            <div className="mb-5 relative">
                                <InputLabel htmlFor="email" value="Email" />
                                <input
                                    id='email'
                                    type="email" 
                                    name="email"  
                                    value={data.email}
                                    autoComplete='username'
                                    placeholder="Email Address" 
                                    onChange={(e) => setData('email', e.target.value)}
                                    className='w-full py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg'
                                />
                                <InputError message={errors.email} className="mt-2  dark:text-red-400" />
                            </div>


                            <div className="mb-5 relative">
                                <InputLabel htmlFor="password" value="Password" />
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    placeholder="Password" 
                                    onChange={(e) => setData('password', e.target.value)}
                                    className='w-full py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg'
                                />
                                <InputError message={errors.password} className="mt-2 dark:text-red-400" />
                            </div>

                            <div className="mb-3">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">Remember me</span>
                                </label>
                            </div>

                            <div className='text-center'>
                                <PrimaryButton className="w-full inline-flex items-center justify-center gap-2 items-bottom bg-primary dark:bg-[#F17600] dark:hover:bg-primary dark:hover:text-white dark:text-white hover:bg-primary-light rounded-md font-semibold px-2 py-3 transition-all duration-300 ease-in  text-white" disabled={processing}>
                                { (processing) ? <Loader /> : (<div className='flex items-center'><span>Log In</span> <IoLogInOutline className="w-6 h-6"  /> </div>)}
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
