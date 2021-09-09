import React from 'react'

export default function Form({ submitHandler, handleChange, value }) {
    return (
        <>
            <form onSubmit={submitHandler} className="lorem-form">
                <label htmlFor="amount">paragraphs</label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={value}
                    onChange={handleChange}
                />
                <button className="btn">generate</button>
            </form>
        </>
    )
}
