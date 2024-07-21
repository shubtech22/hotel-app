import { render,screen,fireEvent, waitFor } from "@testing-library/react";
// import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import React, { Component }  from 'react';
import AddEmployee from "./AddEmployee";

describe("Testing AddEmployee",()=>{
    it("AddEmployee",async ()=>{
        render(<BrowserRouter><AddEmployee/></BrowserRouter>);
       
        fireEvent.change(screen.getByTestId('Enter Employee ID'),{target:{value:'1'}})
        fireEvent.change(screen.getByTestId('Enter Employee First Name'),{target:{value:'Shubham'}})
        fireEvent.change(screen.getByTestId('Enter Employee Last Name'),{target:{value:'Pol'}})
        fireEvent.change(screen.getByTestId('Enter Employee Mail ID'),{target:{value:'shubham@gmail.com'}})


            fireEvent.click(screen.getByTestId('submit'))
            fireEvent.click(screen.getByTestId('reset'))

    })
})