import React from 'react'

import Checking from './../assets/body/checking.jpg';
import Family from './../assets/body/family.jpg';
import Reward from './../assets/body/reward.jpg';
import Action from './../assets/body/action.jpg'
import Fraud from './../assets/body/fraud.jpg'
import Client from './../assets/body/client.jpg'
import Card from './../assets/body/card.png';
import Sidebar from './../component/Sidebar'
import { Link } from 'react-router-dom';
import SigninForm from '../client/component/SigninForm';



function Main() {
  return (
    <div className=' flex-col w-screen h-full bg-[#eee] p-5 items-center'>

        <Sidebar/>

       
            <div className='flex lg:h-[27rem] h-[1px] item-center bg-slate-800 w-full  p-10  invisible lg:visible mt-10'>
            
            <div className=' justify-center items-center flex-col w-1/3 p-5'>

                    <p className='text-sm text-white p-2 '>  CITI® CREDIT CARDS </p> 
                    <p className='text-3xl text-white p-2 ' >     Choose the right Citi® credit card for you </p>
                    <p className='text-base text-white p-2'>    Whether you want Cash Back, Great Airline Miles, Rewards for Costco Members,or a Low Intro Rate, the choice is all yours.</p>
                    <button className='px-6 mx-6  h-8 text-blue-700 w-[120px] bg-white font-bold rounded text-xs'>
                        Learn More
                    </button>  

            </div>
            
            <div className='flex w-1/3 p-5 justify-center items-center'>

            <img  src={Card} alt=''/>     
            
            </div>

            <div className='justify-center items-center flex-col w-1/3 p-5 h-fit '>
                    <SigninForm/>
    
            </div>


            </div>
       


        <div className=' p-2 m-3 md:flex md:w-full'>

            <div className=' border-2 rounded-xl p-5 m-3  bg-white max-w-[400px]'>
            
                <p className='text-base font-bold mb-2 p-3'>
                    Checking Made Simple
                </p>

                <img className='  mb-2' src={Checking} alt=''/>

                <p className='text-base mb-2 p-3'>

                    Enjoy checking with 24/7 digital banking 
                    and no minimum opening deposit.

                </p>
                <Link to='ckn'>
                    <button className='w-[150px] my-3 px-5 text-xs text-white font-bold h-9 bg-[#056dae] border-[#056dae] rounded-lg border-2'>

                        Compare Accounts

                    </button>
                </Link>

            </div>

            <div className='border-2 rounded-xl p-5 m-3  bg-white max-w-[400px]'>

                <p className='text-base font-bold mb-2 p-3'>     
                    Simplify Your Savings
                </p>

                <img className=' w-full' src={Family} alt=''/>

                <p className='text-base mb-2 p-3 '>

                Easy to access and simple to manage, 
                a Pego Savings Account could be right for you.

                </p>
                <Link to='svn'>
                <button className='w-[150px] my-3 px-5 text-xs text-white font-bold h-9 bg-[#056dae] border-[#056dae] rounded-lg border-2'>

                    Learn More

                </button>
                </Link>
            

            </div>

            <div className='border-2 rounded-xl p-5 m-3  bg-white max-w-[400px] '>

                <p className='text-base font-bold mb-2 p-3'>
                    Earn 20,000 bonus points
                </p>

                <img className='w-full ' src={Reward} alt=''/>

                <p className='text-base mb-2 p-3 '>

                    After qualifying purchases plus our 
                    low intro APR for over one year.

                </p>
            <Link to='rwd'>
                <button className='w-[150px] my-5 px-5 text-xs text-white font-bold h-9 bg-[#056dae] border-[#056dae] rounded-lg border-2'>

                    Learn More

                </button>
            </Link>
            </div>

        </div>

        <div>
            <div className='p-3 m-2 bg-white md:flex'>
                <div className='p-3 md:w-1/2'>
                    <img src={Client} alt=''/>
                </div>

                <div className='p-3 md:w-1/2'>  
                    <p className='text-sm p-2 '> YOUR SAVINGS MADE SIMPLE </p>
                    <p className='text-3xl p-2'> How to Choose the Right Bank Account </p>
                    <p className='p-2'> Here's a simple guide to the main types of accounts you can open at a bank. </p>        
                    <button className='w-[220px] h-[50px] m-5 px-5 text-xs text-white font-bold bg-[#056dae] border-[#056dae] rounded-lg border-2'>
                        Compare Accounts
                    </button>
                </div>
                
            </div>

            <div className=' p-3 m-2 bg-white md:flex'>
                <div className='p-3 md:w-1/2' >
                        <p className='text-3xl p-2'> Scams Are on the Rise in 2022, Here's What to Watch Out For </p>
                        <p className='p-2'> From romantic ploys to social engineering, learn about scams to watch for, and tips to help protect yourself.</p>        
                        <button className='w-[220px] h-[50px] m-5 px-5 text-xs text-white font-bold  bg-[#056dae]
                        border-[#056dae] rounded-lg border-2'> Compare Accounts </button>
                </div>
                
                <div className='p-3 md:w-1/2'>
                        <img src={Fraud} alt=''/>
                </div>

            </div>

            <div className=' p-3 m-2 bg-white  md:flex'>
                <div className='p-3 md:w-1/2'>
                    <img classname=' w-full md:w-1/2 h-75 p-5  ' src={Action} alt=''/>
                </div>

                <div className='p-3 md:w-1/2 '>
                    <p className='text-sm p-2 '>    RACIAL EQUITY AT Pego   </p>
                    <p className='text-3xl p-2'>    Action for Racial Equity    </p>
                    <p className='p-2'>
                        We're marshaling the talent and capabilities of our institution like never before to help communities of color build wealth and strong financial futures.
                    </p>        
                    <button className='w-[220px] h-[50px] m-5 px-5 text-xs text-white font-bold  bg-[#056dae] 
                    border-[#056dae] rounded-lg border-2'>  
                        Learn More
                    </button>

                </div>

            </div>

        </div>

    </div>


  )
}

export default Main