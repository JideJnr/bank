import React from 'react'
import Home from './../assets/Refinance/Home.jpg';
import Guide from './../assets/Refinance/guide.jpg';
import Options from './../assets/Refinance/options.jpg';
import Application from './../assets/Refinance/application.jpg';


function Refinance() {
  return (
    <div className='w.screen'>
        <div className='w-full '>
            <img src={Home} alt=''/>
        </div>
        <div className='flex justify-center'>
        <div className=' text-left p-5 border border-black max-w-md m-3 '>
             
             <p className='text-2xl p-2 mb-3'>See What Your Home May Be Worth</p>
             <p className='mb-3'>Get an idea of what your home's value may be. Introducing Home Captain, 
                 an empowering resource that can help you compare properties, marketing conditions, inventory analysis and more. 
                 You can share the report with your loan officer to help determine your refinancing options. See limitations.</p>
             <button className='px-5 py-3 my-3 w-fit h-fit text-white  bg-blue-700  rounded text-sm '>Get a Home Valuation Report</button>
    
        </div>
        </div>

       


        <div className='m-3 '>
            <div className='flex justify-center'>
                <p className=' text-2xl text-left m-3 p-5 '>Promotional Offers</p>
            </div>
   
      
            <div className='grid grid-cols-1 md:grid-cols-2 w-full text-left m-3   '> 
                    
                        <div className='border  p-5  bg-white max-w-sm m-3'>
                                <p className='text-xl mb-2 p-2'> Special pricing for Pego customers</p>
                                <p className='text-base mb-2 p-2'>New and existing Pegobank customers with Eligible Balances may qualify for a lower interest rate or closing cost credit on a mortgage.</p>
                                <p className='text-base mb-2 p-2'> Explore Pego Mortgage Relationship Pricing</p>
                        </div>
                        <div className='border  p-5  bg-white max-w-sm m-3'>
                                <p className='text-[26px] mb-2 p-3'> $500 off closing costs</p>
                                <p className='text-[16px] mb-2 p-3'>Get a $500 credit toward your closing costs when you apply for a Pego mortgage</p>
                            
                        </div>

            </div>

          
        </div>

        <div className='m-3 bg-white'>
            <div className='flex justify-center'>
                <p className=' text-2xl  text-center p-3 m-2'>Refinancing Your Home</p>
            </div>
         
            <div className='flex justify-center'>
                <div className='border border-black  sm:flex p-5 m-3'>
                        <div classname='max-w-md' >
                            <img  src={Guide} alt=''/>
                        </div>
                    

                        <div className=' max-w-md p-3 m-2 '>
                            <p className='text-2xl p-2'>A guide to refinancing your mortgage</p>
                            <p className='text-sm p-2 '>
                                There's a lot to consider before you choose to refinance. 
                                Our simple guide will help you figure out your goals and 
                                see if refinancing can help you meet them.</p>

                        
                            <button className='py-2 px-5 text-sm my-3 w-fit h-fit text-white  bg-blue-700  rounded '>Learn More</button>
                        </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='border border-black  sm:flex p-5 m-3'>

                    <div className='max-w-md p-3 m-2'>
                                <p className='text-2xl p-2'>What are my refinancing options?</p>
                                <p className='text-sm p-2 '>Learn about the different refinance options and see which is right for you and your situation.</p>
                            
                                <button className='py-2 px-5 text-sm my-3 w-fit h-fit text-white  bg-blue-700  rounded'>Learn More</button>
                    </div >

                    <div className='max-w-md'>    
                            
                        <img src={Options}
                        alt=''/>
                
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div  className='border border-black  sm:flex p-5 m-3 '>
                    <div className='max-w-md p-3 m-2'>
                        <img src={Application}  alt=''/>
                    </div>
                    
                    <div className='max-w-md'>
                            <p className='text-3xl p-2'>What does the refinance application process look like?</p>
                            <p className='text-sm p-2 '>Get step-by-step instructions on how to refinance and find out what you'll need to apply.</p>
        
                            <button className='py-2 px-5 text-sm my-3 w-fit h-fit text-white  bg-blue-700  rounded '>Learn More</button>
                    </div>
                </div>
            </div>


        </div>
 
            <div className='flex justify-center'>
                <div className='w-full flex-col '>

<p className='text-2xl  p-3 m-2 text-center'>Your Refinancing Learning Center</p>

<div className=' grid grid-cols-1 md:grid-cols-3 '>
    
        

    <div className=' m-3 p-5 border border-black max-w-md bg-white'>
            <p className='p-3 m-2 text-xl'>How much can I save by refinancing?</p>
            <p className='p-3 m-2 text-sm'>Find out how much you can save on your mortgage with a different rate or term.</p>
        
    </div>

        
    <div className=' m-3 p-5 border border-black max-w-md  bg-white'>
                <p className='p-3 m-2 text-xl'>What are the costs of refinancing?</p>
                <p className='p-3 m-2 text-sm'> We would help you Prepare your budget for the typical closing costs and fees you can expect to pay when you refinance.</p>

    </div>

    <div className=' m-3 p-5 border border-black  max-w-md bg-white'>
          <p className='p-3 m-2 text-xl'>What are the refinancing types to choose from?</p>
          <p className='p-3 m-2 text-sm'>Take a closer look at the two types of refinancing options you have to see which is the best fit for your goals.</p>
    </div>

</div>

</div>

    </div>

        <div className=' text-center p-5 bg-black'>
                <p className='text-2xl text-white'> Contact Us</p>
                <div className='grid grid-cols-1 md:grid-cols-3  '>

                    <div className=' m-2 p-3 border w-full bg-white max-w-sm items-center'>
                        <p className='text-xl'>
                            Get Personalize Help
                        </p>
                        <p className='text-xl'>
                            Find a Home Lending Officer
                        </p>
                    </div>

                    <div  className='m-2 p-3 border w-full bg-white  max-w-sm'>
                        <p className='text-xl mb-2'>
                            Give us a call
                        </p>
                        <p className='text-sm mb-2'>
                            1-800-248-4638
                        </p>
                        <p className='text-sm mb-2'>
                            Mon-Fri: Monday to Friday8 AM to 10 PM ET
                            Sat: Saturday9 AM to 7 PM ET
                        </p>
                    </div>

                    <div  className=' m-2 p-3 border w-full bg-white  max-w-sm'> 
                        <p className='text-xl'>
                            Have questions?
                        </p>
                        <p className='text-sm'>
                            Have us call you
                        </p>
                    </div>
        </div>
        </div>
    </div>
  )
}

export default Refinance