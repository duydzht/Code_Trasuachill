import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this); 
  }

  //responsive của Navbar
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen, //khi toggleNav được click, giá trị của nó luôn luôn khác isOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md" className="sticky-top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto m-0" href="/">
              <img
                src="assets/images/logo.png"
                height="60"
                width="100"
                alt="Chill..."
                style={{border: '1px solid white', borderRadius: '25%'}}
                className="p-1"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem className="">
                  <NavLink
                    onClick={this.toggleNav}
                    className="nav-link ml-5 mr-3 text-light"
                    to="/home"
                  >
                    <span className="fa fa-home fa-lg"></span>{' '} Trang chủ
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.toggleNav}
                    className="nav-link ml-3 mr-3 text-light"
                    to="/menu"
                  >
                    <span className="fa fa-users fa-lg"></span>{' '} Nổi bật
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link ml-3 mr-3 text-light"
                    to="/departments"
                    onClick={this.toggleNav}
                  >
                    <span className="fa fa-cutlery fa-lg"></span>{' '} Danh mục
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link ml-3 mr-3 text-light"
                    to="/detailmenu"
                    onClick={this.toggleNav}
                  >
                    <span className="fa fa-coffee fa-lg"></span>{' '} Thực đơn
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.toggleNav}
                    className="nav-link ml-3 mr-3 text-light"
                    to="/about"
                  >
                    <span className="fa fa-file-text fa-lg"></span>{' '} Giới thiệu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link ml-3 mr-3 text-light"
                    to="/contact"
                    onClick={this.toggleNav}
                  >
                    <span className="fa fa-volume-control-phone fa-lg"></span>{' '}
                    Liên Hệ
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
