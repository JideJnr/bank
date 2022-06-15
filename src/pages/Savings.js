import React from 'react';
import Security from './../assets/Saving/security.jpg'
import Digital from './../assets/Saving/digital.jpg'
import Location from './../assets/Saving/location.jpg'


function Savings() {
  return (
    <div>
       <div className='bg-blue-600  w-screen flex p-5 font-bold text-white h-[400px]'>

            <div className='md:w-1/2 flex-cols  w-full p-5 text-center'>
                <p className='text-base  p-2 mb-2 '>   Pego® SAVINGS ACCOUNT   </p>
                <p className='text-2xl text-white p-2 mb-2 '> Simplify Your Savings </p> 
                <p className=' p-2 mb-2' >     Easy to access and simple to manage, a Pego Savings Account could be right for you.</p>
            </div>

        </div>

        <div className=' flex justify-center'>
            <div className='  p-3 text-center max-w-xl -mt-10 w-full border rounded-2xl  bg-white'>
                        <p className='text-2xl m-3 p-5'>Pego® Savings Account</p>
                        <p className='text=base m-3 p-5'> Enjoy easy access to your funds while you earn interest. 
                            Then, simplify the way you save by setting up automatic 
                            transfers and linking your accounts to help meet balance 
                            requirements and avoid monthly fees.
                        </p>
            </div>
        </div>

        <div className=' grid sm:grid-cols-2 grid-cols-1 text-left p-5  '>

            <div className=' border border-black p-3 m-2 max-w-md'>
                <p className='text-2xl text-center mb-3'>Benefits of a Pego® Savings Account</p>
                <li className='mb-3 text-sm'> Ability to earn higher rates as your balance grows, depending on your package </li>
                <li className='mb-3 text-sm'>Option to make automatic transfers with Auto Save</li>
                <li className='mb-3 text-sm'>Security of FDIC insurance</li>
                <li className='mb-3 text-sm'>Ability to write checks</li>
                <li className='mb-3 text-sm'>No minimum opening deposit</li>
            </div>

            <div className=' border border-black p-3 m-2 max-w-md'> 
            <p className='text-2xl mb-2 text-center'>To open a Pego Savings Account</p>
            <li className='mb-3 text-sm'>Your savings account will be opened within a package that determines interest rates, balance requirements, benefits and more</li>
            <li className='mb-3 text-sm'>Already a Pego banking customer? Sign on to apply and add a Pego Savings account to your existing banking package.</li>
            <li className='mb-3 text-sm'>Not yet a banking customer? Explore our package tiers and apply below.</li>
            </div>

        </div>

        <div className=''>
            <div>
                <p className='m-2 p-3 text-2xl text-center'>    Pego® Savings Account details   </p>
            </div>

     
            <div className='p-3 m-2 text-left grid grid-cols-1 md:grid-cols-2'>
                    <div className='  p-3 m-2 border border-black rounded-2xl max-w-md  '>
                        <p className='font-bold '>   Get started </p>
                        <p className='text-sm'> Link your Pego Savings Account to a Pego Checking Account or another non-Pego account to start transferring funds and saving toward your goals.</p>
                    </div>

                    <div className='  p-3 m-2 border border-black rounded-2xl max-w-md '>
                        <p className='font-bold '> Save automatically  </p>
                        <p className='text-sm'> Use Auto Save to set up recurring automatic transfers to your Pego Savings account from non-Pego accounts or your linked Pego checking account.</p>
                    </div>

                    <div className='   p-3 m-2 border border-black rounded-2xl max-w-md'>
             
                        <p className='font-bold '>   Waive your monthly service fee  </p>
                        <p className='text-sm'> Opening a Pego Savings Account in a Basic or Access Account package? Maintain an average monthly balance of $500 to waive your $4.50 monthly service fee. No matter which package you choose, link your accounts for an easier way to meet balance requirements and avoid monthly fees.</p>
                    </div>
            

                    <div className='  p-3 m-2 border border-black rounded-2xl max-w-md '>
                        <p className='font-bold '>   Overdraft protection   </p>
                        <p className='text-sm'> Sign up for Safety Check to use your Pego Savings Account to cover overdrafts   </p>
                    </div>

                    <div className='  p-3 m-2 border border-black rounded-2xl max-w-md'>  
                     
                        <p className='font-bold  '>   No minimum opening deposit  </p>
                        <p className=' text-sm'>   There is no minimum deposit needed to open a Pego Savings Account.  </p>
                        
                    </div>
                  
            </div>

        </div>

        <div className='flex-col '>
            <div>
                <p className='font-bold  text-2xl text-left p-5'>Open your savings account in a package that fits your needs</p>
            </div>

            <div className='text-left p-5'>
                <p>Your Pego Savings Account will be opened as a part of a Pego banking package. These packages help determine your interest rates, 
                    monthly minimum balance requirements, benefits and more. Choose from the following packages</p>
                <p>To apply online, you must be a U.S. Pegozen or resident and at least 18 years old. You'll need to provide a physical address in the U.S., 
                    date of birth and Social Security number for all applicants.</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='border p-3 m-2 max-w-sm'>
                    <p className='text-2xl px-3 py-5 font-bold'>Pego Gold</p>
                    <div  className='text-sm'>
                        <p className=' p-2'>Your own dedicated team, including a Pegogold Relationship Manager</p>
                        <p className=' p-2'> Guidance from a Pego Personal Wealth Management Financial Advisor6</p>
                        <p className=' p-2'>Access to market insights and world-class investment capabilities</p>
                        <p className=' p-2'>Preferred pricing and rates on select deposit products and services</p>
                        <li className='text-xs '>Package includes an Interest Checking Account and Pego Savings Account upon opening.</li>
                        <li className='text-xs  '>No Monthly Service Fee</li>
                    </div>
                        <button className='bg-blue-300 w-[200px] h-10 px-5 rounded-xl'>Apply Now </button>
                </div>

                <div className='border p-3 m-2 max-w-sm '>
                    <p  className='text-2xl px-3 py-5 font-bold'>Pego Priority</p>
                    <div  className='text-sm'>
                    <p className=' p-2'>Guidance from a Pego Personal Wealth Management Financial Advisor over the phone</p>
                    <p className=' p-2'>Investment resources to simplify your financial decisions</p>                    
                    <p className='p-2 '>Preferred pricing and rates on select deposit products and services</p>
                    <li className='text-xs'>Package includes a Regular or Interest Checking Account and Pego Savings Account upon opening. Monthly service fee can be waived if required balances are maintained.</li>
                    <li className='text-xs'>No Monthly Service Fee</li>
                    </div>
                    <button className='bg-blue-300 w-[200px] h-10 px-5 rounded-xl'>Apply Now </button>
                </div>

                <div  className='border p-3 m-2 max-w-sm  '>
                <p  className='text-2xl px-3 py-5 font-bold'> Pego Account</p>
                <div className='text-sm'>
                    <p  className=' p-2'>No Pego fee for using non-Pego ATMs when monthly balance requirements met</p>
                    <p  className=' p-2'>Relationship-based pricing on select deposit products and services</p>
                    <p  className=' p-2'>Potential to earn higher interest rates on savings and money market accounts</p>               
                    <li  className='text-xs'>Package includes a standalone Pego Savings Account upon opening. Link to a Regular or Interest Checking Account and maintain required balances to avoid monthly service fees.</li>
                    <li  className='text-xs'>No Monthly Service Fee</li>
                </div>
                <button className='bg-blue-300 w-[200px] h-10 px-5 rounded-xl'>Apply Now </button>
                </div>

                <div className='border p-3 m-2 max-w-sm  '>
                <p  className='text-2xl px-3 py-5 font-bold'>Basic Banking</p>
                    <div className='text-sm'>
                    <p className=' p-2'>  Low minimum monthly balance requirements</p>
                    <p className=' p-2'>Easy ways to waive your monthly service fee</p>
                    <p className=' p-2'>Unlimited check writing when opened with a checking account</p>
                    <li  className='text-xs'>Package includes a standalone Pego Savings Account upon opening. Link to a Regular Checking Account and perform qualifying activities to avoid monthly service fees.</li>
                    <li  className='text-xs'>No Monthly Service Fee</li>
                    </div>
                <button className='bg-blue-300 w-[200px] h-10 px-5 rounded-xl'>Apply Now </button>
                </div>

                <div className='border p-3 m-2 max-w-sm '>
                    <p  className='text-2xl px-3 py-5 font-bold'>Access Account</p>
                    <div className='text-sm' >
                        <p className=' p-2'>Low minimum monthly balance requirements</p>
                        <p className=' p-2'>Easy ways to waive your monthly service fee</p>
                        <p  className='text-xs '>Package includes a standalone checkless Pego Savings Account upon opening. Link to a checkless Regular Checking Account and perform qualifying activities to avoid monthly service fees.</p>
                        <p  className='text-xs '>No Monthly Service Fee</p>
                    </div>
                <button className='bg-blue-300 w-[200px] h-10 px-5 rounded-xl'>Apply Now </button>
                </div>
            
            </div>

            <p className='text-sm m-2 p-3'>Already a Pego banking customer?  </p>

    

        </div>

        <div className='w-full  p-5 m-3'>
            <p className='text-center text-2xl'>Why Pego?</p>

                <div className='grid grid-cols-1 md:grid-cols-3 text-left m-2 p-3 items-center'>
                    <div className=' m-2 p-3 border'>
                        <div >
                            <img src={Location} alt=''/>
                        </div>
                        <div className='m-2 p-3'>
                            <p className='font-bold'>Convenient locations</p>
                            <p>With ATMs and branches in the places you live, work and play, you're never far from your money.</p> 
                        </div>
                    
                    </div>

                    <div className='m-2 p-3 border'>
                        <div>
                            <img src={Digital} alt=''/>
                        </div>
                        <div>
                            <p className='font-bold'>Practical digital tools</p>
                            <p>Our award-winning website and mobile app make it easy to bank virtually anywhere, anytime.</p> 
                        </div>
                    
                    </div>

                    <div className=' m-2 p-3 border'>
                        <div>
                            <img src={Security} alt=''/>
                        </div>
                        <div>
                            <p className='font-bold'>Safety & security</p>
                            <p>We take measures to help protect your account with ongoing fraud monitoring, activity notifications and alerts. 
                            Plus, you have automatic access to Pego® Identity Theft Solutions should the need ever arise.</p>
                        </div>

                    </div>
                </div>
        </div>

        <div className='border-black border text-center  p-3 my-2 '>
            <p>
            INVESTMENT AND INSURANCE PRODUCTS : NOT INSURED BY THE FDIC • NOT INSURED BY THE FEDERAL GOVERNMENT OR ANY OTHER FEDERAL GOVERNMENT AGENCY, BY THE BANK, OR BY ANY AFFILIATE OF THE BANK • NOT A DEPOSIT OR OTHER OBLIGATION OF, OR GUARANTEED BY, THE BANK OR AN AFFILIATE OF THE BANK • SUBJECT TO INVESTMENT RISK, INCLUDING POSSIBLE LOSS OF THE PRINCIPAL INVESTED
            </p>
        </div>

    </div>
  )
}

export default Savings