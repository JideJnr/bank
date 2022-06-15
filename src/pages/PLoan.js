import React from 'react'
import Equity from './../assets/Equity/Equity.jpg';
import Mortgage from './../assets/Equity/Mortgage.jpg';



function PLoan() {
  return (
    <div className='w-screen bg-[#eee]  '>
        <div className=' w-fill bg-blue-700 text-center p-5 '>
          <p className=' text-3xl my-5 p-5'>Personal Loan and Line of Credit</p>
          <p className='text-xl my-3 p-3 '>For everything from consolidating debt to preparing for life's big moments, Pego can help you achieve your goals.</p>
        </div>

        <div className='w-full p-5 '>
            <div className=' justify-center md:flex'>

                <div className='border rounded-2xl max-w-[300px]  p-5 m-3 bg-white '>
                    <p className='text-xl mb-5'>Personal Loan</p>
                    <div className=' text-left'>  
                        <li className='m-1 p-2'> Make a large purchase </li>
                        <li className='m-1 p-2  '> Consolidate debt </li>
                        <li className='m-1 p-2 '> Receive funds all at once </li>
                    </div>
                    <button className='bg-blue-300  m-5 h-10 w-48 rounded-2xl'> Apply Now </button>
                </div>
                
                <div  className='border rounded-2xl max-w-[300px]  p-5 m-3 bg-white'>
                    <p className='text-xl mb-5'> Checking Plus® (variable rate) Line of Credit</p>
                    <div className=' text-left'>  
                        <li className='m-1 p-2'> Overdraft protection </li>
                        <li className='m-1 p-2'>Prepare for the unexpected </li>
                        < li className='m-1 p-2'> Avoid bounced checks </li>
                    </div>
                    <button className='bg-blue-300  m-5 h-10 w-48 rounded-2xl '> Learn More </button>

                </div>


            </div>
        </div>
        
        <div className='w-full p-5 bg-black text-white'>
            <p className='   text-center text-2xl m-3 p-5'>Apply Now</p>
          
            <div>
                <div className='flex border m-3 p-5  items-center'>
                    <div className='m-2 p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>

                
                <div className='flex-cols '>
                        <p>Apply In Person</p>
                        <p>Find Your Nearest Pego Branch</p>
                </div>

                </div>

                <div className='flex border m-3 p-5 items-center'>
                    <div className='m-2 p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>
              
                    <div className='flex-col'>
                        <p>1-877-362-9100</p>
                        <p>Mon - Sun, 9:00 a.m. - 11:00 p.m. ET</p>
                    </div>
                    
                </div>
            </div>

        </div>

        <div className='w-full p-5 flex-col  text-left'>
            <div className='p-5 '>
                <div  className=' max-w-xl  '> 
                    <img src={Equity} alt=''/>
                </div>
                
                <div className='p-5  border bg-white -mt-5 max-w-xl ml-5'>
                  <p className='text-2xl  mb-5'>Mortgage</p>
                  <p>Looking for a mortgage? We can help make your dream home a reality. 
                      Pego offers expert guidance and online tools to support you every step of the way to buying a home.</p>
                  <p>Learn More About Mortgage Loan</p>
                </div>
            </div>

            <div className='p-5 '>
             
                <div className=' max-w-xl ml-5'>
                   <img src={Mortgage} alt=''/>
                </div>
                
                <div className='p-5  border bg-white -mt-5 max-w-xl '>
                  <p className='text-2xl  mb-5'>Home Equity</p>
                  <p>Want to borrow money using the equity of your current home for major improvements, 
                      other large purchases or debt consolidation? We have many options to suit your needs.</p>
                </div>
            </div>


        </div>

        <div className=' w-full p-3 border-2 bg-black text-white text-[12px]'>
            <p className='p-2'> Credit cards issued by Pegobank, N.A. or its affiliates, as well as Checking Plus and Ready Credit accounts, are not eligible for debt consolidation, and Pegobank will not issue payoff checks for these accounts. If you are unsure of the issuer on the account, please visit http://www.Pego.com/affiliatesproducts for a list of Pego products and affiliates.</p>
            <p className='p-2'>Checking Plus (variable rate) line of credit will prevent a check from being returned unpaid only to the extent your line of credit is unused and available for this purpose.</p>
            <p className='p-2'>With Custom Credit Line, you may access funds up to your available credit line.</p>
            <p className='p-2'>Rates as of 1/27/2022. Your APR may be as low as 8.24% variable APR or as high as 20.24% variable APR (may vary by state). Lowest rate quoted above assumes the use of Auto Deduct (established at loan closing with monthly debits from a qualifying deposit account) for repayment, adequate Pego relationship balances, and an excellent credit history. Lower rates are available for Pegogold and Pego Priority ustomers and customers with $200,000 or more in eligible relationship balances. If you are in default, your Annual Percentage Rate may increase by 2.00%. Annual Fee of $50 waived for Pegogold and Pego Priority customers and anyone who takes a loan or makes a payment on their account once during the year.</p>
        </div>

    </div>
  )
}

export default PLoan