import { render,screen,fireEvent, waitFor } from "@testing-library/react";
// import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import React, { Component }  from 'react';
import AddGuest from "./AddGuest";

describe("Testing AddGuest",()=>{
    it("AddGuest",async ()=>{
        render(<BrowserRouter><AddGuest/></BrowserRouter>);
        fireEvent.change(screen.getByTestId('Enter Guest Id'),{target:{value:'1'}})
        fireEvent.change(screen.getByTestId('Enter Guests Company'),{target:{value:'capg'}})
        fireEvent.change(screen.getByTestId('Enter Guest Name'),{target:{value:'Shubham'}})
        fireEvent.change(screen.getByTestId('Enter Guest Mail ID'),{target:{value:'shubham@gmail.com'}})
        fireEvent.change(screen.getByTestId('Enter Guest Address'),{target:{value:'Jalgaon,MH'}})
        fireEvent.change(screen.getByTestId('Enter Guest Mobile Number'),{target:{value:'9876546778'}})


            fireEvent.click(screen.getByTestId('submit'))
            fireEvent.click(screen.getByTestId('reset'))

    })
})