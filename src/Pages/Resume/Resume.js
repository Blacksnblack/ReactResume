import React from 'react'
import './Resume.css'
import { data } from '../../Data/Resume_Data'

export default function Resume() {
    // console.log(data)

    return (
        <div>
            <div className="top-section">
                <img className="profile-img" src={require("./ProfileImage.jpg")} alt="profile"/>
                <div className="name-section cool-font" >
                    <h1 className="uline">{data.name}</h1>
                    <h3>{data.occupation}</h3>
                </div>
            </div>
            <div className="bot-section">
                <div className="left-section">
                    <div className="inner">
                        <div className="inner-sub gold-outline">
                            <div className="text-container">
                                <h1 className="cool-font" >About</h1>
                                <hr />
                                <h3 className="desc-text cool-font2">
                                    {data.description}
                                </h3>
                            </div>
                        </div>
                        <div className="inner-sub gold-outline" >
                            <div className="text-container">
                                <h1 className="cool-font" >Education</h1>
                                <hr />
                                <h3 className="desc-text cool-font2">
                                    {`School: ${data.school.name}`}<br/>
                                    {`Graduation: ${data.school.graduate} (not yet)`}<br />
                                    {`Major: ${data.school.Major}`}<br />
                                </h3>
                            </div>
                        </div>
                        <div className="inner-sub gold-outline">
                        <div className="text-container">
                                <h1 className="cool-font" >Social</h1>
                                <hr />
                                <h3 className="desc-text cool-font2 social" style={{"color": "white"}}>
                                    <h2>
                                        <a rel="noreferrer" 
                                            target="_blank" 
                                            href={data.social_media.github} 
                                            className="fa fa-github"> GitHub
                                            </a>
                                    </h2>
                                    <h2>
                                        <a rel="noreferrer" 
                                            target="_blank" 
                                            href={data.social_media.linkedIn} 
                                            className="fa fa-linkedin"> LinkedIn
                                            </a>
                                    </h2>
                                    <h2>
                                        <a rel="noreferrer" 
                                            target="_blank" 
                                            href={data.social_media.facebook} 
                                            className="fa fa-facebook"> Facebook
                                            </a>
                                    </h2>
                                    <h2>
                                        <a rel="noreferrer" 
                                            target="_blank" 
                                            href={data.social_media.instagram} 
                                            className="fa fa-instagram"> Instagram
                                        </a>
                                    </h2>
                                    
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right-section">
                    <div className="inner-sub text-container">
                        <h1 className="cool-font uline" >Languages</h1>
                        {
                            data.languages.programming.lang_name.map((n, i) => 
                               <h3 className="cool-font2">{n}: {data.languages.programming.lang_level[i]}/10</h3>  
                            )
                        }
                    </div>
                    <div className="inner-sub text-container">
                        <h1 className="cool-font uline" >Contact</h1>

                        <h2 className='cool-font2 social'><p className=' fa fa-envelope'> {data.contact.email}</p></h2>
                        <h2 className='cool-font2 social'><p className=' fa fa-phone'> {data.contact.phone}</p></h2>
                    </div>
                    <div className="inner-sub text-container">
                        <h1 className="cool-font uline" >Thanks!</h1>

                        <h3 className='cool-font2'>let me know on what I could improve on!</h3>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
