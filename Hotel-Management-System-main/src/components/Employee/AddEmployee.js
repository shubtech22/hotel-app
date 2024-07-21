import React, { Component } from 'react';
import { Form ,FormGroup,Label,Input,Container,Card,Button } from "reactstrap"
import { Fragment } from 'react';
import axios from 'axios';
import { toast } from "react-toastify"



class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.state = this.initialState;
        this.employeeChange = this.employeeChange.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
    };

    initialState = {
        id:'',emailId:'',firstName:'',lastName:''
    };

    // componentDidMount() {
    //     const employeeId = +this.props.match.params.code;
    //     if(employeeId) {
    //         this.findEmployeeByCode(employeeId);
    //     };
    // };

    // findEmployeeByCode = (employeeId) => {
    //     axios.get("http://localhost:8002/api/v1/staff" +employeeId)
    //         .then(response => {
    //             if(response.data != null){
    //                 this.setState({
    //                     emailId: this.state.emailId,
    //                     firstname: this.state.firstname,
    //                     lastname: this.state.lastname,
    //                 });
    //             }
    //         }).catch((error) => {
    //             console.error("Error -"+error);
    //         });
    // }

    resetEmployee = () => {
        this.setState(() => this.initialState);
    };

    addEmployee = event => {
        
        event.preventDefault();

        const employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
            // username: this.state.username,
            // password: this.state.username+'@'+this.state.roles[0],
            // roles:this.state.roles
        };
        console.log(employee);
        // axios.post("http://localhost:8001/api/auth/signup",employee)
        axios.post("http://localhost:8002/api/v1/addStaff",employee)

        
        .then(response => {
            console.log("dddd");
            if(response.data != null){
                this.setState(this.initialState);
                toast("Employee Saved Successfully.");
            }
        });
    };

    employeeChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        });
    };

    employeeList = () => {
        return this.props.history.push("/view-employees");
    };

    render() {
        const {id,emailId,firstName,lastName} = this.state;


        return (
            <Fragment>
                <Card style={{borderRadius:'20px'}}>
                <h2 className="text-center">Input Employee Details</h2>
                <hr />
                <Form onSubmit={this.addEmployee} onReset={this.resetEmployee} id="employeeFormID">
                    {/* <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="code" placeholder="Enter employee name" autoComplete="off" required
                    value={username}
                    onChange={this.employeeChange}
                    />
                    </FormGroup> */}
                    <FormGroup>
                    <Label for="id">Employee ID</Label>
                    <Input type="text" name="id" id="id" data-testid="Enter Employee ID" placeholder="Enter Employee ID" autoComplete="off" required
                    value={id}
                    onChange={this.employeeChange}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Label for="firstName">Employee First Name</Label>
                    <Input type="text" name="firstName" id="firstName" data-testid="Enter Employee First Name" placeholder="Enter Employee First Name" autoComplete="off" required
                    value={firstName}
                    onChange={this.employeeChange}
                    />
                    </FormGroup>

                    <FormGroup>
                    <Label for="lastName">Employee Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" data-testid="Enter Employee Last Name" placeholder="Enter Employee Last Name" autoComplete="off" required
                    value={lastName}
                    onChange={this.employeeChange}
                    />
                    </FormGroup>
                
                    
                    <FormGroup>
                    <Label for="emailId">Employee Mail ID</Label>
                    <Input type="text" name="emailId" id="emailId" data-testid="Enter Employee Mail ID" placeholder="Enter Employee Mail ID" autoComplete="off" required
                    value={emailId}
                    onChange={this.employeeChange}
                    />

                    
                    </FormGroup>
                        <Container className="text-center">
                        <Button type="submit" data-testid="submit" color="success">Add Employee</Button>
                        <Button type="reset" data-testid="reset" color="warning ml-3">Clear</Button>
                        <Button type="button" color="secondary ml-3" onClick={this.employeeList.bind()}>Employee List</Button>
                        </Container>
                    </Form>
                </Card>
            </Fragment>
        );
    }
}

export default AddEmployee;