import React, { Component } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Label,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';

//tạo các validate cho form

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(value) {
        alert('Cảm ơn bạn ' + value.fullname + ' đã gửi phản hồi');
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb className='bg-danger mt-2'>
                        <BreadcrumbItem>
                            <Link to='/home' className='text-warning'>
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active className='text-light'>
                            Liên hệ
                        </BreadcrumbItem>
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
                            <p className='menu-prod-like-text'>
                                THÔNG TIN LIÊN HỆ
                            </p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Thông tin liên hệ</h3>
                        <br />
                    </div>
                    <div className='col-12 col-sm-3 offset-sm-1'>
                        <h5>Địa chỉ cửa hàng:</h5>
                        <address
                            className='text-dark'
                            style={{ fontSize: '20px' }}
                        >
                            214, Long Hưng
                            <br />
                            TT Hưng Hà, Hưng Hà
                            <br />
                            Thái Bình
                            <br />
                            <p>Liên hệ đặt hàng</p>
                            <i className='fa fa-facebook'></i>:
                            <a href='https://www.facebook.com/bichdao.vu.3'>
                                Mr Đào
                            </a>
                            <br />
                            <i className='fa fa-phone fa-lg'></i>: +84397580689
                            <br />
                            <i className='fa fa-envelope fa-lg'></i>:
                            <a href='mailto:buiduykhanh1901@gmail.com'>
                                Trà sữa Chill..
                            </a>
                        </address>
                    </div>
                    <div className='col-12 col-sm-7 offset-sm-1 text-center'>
                        <h5>Vị trí trên map</h5>
                        <img src='images/map.png' width='600px' alt='map' />
                    </div>
                    <div className='col-12 col-sm-11 offset-sm-1'>
                        <div className='btn-group' role='group'>
                            <a
                                role='button'
                                className='btn btn-primary'
                                href='tel:+84397580689'
                            >
                                <i className='fa fa-phone'></i> Call
                            </a>
                            <a
                                role='button'
                                className='btn btn-info'
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://www.facebook.com/Chill-MilkTea-FastFood-214-%C4%90%C6%B0%E1%BB%9Dng-Long-H%C6%B0ng-TT-H%C6%B0ng-H%C3%A0-103010185416959'
                            >
                                <i className='fa fa-facebook'></i> Facebook
                            </a>
                            <a
                                role='button'
                                className='btn btn-success'
                                href='mailto:buiduykhanh1901@gmail.com'
                            >
                                <i className='fa fa-envelope-o'></i> Email
                            </a>
                        </div>
                        <hr />
                    </div>
                    <div>
                        <div className="align-btn font-text">
                            <h3>Phản hồi của bạn về chúng tôi chúng tôi</h3>
                            <p>
                                Bạn có ý kiến vướng mắc về chất lượng sản phẩm, chất
                                lượng phục vụ, giả cả hoặc góp ý cho những điều đó
                                vui lòng điền đầy đủ thông tin vào Form dưới đây
                            </p>
                        </div>
                        <div className="align-btn">
                            <button onClick={this.toggleModal} className='btn-home-more p-2 mb-3'>
                                Form Feedback{' '}
                                <span className='fa fa-comments-o'></span>
                            </button>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Gửi phản hồi của bạn
                    </ModalHeader>
                    <ModalBody>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='col-12'>
                                    <LocalForm
                                        onSubmit={(value) =>
                                            this.handleSubmit(value)
                                        }
                                    >
                                        <Row className='form-group'>
                                            <Label htmlFor='fullname' md={3}>
                                                Tên bạn
                                            </Label>
                                            <Col md={9}>
                                                <Control.text
                                                    model='.fullname'
                                                    id='fullname'
                                                    name='fullname'
                                                    placeholder='Nhập tên của bạn'
                                                    required
                                                />
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <Label htmlFor='fb' md={3}>
                                                Địa chỉ Facebook
                                            </Label>
                                            <Col md={9}>
                                                <Control.text
                                                    model='.fb'
                                                    id='fb'
                                                    name='fb'
                                                    placeholder='Link Facebook cá nhân'
                                                    required
                                                />
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <Label htmlFor='depart' md={3}>
                                                Danh mục SP:{' '}
                                            </Label>
                                            <Col md={9}>
                                                <Control.select
                                                    model='depart'
                                                    id='depart'
                                                    name='depart'
                                                >
                                                    <option>Đồ uống</option>
                                                    <option>Đồ ăn nhanh</option>
                                                </Control.select>
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <Label htmlFor='proname' md={3}>
                                                Tên Sản phẩm:
                                            </Label>
                                            <Col md={9}>
                                                <Control.text
                                                    model='.proname'
                                                    id='proname'
                                                    name='proname'
                                                    placeholder='Ví dụ: Trà sữa TC đường đen'
                                                    required
                                                />
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <Label htmlFor='score' md={3}>
                                                Đánh giá:
                                            </Label>
                                            <Col md={9}>
                                                <Control.select
                                                    model='.score'
                                                    id='score'
                                                    name='score'
                                                >
                                                    <option>5.0</option>
                                                    <option>6.0</option>
                                                    <option>7.0</option>
                                                    <option>8.0</option>
                                                    <option>9.0</option>
                                                    <option>10.0</option>
                                                </Control.select>
                                            </Col>
                                        </Row>
                                        <Row className='form-group'>
                                            <Label htmlFor='feedback' md={3}>
                                                Phản hồi:{' '}
                                            </Label>
                                            <Col md={9}>
                                                <Control.textarea
                                                    model='.feedback'
                                                    id='feedback'
                                                    name='feedback'
                                                />
                                            </Col>
                                        </Row>
                                        <button type='submit' className='btn-home-more p-2 mb-3'>
                                            Send Feedback
                                        </button>
                                    </LocalForm>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default Contact;
