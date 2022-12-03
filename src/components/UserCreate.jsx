import React, { Component } from 'react'
import './Create.css'

export default class UserCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Users: []
        }
    }
    create() {
        fetch('https://638459b43fa7acb14ff21d21.mockapi.io/api/v-1/Users', {
            method: "POST",
            headers: {
                'Content- type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            response.json().then((result) => {
                console.log(result);
            })

        })
    }
    render() {
        console.log(this.state);
        return (
            <> <div className='dv-elemt'>
                <form className="form">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Enter your data Here....</div>

                    <div className="input-container ic1">
                        <input id="name" className="input" type="text" placeholder=" " onChange={(e) => this.setState({ Name: e.target.value })} />
                        <div className="cut cut-short"></div>
                        <label htmlFor="name" className="placeholder2">Name</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="email" className="input" type="email" placeholder=" " onChange={(e) => this.setState({ Email: e.target.value })} />
                        <div className="cut cut-short"></div>
                        <label htmlFor="email" className="placeholder2">Email</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="phone" className="input" type="tel" placeholder=" " onChange={(e) => this.setState({ Phone: e.target.value })} />
                        <div className="cut cut-short"></div>
                        <label htmlFor="phone" className="placeholder2">Phone</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="address" className="input" type="address" placeholder=" " onChange={(e) => this.setState({ Address: e.target.value })} />
                        <div className="cut"></div>
                        <label htmlFor="address" className="placeholder2">Address</label>
                    </div>
                    <button type="text" className="submit" onClick={() => this.create()}>Click Here</button>
                </form >
            </div>
            </>
        )
    }
}
