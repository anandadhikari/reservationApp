import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addReservation } from '../actions/reservationActions';


class ReservationModal extends Component {
    state = {
        modal: false,
        name: '',
        number:'',
        email:'',
        address:''
    }

   
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value ,
            [e.target.number]: e.target.value, 
            [e.target.email]: e.target.value, 
            [e.target.address]: e.target.value 
        
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const newReservation = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            address: this.state.address

        }
          console.log(newReservation);
        this.props.addReservation(newReservation);

        this.toggle();
    }

    render() {
        return (
            <div>
            <Button
                    color="light"
                    style={{ marginBottom: '2rem', marginTop: '2rem' }}
                    onClick={this.toggle}
                >ReservationForm</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}> ReservationForm </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Name"
                                    onChange={this.onChange}
                                />
                                 <Label for="number">Number</Label>
                                <Input
                                    type="number"
                                    name="number"
                                    id="number"
                                    placeholder="Enter Number"
                                    onChange={this.onChange}
                                />
                                 <Label for="email">Email</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email"
                                    onChange={this.onChange}
                                />
                                 <Label for="address">Address</Label>
                                <Input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Enter address"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >RESERVE
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    reservation: state.reservation,
});

export default connect(mapStateToProps, { addReservation })(ReservationModal);
