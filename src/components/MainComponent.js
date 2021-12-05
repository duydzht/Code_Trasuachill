import React, { Component } from "react";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import DepartMenu from "./DepartMenuComponent";
import ProductDetail from "./ProductdetailComponent";
import Department from "./DepartmentComponent";
import Contact from "./ContactComponent";
import Aboutus from "./Aboutus";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const mapStateToProps = (state) => {
  return {
    products: state.products,
    departments: state.departments,
  };
};




class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      departments: this.props.departments,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    const ProWithId = ({ match }) => {
      return (
        <ProductDetail
          product={
            this.state.products.filter(
              (product) => product.id === parseInt(match.params.id, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route
                path="/departments"
                component={() => (
                  <Department department={this.state.departments} />
                )}
              />
              
              <Route
                exact
                path="/menu"
                component={() => (
                  <Menu
                    products={this.state.products}
                  />
                )}
              />
              {/* exact để ngăn đường dẫn chọn sai vì có 2 /menu */}
              <Route path="/menu/:id" component={ProWithId} />
              <Route
                exact
                path="/detailmenu"
                component={() => <DepartMenu depmenu={this.state.departments} />}
              />
              <Route
                path="/contact"
                component={() => (
                  <Contact  />
                )}
              />
              <Route
                path="/about"
                component={() => (
                  <Aboutus  />
                )}
              />
              <Route path="/" component={HomePage} />
              {/* <Redirect to="/home" /> */}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));