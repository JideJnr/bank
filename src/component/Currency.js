import React from 'react'
import CurrencyFormat from 'react-currency-format'

function Currency({amount}) {
  return (
    <div>
        
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        {value}
                    </p>
                </>
            )}

            decimalScale={2}
            value={amount}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
    
    </div>
  )
}

export default Currency