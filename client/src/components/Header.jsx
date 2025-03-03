import React, { useEffect, useState } from 'react';
import logo from '/logook.png';
import Search from './Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FaMapMarkerAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import UserMenu from './UserMenu';
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees';
import { useGlobalContext } from '../provider/GlobalProvider';
import DisplayCartItem from './DisplayCartItem';
import LocationPopup from './LocationPopup';

const Header = () => {
    const location = useLocation();
    const isSearchPage = location.pathname === "/search";
    const navigate = useNavigate();
    const user = useSelector((state) => state?.user);
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const cartItem = useSelector(state => state.cartItem.cart);
    const { totalPrice, totalQty } = useGlobalContext();
    const [openCartSection, setOpenCartSection] = useState(false);
    const [openLocationPopup, setOpenLocationPopup] = useState(false);
    const [userLocation, setUserLocation] = useState("Select Location");

    const redirectToLoginPage = () => {
        navigate("/login");
    };

    return (
        <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center bg-white'>
            {!(isSearchPage) && (
                <div className='container mx-auto flex items-center px-4 justify-between'>
                    {/** Logo **/}
                    <div className='h-full flex items-center gap-4'>
                        <Link to={"/"} className='h-full flex justify-center items-center'>
                            <img src={logo} width={170} height={60} alt='logo' className='hidden lg:block'/>
                            <img src={logo} width={120} height={60} alt='logo' className='lg:hidden'/>
                        </Link>
                        {/** Location Box **/}
                        <div 
                            className='flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200' 
                            onClick={() => setOpenLocationPopup(true)}
                        >
                            <FaMapMarkerAlt className='text-red-600' size={20} />
                            <p className='text-sm font-medium text-gray-800'>{userLocation}</p>
                        </div>
                    </div>

                    {/** Search **/}
                    <div className='hidden lg:block'>
                        <Search/>
                    </div>

                    {/** User and Cart **/}
                    <div className='flex items-center gap-6'>
                        {user?._id ? (
                            <div className='relative'>
                                <div onClick={() => setOpenUserMenu(prev => !prev)} className='flex items-center gap-1 cursor-pointer'>
                                    <p>Account</p>
                                    {openUserMenu ? <GoTriangleUp size={25}/> : <GoTriangleDown size={25}/>}
                                </div>
                                {openUserMenu && (
                                    <div className='absolute right-0 top-12 bg-white rounded p-4 shadow-lg min-w-52'>
                                        <UserMenu close={() => setOpenUserMenu(false)} />
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button onClick={redirectToLoginPage} className='text-lg px-2'>Login</button>
                        )}
                        <button 
                            onClick={() => setOpenCartSection(true)} 
                            className='flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 rounded text-white'
                        >
                            <BsCart4 size={26} className='animate-bounce' />
                            <div className='font-semibold text-sm'>
                                {cartItem[0] ? (
                                    <div>
                                        <p>{totalQty} Items</p>
                                        <p>{DisplayPriceInRupees(totalPrice)}</p>
                                    </div>
                                ) : (
                                    <p>My Cart</p>
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            )}

            <div className='container mx-auto px-2 lg:hidden'>
                <Search/>
            </div>

            {openCartSection && <DisplayCartItem close={() => setOpenCartSection(false)}/>}
            {openLocationPopup && <LocationPopup setUserLocation={setUserLocation} close={() => setOpenLocationPopup(false)}/>}
        </header>
    );
};

export default Header;