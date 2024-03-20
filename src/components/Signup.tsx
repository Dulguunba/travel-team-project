import React, { useEffect, useState } from 'react'
import { Fonthideeye } from './icons/Fonthideeye';
import { Fonteye } from './icons/Fonteye';
import { Check } from './icons/Check';
import { Checked } from './icons/Checked';
import * as yup from 'yup';
// import { userSchema } from '../Validations/UserValidations';
import axios from 'axios'

export const Signup = () => {
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [email, setEmail] = useState('');
    const [toggle, setToggle] = useState('hide');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [retoggle, setRetoggle] = useState('hide');
    const [check, setCheck] = useState('check');
    const [user, setUsers] = useState('');
    const BASE_URL = 'http://localhost:8080/'
    const checkBtn = () => {
        if (check === 'check') {
            setCheck('checked')
        }
        else {
            setCheck('check')
        }
    }
    const toggleBtn = () => {

        if (toggle === 'hide') {
            setToggle('seek')
        }
        else {
            setToggle('hide')
        }
    };
    useEffect(() => {
        if (password.length === 0) {
            setToggle('none')
        }
        if (password.length === 1) {
            setToggle('hide')
        }
    });
    const retoggleBtn = () => {
        if (retoggle === 'hide') {
            setRetoggle('seek')
        }
        else {
            setRetoggle('hide')
        }
    };
    useEffect(() => {
        if (repassword.length === 0) {
            setRetoggle('none')
        }
        if (repassword.length === 1) {
            setRetoggle('hide')
        }
    });
    const createUser = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            const userData = {
                name: name,
                email: email,
                password: password,
            };
            if (password === repassword) {
                const sendUserdata = await axios.post(
                    "http://localhost:8080/users",
                    userData
                );
                alert("successfully created ");
            } else {
                alert("password tohirohgvi bn ");
            }
        } catch (err) {
            console.log("err axios", err);
        }
    };

    const signUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    const fetchdata = async () => {
        try {
            const res = await fetch("http://localhost:8080/signup");
            const data = await res.json()
            setUsers(data)
        }
        catch (err) {
            console.error(err)
        }
    }


    return (

        <div className='flex justify-center items-center'>
            <div className='w-[88%] max-w-[1200px] flex justify-center px-6 py-[80px] items-center'>
                <form onSubmit={createUser} className='flex gap-8 justify-center items-center flex-col'>
                    <h1 className='font-bold text-[28px]'>Бүртгүүлэх</h1>
                    <div className='py-4'>

                        <h2 className='font-normal pb-1 text-sm'>Нэр</h2>
                        <input className='border-[1px] bg-[#F7F7F8] rounded p-4 w-[384px] border-[#ECEDF0] flex items-center justify-between' onChange={e => setName(e.target.value)} value={name} type="gmail" placeholder='Нэрээ оруулна уу' />

                        <h2 className='font-normal pb-1 text-sm'>Имэйл</h2>
                        <input className='border-[1px] bg-[#F7F7F8] rounded p-4 w-[384px] border-[#ECEDF0] flex items-center justify-between' onChange={e => setEmail(e.target.value)} value={email} type="gmail" placeholder='Имэйл хаягаа оруулна уу' />

                        <h2 className='font-normal pb-1 text-sm'>Хаяг</h2>
                        <input className='border-[1px] bg-[#F7F7F8] rounded p-4 w-[384px] border-[#ECEDF0] flex items-center justify-between' onChange={e => setAddress(e.target.value)} value={address} type="gmail" placeholder='Та хаягаа оруулна уу' />

                        <h2 className='font-normal pb-1 text-sm'>Нууц үг</h2>
                        <div className='border-[1px] bg-[#F7F7F8] rounded p-4 w-[384px] border-[#ECEDF0] flex items-center justify-between' >
                            <input className='bg-[#F7F7F8] ' value={password} onChange={e => setPassword(e.target.value)} type={`${toggle === 'hide' ? 'password' : 'text'}`} placeholder='Нууц үгээ оруулна уу' />
                            <div className={`${toggle == 'none' ? 'hidden' : 'block'}`} onClick={toggleBtn}>
                                {toggle === 'hide' ? <Fonthideeye /> : <Fonteye />}
                            </div>
                        </div>

                        <h2 className='font-normal pb-1 text-sm'>Нууц үг давтах</h2>
                        <div className='border-[1px] bg-[#F7F7F8] rounded p-4 w-[384px] border-[#ECEDF0] flex items-center justify-between' >
                            <input className='bg-[#F7F7F8] ' value={repassword} onChange={e => setRepassword(e.target.value)} type={`${retoggle === 'hide' ? 'password' : 'text'}`} placeholder='Нууц үгээ оруулна уу' />
                            <div className={`${retoggle == 'none' ? 'hidden' : 'block'}`} onClick={retoggleBtn}>
                                {retoggle === 'hide' ? <Fonthideeye /> : <Fonteye />}
                            </div>
                        </div>
                        <div onClick={checkBtn} className='flex justify-start items-start pt-12 gap-2'>
                            {check === 'check' ? <Check /> : <Checked />}
                            <h3>Үйлчилгээний нөхцөл зөвшөөрөх</h3>
                        </div>
                    </div>

                    <button type='submit' className='w-[384px] border-[1px] border-green text-[#272727] py-[14.5px] rounded'>
                        Бүртгүүлэх
                    </button>
                </form>
            </div>
        </div>
    )
}
