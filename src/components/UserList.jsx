/* The class is a React component that fetches data from a mock API and displays it in a card layout. */
import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { Link } from 'react-router-dom'



export default class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Users: []
        }
    }
    componentDidMount() {
        fetch('https://638459b43fa7acb14ff21d21.mockapi.io/api/v-1/Users').then((response) => {
            response.json().then((result) => {
                // console.table(result);
                this.setState({ user: result })

            })

        })
    }

    render() {
        return (
            <>
                {
                    this.state.user ?
                        <div className="container2">
                            {
                                this.state.user.map((person) => {
                                    return (
                                        <div className='grid-container col-lg-4 col-md-6'>
                                            <div className="crd" >
                                                <img src={person.Avtar} alt="Person" className="crd__image" />
                                                <p className="crd__name">{person.Name}</p>
                                                <div className="grd-container">

                                                    <div className="grd-child">
                                                        156 Post
                                                    </div>

                                                    <div className="grd-child">
                                                        1012 Likes
                                                    </div>

                                                </div>
                                                <nav className="social-icons">
                                                    <Link className='icn' to="/"><AiFillDelete /></Link>
                                                    <Link className='icn' to="/create"><FiEdit /></Link>
                                                    <Link className='icn' to="/update"><RxUpdate /></Link>
                                                </nav>
                                                <div className='cntct-inf'>
                                                    <div className='hvr-psion'>
                                                        <MdAlternateEmail className='shw-txt' />
                                                        <span className='disply-text'>{person.Email}</span>
                                                    </div>
                                                    <div className='hvr-psion'>
                                                        <BsFillPhoneVibrateFill className='shw-txt' />
                                                        <span className='disply-text'>{person.Phone}</span>
                                                    </div>
                                                    <div className='hvr-psion'>
                                                        <FaHome className='shw-txt' />
                                                        <span className='disply-text'>{person.Address}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                })

                            }
                        </div>
                        :
                        <p>Data is Not Available Please check your Server......</p>
                }
            </>
        )
    }
}
