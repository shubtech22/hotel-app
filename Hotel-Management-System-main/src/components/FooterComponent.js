import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }


    render() {
        return (
            <div>
                <footer className="footer" style={{padding:"20px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <span className="text" >&#169; All Rights Reserved : ShubhamPol </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;