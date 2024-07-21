import React, { Component } from "react";
import "./Home.css"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      services: [
        {
          icon: <FaCocktail />,
          title: "Free Cocktails",
          info:
            "You can Enjoy Free Cocktails!!!"
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info:
            "Make your Life Adventures!!!"
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info:
            "Take Your Free Shuttle"
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info:
            "Get More Hype!!!"
        }
      ]
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
    
      <div className="HomeBck">
        
        {/* <div style={{
          display:"flex",
          flexDirection:"column",
          width:"100%"
        }}>
        </div> */}
          <div style={{
            // width:"100%",
            // height:"700px",

          // background:`url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80') no-repeat`,
          // background:`url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600') no-repeat`,

          // backgroundSize:"contain",
          
            }}></div>
          
          <section className="services">
        <h1>- - - - Services - - - -</h1>

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
        </div>
      // </div>
    );
  }
}
