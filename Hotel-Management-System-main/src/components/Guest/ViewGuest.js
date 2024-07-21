import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { toast } from "react-toastify"
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './viewGuest.css'
import './viewGuest.css'


class ViewGuest extends Component {

    constructor(props){
        super(props);
        this.state = {
            guests : []
        };
    }

    componentDidMount(){
        this.getllguests();
    }

    getllguests(){
        // axios.get("https://0114-49-204-77-246.ngrok.io//guest/api/findAllguests")
        axios.get("http://localhost:8006/api/g/guest")

        .then(response => response.data)
        .then(data => {
            this.setState({guests: data})
        });
    };

    
    deleteGuest = (guestId) => {
        axios.delete("http://localhost:8006/api/g/deleteGuest/" +guestId)

        .then(response => {
            if(response.data != null){
                alert("Guest Deleted Successfully.");
                toast.warning("Guest Has been Deleted Successfully");
                this.setState({
                    guests: this.state.guests.filter(guests => guests.guestId !== guestId)
                });
            }
        });
    };

    render() {
        return (
            <div className='viewGuest'>
            <h2 className="text-center"> Guests Data </h2>
            <hr />
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>Guest Id</th>
                            <th>Guest Company Name</th>
                            <th>Guest Full Name</th>
                            <th>Guest Mail ID</th>
                            <th>Guest Gender</th>
                            <th>Guest Address</th>
                            <th>Guest Phone Number</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.guests.length ===0 ?
                            <tr>
                                <td colSpan="8">No Guests Available.</td>
                            </tr>:
                            this.state.guests.map(
                                guests =>
                                <tr key ={guests.id}>
                                    <td>{guests.guestId}</td>
                                    <td>{guests.company}</td>
                                    <td>{guests.name}</td>
                                    <td>{guests.mailid}</td>
                                    <td>{guests.gender}</td>
                                    <td>{guests.address}</td>
                                    <td>{guests.phone_number}</td>
                                    <td>
                                    <ButtonGroup>
                                    <Link to={"updateGuest/"+guests.guestId}  className="btn btn-primary">Update</Link>{''}
                                    {/* <Button color="info">Update</Button> */}
                                    <Button className='deleteButton' color="danger" onClick={this.deleteGuest.bind(this, guests.guestId)}>Delete</Button>
                                    </ButtonGroup>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>

            </div>
        </div>
        );
    }
}

export default ViewGuest;