import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: "Lorem ipsum nisi dolor aliquip sit tempor in laboris anim id ullamco est amet."
            },
            {
                icon:<FaHiking/>,
                title:"Incredible trails",
                info: "Lorem ipsum nisi dolor aliquip sit tempor in laboris anim id ullamco est amet."
            },
            {
                icon:<FaShuttleVan/>,
                title:"24/7 Shuttle Van",
                info: "Lorem ipsum nisi dolor aliquip sit tempor in laboris anim id ullamco est amet."
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: "Lorem ipsum nisi dolor aliquip sit tempor in laboris anim id ullamco est amet."
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
