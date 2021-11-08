import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

export default function Card(props) {
    return (

        <div className="item_card">
            {console.log(props)}
            <div className="item_content">
                <div className="item_header">
                    <div className="iconsWrapper">
                        <CloseIcon onClick={() => props.deletePerson(props.index)} sx={{ width: '20px', color: 'rgba(128, 128, 128, 1.233)', cursor: 'pointer' }} />
                        <EditIcon onClick={() => props.editPerson(props.index)} sx={{ width: '20px', color: 'rgba(128, 128, 128, 1.233)', cursor: 'pointer' }} />
                    </div>
                    <div className="item_h">
                        <h4>הזמנה {props.index + 1}</h4>

                    </div>

                </div>

                <div className="item_card_details">
                    <h5 style={{ fontSize: '15px' }}>פרטים</h5>
                    <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-end' }}>
                        {props.personDetails.firstName}, {props.personDetails.lastName}
                    </div>
                    {props.personDetails.date.split("-")[2] + "-" + props.personDetails.date.split("-")[1] + "-" + props.personDetails.date.split("-")[0]}
                </div>
            </div>
        </div>

    )
}
