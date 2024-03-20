import React, { useEffect, useState } from 'react'
import { Fonthideeye } from './icons/Fonthideeye';
import { Fonteye } from './icons/Fonteye';
import { useRouter } from 'next/router';

export const Login = () => {

    const [password, setPassword] = useState('');
    const [toggle, setToggle] = useState('hide')
    const [email, setEmail] = useState('');
    const router = useRouter()
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
        if (password.length != 0) {
            setToggle('hide')
        }
    });

    const fetchdata = async () => {
        try {
            const res = await fetch("http://localhost:8080/login");
            const data = await res.json()
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleLogIn = async () => {
        try {
            if (email == " ") {
                alert("email esvel password hooson baina ")
            }
            if (password == " ") {
                alert("email esvel password hooson baina")
            }
            if (password && email) {
                const response = await fetch('http://localhost:8080/login', {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
                if (!response.ok) {
                    return alert("password eswel email buruu baina")
                }
                router.push("/")
                const refreshToken = getRefreshTokenFromCookies();
                console.log("your refresh token is: ", refreshToken)

                localStorage.setItem("refreshToken", refreshToken);
                alert("success");



            }
        } catch (error) {
            alert(error);
        }

    };
    const getRefreshTokenFromCookies = () => {
        const cookies = document.cookie.split(";").reduce((acc: any, cookie) => {
            const [name, value] = cookie.split("=").map((c) => c.trim());
            acc[name] = value;
            return acc;
        }, {});
        return cookies.refreshToken;

    };

    useEffect(() => {
        fetchdata
    }, [])
    return (
        <div className='flex justify-center items-center'>
            <div className='w-[88%] max-w-[1200px] flex justify-center px-6 py-[110px] items-center'>
                <div className='flex gap-8 justify-center items-center flex-col'>
                    <h1 className='font-bold text-[28px]'>Нэвтрэх</h1>
                    <div className='py-4'>
                        <h2 className='font-normal pb-1 text-sm'>Имэйл</h2>
                        <input className='border-[1px] bg-[#F7F7F8] rounded p-4 w-[384px] border-[#ECEDF0] flex items-center justify-between' value={email} onChange={e => setEmail(e.target.value)} type="gmail" placeholder='Имэйл хаягаа оруулна уу' />
                        <h2 className='font-normal pb-1 text-sm'>Нууц үг</h2>
                        <div className='border-[1px] bg-[#F7F7F8] rounded p-4 w-[384px] border-[#ECEDF0] flex items-center justify-between' >
                            <input className='bg-[#F7F7F8] ' value={password} onChange={e => setPassword(e.target.value)} type={`${toggle === 'hide' ? 'password' : 'text'}`} placeholder='Нууц үг' />
                            <div className={`${toggle == 'none' ? 'hidden' : 'block'}`} onClick={toggleBtn}>
                                {toggle === 'hide' ? <Fonthideeye /> : <Fonteye />}
                            </div>
                        </div>
                        <h3 className='flex font-normal pb-1 text-sm justify-end pt-2 text-[#3F4145]'>Нууц үг сэргээх</h3>
                    </div>
                    <button onClick={handleLogIn} className='w-[384px] bg-[#EEEFF2] text-[#1C20243D] py-[14.5px] rounded'>
                        Нэвтрэх
                    </button>
                    <h3 className='flex font-normal pb-1 text-sm  pt-2 text-[#3F4145]'>Эсвэл</h3>
                    <button className='w-[384px] border-[1px] border-green text-[#272727] py-[14.5px] rounded'>
                        Бүртгүүлэх
                    </button>
                </div>
            </div>
        </div>
    )
}
