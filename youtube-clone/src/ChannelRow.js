import React from 'react'
import "./ChannelRow.css";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Avatar from '@material-ui/core/Avatar';

function ChannelRow({image,channel,verified,subs,videos,description}) {
    return (
        <div className="channelRow">
            <Avatar className = "channelRow__avatar" src={image} alt="" />
            <div className="channelRow__info">
                <h4>{channel} {verified && <CheckCircleOutlineIcon />}</h4>
                <p>{subs} subscribers . {videos} videos </p>
                <p>{description}</p>
            </div>
            <hr/>
            
        </div>
    )
}

export default ChannelRow
