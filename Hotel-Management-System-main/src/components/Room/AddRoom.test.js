import { render,screen,fireEvent, waitFor } from "@testing-library/react";
// import { wait } from "@testing-library/user-event/dist/utils";
import { BrowserRouter } from "react-router-dom";
import React, { Component }  from 'react';
import AddRoom from "./AddRoom";

describe("Testing AddRoom",()=>{
    it("AddRoom",async ()=>{
        render(<BrowserRouter><AddRoom/></BrowserRouter>);
        fireEvent.change(screen.getByTestId('Enter Room Num to Assign Room ID'),{target:{value:'1'}})
        fireEvent.change(screen.getByTestId('Enter The Cost of Room'),{target:{value:'500'}})

            fireEvent.click(screen.getByTestId('submit'))
            fireEvent.click(screen.getByTestId('reset'))

    })
})