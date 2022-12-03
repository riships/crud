import React, { Component } from 'react'
import './Create.css'

export default class UserCreate extends Component {

    render() {
        return (
            <> <div className='dv-elemt'>
                <div className="form">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Let's create your account!</div>
                    <div className="input-container ic1">
                        <input id="firstname" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="firstname" className="placeholder2">First name</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="lastname" className="input" type="text" placeholder=" " />
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder2">Last name</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="email" className="input" type="text" placeholder=" " />
                        <div className="cut cut-short"></div>
                        <label htmlFor="email" className="placeholder2">Email</label>
                    </div>
                    <button type="text" className="submit">submit</button>
                </div >
            </div >
            </>
        )
    }
}
