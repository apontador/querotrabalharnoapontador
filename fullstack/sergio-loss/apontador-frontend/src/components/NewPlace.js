import React from 'react'
import { connect } from 'react-redux'

import { Grid, Paper, Container, TextField, Button, Collapse } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';

import { doPost } from '../tasks/PlaceTask'

const NewPlace = ({doPost}) => {

    const newPlaceInitialState = { name: "", address: "", phone: "" }
    const [newPlace, setNewPlace] = React.useState(newPlaceInitialState)
    const [messageOpen, setMessageOpen] = React.useState(false)
    const [messageSeverity, setMessageSeverity] = React.useState("success")
    const [messageText, setMessageText] = React.useState("")

    const resetNewPlace = () => setNewPlace(newPlaceInitialState)

    const handleNewPlaceChange = e => setNewPlace({...newPlace, [e.target.name]: e.target.value })

    const handleSubmit = () => {

        if(newPlace.name==="" || newPlace.address==="" || newPlace.phone==="") {
            setMessageSeverity("warning")
            setMessageText("Todos os campos sao obrigatorios!")
            setMessageOpen(true)
            return;
        }

        doPost(newPlace, response=>{
            if (response.errors) {
                let msg = ""
                for (const property in response.errors) {
                    for (const message in response.errors[property]) {
                        msg += `${response.errors[property][message]}. `
                    }                   
                }

                setMessageSeverity("warning")
                setMessageText(msg)
                setMessageOpen(true)
                return;
            }            
            resetNewPlace()
            setMessageSeverity("success")
            setMessageText("Cadastro realizado com sucesso!")            
            setMessageOpen(true)
        })
    }

    const style = {
        paper: {
            maxWidth: '500px',
            paddingRight: '50px',
            paddingLeft: '50px',
            paddingTop: '30px',
            paddingBottom: '30px',
        },
        btnRegister: {
            backgroundColor: '#FF8207',
            color: '#ffffff'
        }
    }

    return (        
        <Container style={{paddingTop:"200px"}}>
            <Grid container spacing={2} justify="center">
                <Paper style={style.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField label="Nome do local" className="width-100-percent" name="name" value={newPlace.name} onChange={handleNewPlaceChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Telefone" className="width-100-percent" name="phone" value={newPlace.phone} onChange={handleNewPlaceChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Endereco" className="width-100-percent" name="address" value={newPlace.address} onChange={handleNewPlaceChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="flex-end">
                                <Button variant="contained" disableElevation style={style.btnRegister} onClick={handleSubmit}>Cadastrar</Button>
                            </Grid>                            
                        </Grid>
                        <Collapse in={messageOpen} style={{flexGrow:"1"}}>
                            <Grid item xs={12}>
                                <Alert severity={messageSeverity} onClose={() => {setMessageOpen(false)}}>{messageText}</Alert>
                            </Grid>
                        </Collapse>
                    </Grid>            
                </Paper>
            </Grid>
        </Container>
    )
}

const mapStateToProps = state => ({ });
  
const mapDispatchToProps = dispatch => {
    return {
        doPost
    };
};

export default connect(
    mapStateToProps
    ,mapDispatchToProps
)(NewPlace);