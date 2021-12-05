import React, { Component } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardTitle,
    CardImg,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Payroll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            depmenu: this.props.depmenu,
        };
    }

    render() {
        const RenderPayroll = ({ depmenu }) => {
            return (
                <Card className='text-light bg-info border border-light m-5'>
                    <CardTitle className='text-center pt-2'>
                        {depmenu.name}
                    </CardTitle>
                    <CardImg src={depmenu.imgdep} />
                </Card>
            );
        };

        const payroll = this.state.depmenu.map((depmenu) => {
            return (
                <div className='col-12 col-md-6 mb-2' key={depmenu.id}>
                    <RenderPayroll depmenu={depmenu} />
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
                            Thực đơn
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
                                DANH MỤC CHÍNH
                            </p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className='row'>{payroll}</div>
            </div>
        );
    }
}

export default Payroll;
