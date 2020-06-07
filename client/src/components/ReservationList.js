import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button,Card,CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getReservation, deleteReservation } from '../actions/reservationActions';
import PropTypes from 'prop-types';



class ReservationList extends Component {
    static propTypes = {
        getReservation: PropTypes.func.isRequired,
        reservation: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getReservation();
    }

    onDeleteClick = id => {
        this.props.deleteReservation(id);
    }

    render() {
        const { reservation } = this.props.reservation;
        console.log(this.props.location.pathname)
        console.log(this.props.isAuthenticated)
        return (
            <div>
                {this.props.isAuthenticated ?
                
                <Container>

                    <ListGroup>
                        <TransitionGroup className="todo-list">
                        
                        
                        {reservation.length !== 0 ?                        
                            reservation.map(({ _id, name,email,number,address }) =>
                                <CSSTransition key={_id} timeout={400} classNames="fade">
                                    <ListGroupItem>
                      <Card style = {{backgroundColor : "#DCE775"}}>
        
                       <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle> {number}</CardSubtitle>
                        <CardText>{email}</CardText>
                        <CardText>{address}</CardText>

                        <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                         onClick={this.onDeleteClick.bind(this, _id)}>Remove Reservation</Button>
                         </CardBody>
                        </Card>
                                       
                         </ListGroupItem>
                        </CSSTransition>
                            )
                            : "No Reservations"}

                           
                        </TransitionGroup>
                    </ListGroup>
                </Container>
                 :
                 null
                    
                }
            </div>
            
        );
    }
}

const mapStateToProps = (state) => ({
    reservation: state.reservation,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getReservation, deleteReservation })(ReservationList);
