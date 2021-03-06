import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';
import ListItemCompotent from './ListItem';
import styled from 'styled-components'

const MyTextField = styled(TextField)`

`
const StyledButton = styled(Button)`
  background-color: #f45a36 !important;
  color: white;
  width: 100%;


`
const Square = styled.div`
    width : 40vh
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;

`



class Tournament extends Component {
    state = {
        value: '',
        showComponent: false
    }
    onButtonClick = () => {
        this.setState({ showComponent: true })
    }
    updateValue = event => {
        this.setState({ value: event.target.value })
    }
    render() {
        if (this.state.showComponent === true)
            return (<div><ListItemCompotent tournamentName={this.state.value} /></div>)
        else
            return (
                <Square>
                    <h1> Tournament</h1>

                        <MyTextField fullWidth margin="normal" id="filled-name" label="Tournament" variant="standard" type="text" onChange={this.updateValue.bind(this)} value={this.state.value} ></MyTextField>


                    <StyledButton onClick={this.onButtonClick.bind(this)}>Add Tournament</StyledButton>
                </Square>

            );
    }
}

export default Tournament;