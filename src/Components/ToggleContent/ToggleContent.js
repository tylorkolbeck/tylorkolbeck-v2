import React, { useState } from 'react'

export default function ToggleContent({shown, children}) {
    
   

    return (
        <>
           {shown ? children : null}
        </>
    )
}
