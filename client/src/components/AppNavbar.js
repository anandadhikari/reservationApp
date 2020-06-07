import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';
import ReservationForm from './ReservationForm'


class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                    <strong> { user ? `Welcome ${user.name}` : '' } </strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                    
                    
                </NavItem>
            </Fragment>
            
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        );

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">RESERVATION</NavbarBrand>
                    <ReservationForm/>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        { isAuthenticated ? authLinks : guestLinks }
                            
                        </Nav>
                        <Nav  navbar>
                            <NavItem>
                                <NavLink href="/reservationList">Reservations</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>

                   

                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);
