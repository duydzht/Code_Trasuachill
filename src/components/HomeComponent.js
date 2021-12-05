import React from 'react';
import { Card, CardImg, CardTitle, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

// import { Fade } from 'react-animation-components';

function Home() {
    return (
        <div>
            <div className='row'>
                <Jumbotron className='bannerimg'>
                    <div className='container'>
                        <div className='col-12 text-bannerimg'>
                            <p
                                style={{
                                    fontSize: '50px',
                                    fontWeight: 'bold',
                                }}
                            >
                                CHILL.... TEA
                            </p>
                            <i>
                                <p style={{ fontSize: '20px' }}>
                                    Cuộc đời như một tách trà......
                                    <br />
                                    ..... tất nhiên sẽ không đắng cả đời,
                                    <br /> Nhưng phải trải qua dư vị đó mới cảm
                                    nhận được vị ngọt.
                                </p>
                            </i>
                            <button className='btn-bannerimg-prods p-1'>
                                ĐẶT HÀNG NGAY
                            </button>
                        </div>
                    </div>
                </Jumbotron>
                <div className='m-5 row'>
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
                    <div className='col-6 col-md-4 col-lg-3'>
                        <Card className='card-prods'>
                            <CardImg
                                width='100%'
                                src='/assets/images/suatuoisotxoai.jpg'
                                alt=''
                            />
                            <CardTitle className='card-title-menu'>
                                SỮA TƯƠI XỐT XOÀI
                            </CardTitle>
                            <a
                                href='https://www.facebook.com/bichdao.vu.3'
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    type='button'
                                    className='btn-menu-prods p-1'
                                >
                                    ĐẶT HÀNG
                                </div>
                            </a>
                        </Card>
                    </div>
                    <div className='col-6 col-md-4 col-lg-3'>
                        <Card className='card-prods'>
                            <CardImg
                                width='100%'
                                src='/assets/images/matchadaxoay.jpg'
                                alt=''
                            />
                            <CardTitle className='card-title-menu'>
                                MATCHA ĐÁ XAY
                            </CardTitle>
                            <a
                                href='https://www.facebook.com/bichdao.vu.3'
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    type='button'
                                    className='btn-menu-prods p-1'
                                >
                                    ĐẶT HÀNG
                                </div>
                            </a>
                        </Card>
                    </div>
                    <div className='col-6 col-md-4 col-lg-3'>
                        <Card className='card-prods'>
                            <CardImg
                                width='100%'
                                src='/assets/images/scdautay.jpg'
                                alt=''
                            />
                            <CardTitle className='card-title-menu'>
                                SỮA CHUA DÂU TÂY
                            </CardTitle>
                            <a
                                href='https://www.facebook.com/bichdao.vu.3'
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    type='button'
                                    className='btn-menu-prods p-1'
                                >
                                    ĐẶT HÀNG
                                </div>
                            </a>
                        </Card>
                    </div>
                    <div className='col-6 col-md-4 col-lg-3'>
                        <Card className='card-prods'>
                            <CardImg
                                width='100%'
                                src='/assets/images/socolacotdua.jpg'
                                alt=''
                            />
                            <CardTitle className='card-title-menu'>
                                CHOCOLATE CỐT DỪA
                            </CardTitle>
                            <a
                                href='https://www.facebook.com/bichdao.vu.3'
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    type='button'
                                    className='btn-menu-prods p-1'
                                >
                                    ĐẶT HÀNG
                                </div>
                            </a>
                        </Card>
                    </div>
                </div>
                <Link to='/menu' className='home-link m-auto'>
                    <button className='btn-home-more p-2 mb-3'>
                        XEM TẤT CẢ
                    </button>
                </Link>
            </div>
            <div className='col-12 mb-5'>
                <div className='home-body-img'>
                    <div className='home-body-img-text col-lg-4 offset-lg-8'>
                        <p className='home-body-text'>CHILL... TEA</p>
                        <p>Milk Tea & Fast Food</p>
                        <p>
                            Bên cạnh những ly trà sữa ngon - sạch - tươi, chúng
                            tôi luôn tự tin mang đến khách hàng những trải
                            nghiệm tốt nhất về dịch vụ và không gian
                        </p>
                        <button className='home-btn-image p-2 mt-3'>
                            XEM THÊM
                        </button>
                    </div>
                </div>
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
                    <p className='menu-prod-like-text'>VỀ CHÚNG TÔI</p>
                </div>
                <hr />
            </div>
            <div className='col-12 mb-5'>
                <div className='home-body-img2'>
                    <div className='home-body-img-text2 col-lg-4'>
                        <p className='home-body-text2'>CHILL... TEA</p>
                        <p style={{ color: 'gray', fontSize: '20px' }}>
                            Câu chuyện thương hiệu
                        </p>
                        <p>
                            Trà sữa là loại trà được kết hợp giữa trà và sữa.
                            Khi nhắc đến trà sữa thì người Việt chúng ta sẽ nghĩ
                            ngay đến những ly trà sữa mát lạnh với những hạt
                            trân châu dẻo ngọt. Trà sữa từ Anh Quốc được xem tạo
                            nên nền tảng cho các loại trà sữa nổi tiếng sau này.
                        </p>
                        <button className='home-btn-image2 p-2 mt-3'>
                            XEM THÊM
                        </button>
                    </div>
                </div>
            </div>
            <Link to='/about' className='home-link '>
                <div className='align-btn'>
                    <button className='btn-home-more p-2 mb-3'>
                        TÌM HIỂU THÊM
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default Home;
