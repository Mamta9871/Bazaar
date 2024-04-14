import React from 'react'
import {useSelector} from 'react-redux'
import { logo } from '../assets/asset'
import { Link } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData)
  const userInfo = useSelector((state)=> state.bazar.userInfo)
  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
           <Link to="/">
              <div>
                <img className='w-60' src={logo} alt="logo" />
              </div>
           </Link>
            <div className='flex items-center gap-8'>
              <ul className="flex item-center gap-8">
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shops</li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
              </ul>
             <Link to='/cart'>
              <div className='relative'>
                  <h1>
                  <ShoppingBagOutlinedIcon fontSize="large"/>
                  </h1>
                  <span className='absolute w-full top-3 left-0 text-sm flex items-center
                  justify-center font-semibold'>{productData.length}</span>
                </div>
             </Link>
              <Link to="/Login">
                <img className='w-8 h-8 rounded-full'
                  src={
                    userInfo
                      ? userInfo.image
                      : "https://images.pexels.com/photos/250575/pexels-photo-250575.jpeg"
                  } alt="userlogo" />
              </Link>
              {
                userInfo && <p>{userInfo.name}</p>
              }
            </div>
        </div>
    </div>
  )
}

export default Header