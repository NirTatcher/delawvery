import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function Content(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [date, setDate] = useState("")
    useEffect(async () => {
        let initializeValues = () => {
            if (props.isEdit !== "") {
                setFirstName(props.persons[props.isEdit].firstName)
                setLastName(props.persons[props.isEdit].lastName)
                setDate(props.persons[props.isEdit].date)
            }
        }
        await initializeValues()
        console.log(props);
    }, [props.isEdit])
    const checkValues = () => {
        if (firstName === "") {
            alert("הוסף שם פרטי")
            return
        }
        if (lastName === "") {
            alert("הוסף שם משפחה")
            return
        }
        if (date === "") {
            alert("הוסף תאריך")
            return
        }

        props.sendDetails({ firstName, lastName, date })

        setFirstName("")
        setLastName("")
        setDate("")

    }
    return (
        <div className="content">
            <div className="headInputWrapper">
                {props.isEdit === "" ?
                    <h2 className="heading">הזמנה חדשה</h2>
                    :
                    <h2 className="heading">הזמנה {props.isEdit + 1}</h2>

                }
                <div className="inputs_wrapper">
                    <div className="inputsRow">
                        <div className="inputWrapper">
                            <label className="inputLabel" >שם פרטי</label>
                            <TextField value={firstName} onChange={(e) => setFirstName(e.target.value)} sx={{ direction: 'rtl' }} id="outlined-basic" variant="outlined" />

                        </div>
                        <div className="inputWrapper">
                            <label className="inputLabel" >שם משפחה</label>
                            <TextField value={lastName} onChange={(e) => setLastName(e.target.value)} sx={{ direction: 'rtl', height: '60%' }} id="outlined-basic" variant="outlined" />

                        </div>

                    </div>
                    <div style={{ justifyContent: 'flex-start' }} className="inputsRow">
                        <div className="inputWrapper">
                            <label className="inputLabel" >תאריך</label>
                            <TextField type="date" value={date} onChange={(e) => setDate(e.target.value)} sx={{ direction: 'rtl', }} id="outlined-basic" variant="outlined" />

                        </div>
                    </div>
                    <Button onClick={() => checkValues()} sx={{ width: '45%', height: '50px', alignSelf: 'flex-end', background: 'grey' }} variant="contained">{props.isEdit === "" ? 'הוספה' : 'עדכון'}</Button>

                </div>

            </div>


        </div>
    )
}
