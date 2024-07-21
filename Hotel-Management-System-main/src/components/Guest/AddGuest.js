import React, { Component } from 'react';
import { Form ,FormGroup,Label,Input,Container,Card,Button } from "reactstrap"
import { Fragment } from 'react';
import axios from 'axios';
import { toast } from "react-toastify"

class AddGuest extends Component {
    constructor(props){
        super(props);
        this.state = this.initialState;
        this.guestChange = this.guestChange.bind(this);
        this.addGuest = this.addGuest.bind(this);
    };

    initialState = {
        guestId:'',company:'',name:'',mailid:'',gender:'',address:'',phone_number:''
    };

    // componentDidMount() {
    //     const code = +this.props.match.params.code;
    //     if(code) {
    //         this.findGuestByCode(code);
    //     };
    // };

    // findGuestByCode = (code) => {
    //     // axios.get("https://0114-49-204-77-246.ngrok.io/guest/api/findguest/" +code)
    //     axios.get("http://localhost:8006/api/g/guest" +code)

    //         .then(response => {
    //             if(response.data != null){
    //                 this.setState({
    //                     code: this.state.code,
    //                     company: this.state.company,
    //                     name: this.state.name,
    //                     mailid: this.state.mailid,
    //                     gender: this.state.gender,
    //                     address: this.state.address,
    //                     phone_number: this.state.phone_number
    //                 });
    //             }
    //         }).catch((error) => {
    //             console.error("Error -"+error);
    //         });
    // }

    resetGuest = () => {
        this.setState(() => this.initialState);
    };

    addGuest = event => {
        event.preventDefault();

        const guest = {
            guestId: this.state.guestId,
            company: this.state.company,
            name: this.state.name,
            mailid: this.state.mailid,
            gender: this.state.gender,
            address: this.state.address,
            phone_number: this.state.phone_number
        };
        // axios.post("https://0114-49-204-77-246.ngrok.io/guest/api/newGuest",guest)
        axios.post("http://localhost:8006/api/g/addGuest",guest)

        .then(response => {
            if(response.data != null){
                this.setState(this.initialState);
                toast.success("Guest  Saved Successfully.");
            }
        });
    };

    guestChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    guestList = () => {
        return this.props.history.push("/view-guests");
    };
    
    render() {
        const {guestId, company, name, mailid, gender, address, phone_number} = this.state;

        return (
            <Fragment>
                <Card>
                    <h2 className="text-center">Input Guest Details </h2>
                    <hr />
                    <Form onSubmit={this.addGuest} onReset={this.resetGuest} id="guestFormId">
                        <FormGroup>
                        <Label for="guestId">Guest Id</Label>
                        <Input type="text" name="guestId" id="guestId" data-testid = "Enter Guest Id" placeholder="Enter Guest Id" autoComplete="off"
                         value={guestId}
                         onChange={this.guestChange}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="company">Company Name</Label>
                        <Input type="text" name="company" id="company" data-testid = "Enter Guests Company" placeholder="Enter Guests Company" autoComplete="off"
                        value={company}
                        onChange={this.guestChange}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="name">Guest Full Name</Label>
                        <Input type="text" name="name" id="name" data-testid = "Enter Guest Name" placeholder="Enter Guest Name" autoComplete="off"
                        value={name}
                        onChange={this.guestChange}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="mailid">Mail ID</Label>
                        <Input type="text" name="mailid" id="mailid" data-testid = "Enter Guest Mail ID" placeholder="Enter Guest Mail ID" autoComplete="off"
                        value={mailid}
                        onChange={this.guestChange}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input type="select" name="gender" id="gender"
                        value={gender}
                        // data-testid = ""
                        onChange={this.guestChange}
                        >
                        <option>Select</option>
                        <option>Female</option>
                        <option>Male</option>
                        </Input>
                        </FormGroup>
                        <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" id="address" data-testid = "Enter Guest Address" placeholder="Enter Guest Address" autoComplete="off"
                        value={address}
                        onChange={this.guestChange}/>
                        </FormGroup>
                        <FormGroup>
                        <Label for="phone_number">Guest Phone Number</Label>
                        <Input type="text" name="phone_number" id="phone_number" data-testid = "Enter Guest Mobile Number" placeholder="Enter Guest Mobile Number" autoComplete="off"
                        value={phone_number}
                        onChange={this.guestChange}/>
                        </FormGroup>
                        <Container className="text-center">
                        <Button type="submit" data-testid = "submit" color="success">Add Guest</Button>
                        <Button type="reset" data-testid = "reset" color="warning ml-3">Clear</Button>
                        <Button type="button" color="secondary ml-3" onClick={this.guestList.bind()}>Guest  List</Button>
                        </Container>
                    </Form>
                </Card>
            </Fragment>
        );
    }
}

export default AddGuest;