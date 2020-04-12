import React from 'react'
import Paper from '@material-ui/core/Paper';

export default function Cards(props) {
    return (
        <div>
            <Paper elevation={2} className={props.class.paper} >
                <img 
                    style={{height:'150px',width:'120px',marginTop:"20%"}}
                    className={props.class.paperImage}
                    src={props.image}> 
                </img>
                <h1 className={props.class.paperHeader}>
                    {props.heading}
                </h1>
                <p className={props.class.paperSubHeader}>
                    {props.subheading}
                </p>
            </Paper>
        </div>
    )
}
