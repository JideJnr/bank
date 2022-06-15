import React from 'react'
import First from './../assets/Svg/SVG.svg';
import Second from './../assets/Svg/svg2.svg';
import Third from './../assets/Svg/svg3.svg';
import Point from './../assets/Svg/point.svg';


function Reward() {
  return (
    <div>

        <div className=' text-left mb-10 p-5 m-3'>
        
          <p className= ' font-bold p-5 m-2' > 
          REWARDS CREDIT CARD POINTS AND PROGRAM DETAILS
          </p>
          <p className='p-5'>
          With the Pego Rewards+® Card, you can make the most of your everyday purchases by earning double ThankYou® Points at supermarkets and gas stations for the first $6,000 per year and then one point thereafter. Plus, earn one point per dollar spent on all other purchases. You can redeem for things like gift cards or for travel rewards. One of Pego's best rewards credit cards, the Pego Rewards+® Card gives you all this with a low introductory APR and no annual fee.*
          </p>
          <div className=' '>
              <div className='flex-col sm:w-1/2 w-full p-5 m-3 border border-black text-left'>
                    <div className='flex m-3 items-center'>
                        <div className='w-1/4'>
                        <img src={First} alt=''/>
                        </div>
                       
                        <div className='w-3/4'>
                            
                            <p className='text-xl'>Supermarkets & Gas Stations</p>
                            <p className='text-sm'> Earn 2 ThankYou® Points per $1 spent at supermarkets and gas stations for the first $6,000 per year and 1 point per $1 spent thereafter.</p>

                        </div>
                      
                  </div>

                  <div className='flex m-3 items-center'>
                        <div className='w-1/4'>
                            <img src={Second} alt=''/>
                        </div>
                       
                        <div className='w-3/4'>
                            
                            <p className='text-xl'>Supermarkets & Gas Stations</p>
                            <p className='text-sm'> Earn 2 ThankYou® Points per $1 spent at supermarkets and gas stations for the first $6,000 per year and 1 point per $1 spent thereafter.
                            </p>

                        </div>
                      
                  </div>

                  <div className='flex m-3 items-center'>
                      <div className='w-1/4 p-2'>
                            <img src={Third} alt=''/>
                      </div>
                        
                        <div className='w-3/4 p-2'>
                            <p className='text-xl'>Supermarkets & Gas Stations</p>
                            <p className='text-sm'> Earn 2 ThankYou® Points per $1 spent at supermarkets and gas stations for the first $6,000 per year and 1 point per $1 spent thereafter.</p>

                        </div>
                      
                  </div>

                  <div className='flex m-3 items-center'>
                    <div className='w-1/4 p-2'>
                        <img src={Point} alt=''/>
                    </div>
                   
                    <div className='w-3/4 p-2'>
                            
                        <p className='text-xl'>Supermarkets & Gas Stations</p>
                        <p className='text-sm'> Earn 2 ThankYou® Points per $1 spent at supermarkets and gas stations for the first $6,000 per year and 1 point per $1 spent thereafter.
                        </p>

                        </div>
                      
                  </div>
                </div>
           
          </div>
        
        </div>

        <div className='text-left p-5 m-3 border border-black'>
        <p className=' text-2xl m-2 p-3'>
        *Pego REWARDS+® CARD PRICING DETAILS
        </p>
        <p>
        Introductory rate of 0% for 15 months from the date of 
        account opening on purchases and an introductory rate of
         0% for 15 months from date of first transfer for balance 
         transfers completed in first 4 months account is open.
          After the introductory period ends, your standard APR
           for purchases will be applied to unpaid promotional 
           balances, new purchases and new balance transfers. 
           The standard variable APR for purchases for the Pego 
           Rewards+® Card is 13.49% - 23.49% based on your 
           creditworthiness. The standard variable APR for Pego 
           Flex Plan is 13.49% - 23.49%, based on your 
           creditworthiness. The standard variable APR for 
           cash advances is 25.24%. The variable penalty APR
            is up to 29.99% and may be applied if you make a
             late payment or make a payment that is returned.
              Minimum interest charge — $0.50. Annual Fee – None
              . Fee for foreign purchases — 3% of each purchase
               transaction in US dollars. Cash advance fee —
                either $10 or 5% of the amount of each cash
                 advance, whichever is greater. Balance transfer
                  fee — intro fee of 3% of each transfer
                   ($5 minimum) completed within the first
                   
                    4 months of account opening. After that, 
                    % of each transfer ($5 minimum). 
                    New cardmembers only. Subject to credit
                     approval. Additional limitations, terms 
                      conditions apply. 
        You will be given further information when you apply.
        </p>
    </div>
    </div>
  )
}

export default Reward