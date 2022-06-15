import React from 'react'
import AtmAccess from './../assets/Checking/atm_access.png'
import Security from './../assets/Checking/security.png'
import Talk from './../assets/Checking/talk_in_person.png'
import OnlineBanking from './../assets/Checking/online_banking.png'
import Zelle from './../assets/Checking/send_money_zelle.png'
import NeedHelp from './../assets/Checking/need_help.png'
import Movement from './../assets/Checking/movement.png'
import DigitalWallet from './../assets/Checking/digital_wallet.png'
import AlreadyApplied from './../assets/Checking/already_applied.png'


function Checking() {
  return (
    <div className='flex-col bg-[#eee] w-screen  justify-center'>
        
        <div className='bg-blue-700 p-10 mb-5  w-full'>
          <div className=' flex-cols text-center'>
            <p className='text-sm text-white p-2 mb-2 '> 
              Pego® CREDIT CARDS 
            </p> 
               
            <p className='text-2xl text-white p-2 mb-2' >     
              Choose the right Pego® 
              credit card for you
            </p>
            <p className='text-base text-white p-2 mb-2'>
                       Whether you want Cash Back, 
                       Great Airline Miles, 
                       Rewards for Costco Members, 
                       or a Low Intro Rate, the choice is all yours.
            </p>
               
            <button className='px-6 mx-6  h-8 text-blue-700 w-[120px] bg-white font-bold rounded text-xs'>

              Learn More

            </button>  

          </div>
        </div>

        <div  className='w-full p-10 justify-center' >
            <div className='  p-5 text-center   max-w-md  m-3  border border-black rounded-2xl bg-white'>
                    <p className='text-2xl p-3 m-2 '>Pego Checking Accounts</p>
                    <p className='text-sm  p-3 m-2'> Open a checking account in one of our account packages.
                    Secure online banking, access to cash with one of the largest 
                    networks of fee-free ATMs in the U.S.3 and more –
                    available with every Pego checking account, whether
                    you select everyday or premium banking.
                    </p>
            </div> 
        </div>
      
        
        <div className='w-full'>
                <div  className=' p-3 text-center'>
                    <p className='mb-2 p-3 text-2xl text-center '>
                    Benefits of Pego Checking Accounts
                    </p>
                    <p className='mb-2 p-3  text-center '>
                        These are some of the great benefits included with all Pego checking accounts.
                    </p>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 p-5 text-center  border rounded-2xl bg-white mx-3 '>
                        <div className='flex  p-5 m-3 items-center  border border-black  max-w-md'>
                            <div>
                                <img className='' src={AtmAccess} alt=''/>
                            </div>
                            <div className='flex-col text-left p-3 mx-2'>
                                <p> ATM Access  </p>
                                <p> Access cash at 65,000+ fee-free ATMs across the U.S.  </p>
                            </div>
                        </div>

                        <div className='flex  p-5 m-3 items-center border border-black  max-w-md'>
                            <div>
                                <img    src={OnlineBanking} alt=''/>
                            </div>
                            <div>
                                <p> Online Banking  </p>
                                <p> Quickly check your account activity, pay bills and more without stepping into a branch. </p>
                            </div>
                        </div>

                        <div className='flex  p-5 m-3 items-center border border-black max-w-md'>
                            <div>
                                <img src={Movement} alt=''/>
                            </div>
                            <div>
                                <p> Seamless Money Movement </p>
                                <p> Send money to friends, transfer funds and deposit checks with easy-to-use digital services.</p>
                            </div>
                        </div>
                        
                        <div className='flex  p-5 m-3 items-center border border-black max-w-md'>
                            <div>
                                <img  src={DigitalWallet}  alt=''/>
                            </div>

                            <div>
                                <p> Digital Wallets  </p>
                                <p> Add your Pego Debit Card to mobile wallets to pay with confidence.  </p>
                            </div>
                   
                        </div>
                        
                        <div className='flex  p-5 m-3 items-center border border-black max-w-md'>  
                            <div>
                                <img src={Zelle} alt=''/>
                            </div>
                            <div>
                                <p> Send Money with Zelle®  </p>
                                <p> Send and request money directly from your Pego checking account.    </p>
                            </div>
                           

                        </div>
                  
                        <div className='flex  p-5 m-3 items-center border border-black max-w-md'>
                            <div>
                                <img src={Security} alt=''/>
                            </div>
                            <div>
                                <p> Security    </p>
                                <p> Our ID theft and monitoring solutions can help detect fraud or unauthorized use.    </p>
                            </div>
                   

                        </div>
                </div>
                
        </div>

       

        <div className='  text-white p-5 my-3 bg-black'>

            <div>
            <p className='mb-2 p-3  text-center text-2xl  '> Contact Us</p>
            <p className='mb-2 p-3 text-center  ' > Looking for another way to apply? Need a question answered? Give us a call or visit your nearest Pego branch.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 p-3  border rounded-2xl items-center justify-center text-left   text-white'>
                <div  className='flex p-3 m-2 border max-w-sm'>
                    <div className='w-1/4'> 
                        <img src={NeedHelp} alt=''/>    
                    </div>
                    <div className='w-3/4'>
                        <p>Need More Help?</p>
                        <p>1-800-374-9500</p>
                        <p>we're available daily 9AM to 11PM ET.</p>
                    </div>
                </div>

                <div className='flex p-3 m-2 border max-w-sm'>
                    <div className='w-1/4'>
                        <img src={Talk} alt=''/>
                    </div>
                    <div className='w-3/4'>
                        <p>Let's talk in person</p>
                        <p>Schedule an appointment</p>
                    </div>
                
                
                
                </div>

                <div className='flex p-3 m-2 border max-w-sm'>
                    <div className='w-1/4'>
                        <img src={AlreadyApplied} alt=''/>
                    </div>
                    <div className='w-3/4'>
                        <p>Already applied?</p>
                        <p>1-800-374-9500</p>
                        <p>We’re available Mon-Fri 8 AM to 5 PM ET.</p>
                    </div>
    
                </div>
            </div>
        
        </div>


    </div>
  )
}

export default Checking