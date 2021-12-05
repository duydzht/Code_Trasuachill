import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            name: '',
            isModalOpen: false,
        };
        this.searchName = this.searchName.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
    }

    // phương thức lọc input value trong product nhận value cả chữ hoa và chữ thường
    searchName(event) {
        const result = this.props.products.filter((s) =>
            s.name.toLowerCase().match(this.state.name)
        );
        this.setState({
            products: result,
            name: this.name.value,
        });
        event.preventDefault();
    }

    //khi input có value ngay lập tức sẽ truyền vào name
    //sử dụng cho nút tìm kiếm
    handleInputChanged(event) {
        this.setState({
            name: event.target.value,
        });
    }

    render() {
        const RenderMenuItem = ({ product }) => {
            return (
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)',
                    }}
                >
                    <Card className='card-prods'>
                        <Link
                            to={`/menu/${product.id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <CardImg
                                width='100%'
                                src={product.image}
                                alt={product.name}
                            />
                            <CardTitle className='card-title-menu'>
                                {product.name}
                            </CardTitle>
                        </Link>
                        <a
                            href='https://www.facebook.com/bichdao.vu.3'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ textDecoration: 'none' }}
                        >
                            <div type='button' className='btn-menu-prods p-1'>
                                ĐẶT HÀNG
                            </div>
                        </a>
                    </Card>
                </FadeTransform>
            );
        };

        const menu = this.state.products.map((product) => {
            return (
                <div className='col-6 col-md-4 col-lg-3 mb-5' key={product.id}>
                    <RenderMenuItem product={product} />
                </div>
            );
        });

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
                            {' '}
                            Nổi bật
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
                                SẢN PHẨM NỔI BẬT
                            </p>
                        </div>
                        <hr />
                    </div>
                </div>
                <Form onSubmit={this.searchName} className='row'>
                    <FormGroup md={6}>
                        <Input
                            className='form-control mb-3'
                            type='text'
                            id='search'
                            name='search'
                            placeholder='Bạn muốn tìm gì ?'
                            onChange={this.handleInputChanged}
                            innerRef={(input) => (this.name = input)}
                        />
                    </FormGroup>
                    <Button
                        md={3}
                        type='submit'
                        value='submit'
                        className='btn-menu-search mb-5 ml-3'
                    >
                        Tìm
                    </Button>
                </Form>
                <div className='row'>{menu}</div>
                <div className='row'>
                    <Link to='/detailmenu'>
                        <button type='button' className='btn-menu-route p-1'>
                            <span className='fa fa-list'></span> THỰC ĐƠN CHI TIẾT
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Menu;
