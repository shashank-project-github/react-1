import React from 'react'

const EventHandling = () => {
    return (
        <div className='container'>
            <h1>Event Handling</h1>
            <button className='btn btn-primary' onClick={() => {
                console.log('You clicked the button!')
            }}>
                Click me
            </button>
            {/* <input type="color" onChange={(e) => {
                console.log(e.target.value);
            }} /> */}
            <input type="color" onChange={(e) => {
                document.body.style.background = e.target.value;
 }} />
        </div>
    )
}

export default EventHandling