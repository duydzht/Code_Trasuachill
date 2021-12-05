import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderPro({ product }) {
  if (product != null) {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-4 col-lg-4">
            <img
              width="100%"
              height="320px"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="col-12 col-md-8 col-lg-8 border border-white text-warning rounded">
            <h3 className="mt-2 text-dark">Tên sản phẩm: {product.name}</h3>
            <p className="text-success" style={{ fontWeight: "bold" }}>
              Danh mục: {product.department.name}
            </p>
            <p
              className="text-success fa fa-tags"
              style={{ fontWeight: "bold" }}
            >
              Tình trạng: <i className="text-danger">Còn hàng</i>
            </p>
            <br />
            <p
              className="fa fa-clock-o text-dark"
              style={{ fontWeight: "bold" }}
            >
              :<b className="text-success"> Đang mở cửa</b> 06:30 - 21:30
            </p>
            <br />
            <p className="mr-3 fa fa-money text-dark">
              :
              <b className="text-warning" style={{ fontWeight: "bold" }}>
                {" "}
                {product.price} vnd
              </b>
            </p>
            <a href="https://www.facebook.com/bichdao.vu.3">
              <button className="btn btn-info">
                <span className="fa fa-shopping-cart "> Đặt mua</span>
              </button>
            </a>
            <br />
            <p className="fa fa-comments text-dark"> Đánh giá:</p>
            <div className="row" style={{ fontWeight: "bold" }}>
              <Card className="col-3 mr-4 ml-3 text-center">
                <CardText className="text-success">Đánh giá chung</CardText>
                <CardTitle className="text-danger">8,9</CardTitle>
              </Card>
              <Card className="col-2 mr-2 text-center">
                <CardText className="text-success">Chất lượng</CardText>
                <CardTitle>9,1</CardTitle>
              </Card>
              <Card className="col-2 mr-2 text-center">
                <CardText className="text-success">Phục vụ</CardText>
                <CardTitle>8,9</CardTitle>
              </Card>
              <Card className="col-2 mr-2 text-center">
                <CardText className="text-success">Giá cả</CardText>
                <CardTitle>8,7</CardTitle>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const ProductDetail = (props) => {
  if (props.product != null)
    return (
      <div className="container">
        <div className="row text-dark">
          <Breadcrumb className="bg-danger mt-2">
            <BreadcrumbItem>
              <Link to="/menu" className='text-warning'>Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active className="text-light">{props.product.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
                <div className='menu-prod-like'>
                    <img
                        src='/assets/images/logo.png'
                        alt=''
                        width='200px'
                        height='120px'
                        className='pb-4'
                    />
                    <p className='menu-prod-like-text'>{props.product.name}</p>
                </div>
                <hr />
            </div>
        </div>
        <div>
          <RenderPro product={props.product} />
        </div>
      </div>
    );
  else return <div></div>;
};

export default ProductDetail;
