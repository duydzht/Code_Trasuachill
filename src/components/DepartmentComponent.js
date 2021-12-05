import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';

function Department(props) {
    const departments = props.department.map((department) => {
        return (
            <Fade in className='col-12 col-md-4 col-lg-3' key={department.id}>
                <Card className='m-3 text-center bg-danger text-light border-light'>
                    <Link style={{ textDecoration: 'none' }} to='/detailmenu'>
                        <h4 className='mt-2 text-light'>{department.name}</h4>
                        <p className='text-warning'>
                            Số lượng món: {department.numberOfProduct}
                        </p>
                        <CardImg src={department.img} />
                    </Link>
                </Card>
            </Fade>
        );
    });

    return (
        <div className='container'>
            <div className='row mt-4'>
                <Breadcrumb className='bg-danger mt-2'>
                    <BreadcrumbItem>
                        <Link to='/home' className='text-warning'>
                            Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active className='text-light'>
                        Danh mục sản phẩm
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className='col-12'>
                <div className='menu-prod-like'>
                    <img
                        src='/assets/images/logo.png'
                        alt=''
                        width='200px'
                        height='120px'
                        className='pb-4'
                    />
                    <p className='menu-prod-like-text'>DANH MỤC CHÍNH</p>
                </div>
                <hr />
            </div>
            <div className='row mb-5'>{departments}</div>
        </div>
    );
}

export default Department;
