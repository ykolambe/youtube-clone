import React from 'react'
import "./VideoRow.css";

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videorow">
            <img src={image} alt="" />
            <div className="videorow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} . <span className="videoRow_subs"><span className="videorow__subno">{subs}</span> Subscribers</span> {views} views . {timestamp} 
                </p>
                <p className="videorow_description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default VideoRow
