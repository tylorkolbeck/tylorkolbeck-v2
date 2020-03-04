import React from 'react'

export default function Resume() {
    return (
        <div className="Resume__container">
            <object data='https://tylorkolbeck.s3-us-west-2.amazonaws.com/images/tylorkolbeck_resume2020.pdf' type='application/pdf' width='100%' height='100%' style={{ background: 'rgb(82,86,89)'}}>
                <p>Failed to load the resume.</p>
            </object>
        </div>
    )
}
