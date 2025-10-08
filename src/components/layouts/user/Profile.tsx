import React from 'react'
import Container from './Container'
import { PiUserCircleBold } from "react-icons/pi"
import { CiMoneyCheck1 } from "react-icons/ci"
import { FaHome } from "react-icons/fa"
import ProfileNav from './ProfileNav'
import Image from 'next/image'
import { FaCamera } from "react-icons/fa"
import { RiEditFill } from "react-icons/ri"
import { FaUserLarge } from "react-icons/fa6"
import { FaMapLocationDot } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"
import { FaTruckFront } from "react-icons/fa6"
import { FaSignal } from "react-icons/fa"
import ProfileDetails from './ProfileDetails'
import { GoDotFill } from "react-icons/go";

const Profile = () => {
    return (
        <Container>
            <div className='w-full h-[90vh] mx-auto md:w-[60%]'>
                <div className='flex'>
                    <div className='w-[40%] h-[90vh] flex flex-col gap-2 mt-2 px-2 lg:w-[20%]'>
                        <ProfileNav href='/' content="Home">
                            <FaHome />
                        </ProfileNav>
                        <ProfileNav href='/profile' content="Profile">
                            <PiUserCircleBold />
                        </ProfileNav>
                        <ProfileNav href='/order' content="Orders">
                            <CiMoneyCheck1 />
                        </ProfileNav>
                    </div>
                    <div className='w-[60%] h-[90vh] lg:w-[80%]'>
                        <div className='bg-[#F5D57A] mx-2 flex flex-col my-2 py-6 rounded-2xl px-2 lg:w-full lg:flex-row lg:px-8'>
                            <div className='w-full h-[180px] bg-white relative rounded-xl lg:w-[250px] lg:h-[250px]'>
                                <Image 
                                    src='/user_image.jpg'
                                    width={100}
                                    height={100}
                                    alt='profile image'
                                    className='w-full h-full rounded-xl'
                                />
                                <div className='py-1 absolute bottom-0 flex items-center justify-center text-sm md:text-md w-full gap-2 bg-gray-400 rounded-b-xl text-black'>
                                    <FaCamera />
                                    <span className='font-semibold'>Add</span>
                                </div>
                            </div>
                            <div className='lg:w-full lg:flex-1'>
                                <div className='w-full'>
                                    <div className='flex gap-1 items-center justify-end text-black text-sm md:text-md py-2'>
                                        <span>
                                            <RiEditFill />
                                        </span>
                                        <span className='font-semibold'>Edit</span>
                                    </div>
                                </div>
                                <div className='hidden lg:flex px-4 flex-col gap-4 justify-between'>
                                    <div className='text-black gap-2'>
                                        <h1 className='text-4xl font-bold text-black'>Melto</h1>
                                        <p className='flex items-center'>
                                            <span className='text-md font-bold'>Status</span>
                                            <span><GoDotFill className='text-green-600'/></span>
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-7 justify-between'>
                                        <div className='flex flex-col justify-center items-center'>
                                            <FaMapLocationDot className='text-[4rem] text-black' />
                                            <p className='text-black font-semibold text-md'>TamilNadu</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <FaLocationDot className='text-[4rem] text-black' />
                                            <p className='text-black font-semibold text-md'>Nagercoil</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <FaTruckFront className='text-[4rem] text-black' />
                                            <p className='text-black font-semibold text-md'>2</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <FaSignal className='text-[4rem] text-black' />
                                            <p className='text-black font-semibold text-md'>Online</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:hidden'>
                                    <ProfileDetails content='Melto'>
                                        <FaUserLarge />
                                    </ProfileDetails>
                                    <ProfileDetails content='State'>
                                        <FaMapLocationDot />
                                    </ProfileDetails>
                                    <ProfileDetails content='City'>
                                        <FaLocationDot />
                                    </ProfileDetails>
                                    <ProfileDetails content='Orders'>
                                        <FaTruckFront />
                                    </ProfileDetails>
                                    <ProfileDetails content='Status'>
                                        <FaSignal />
                                    </ProfileDetails>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Profile