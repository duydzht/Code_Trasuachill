import React from 'react';

function Footer(props) {
    return (
        <div className='footer-page'>
            <div className='footer-cover row'>
                <div className='col-6 col-lg-3'>
                    <img
                        src='/assets/images/logo.png'
                        alt=''
                        
                        className='ft-img-banner'
                    />
                </div>
                <div className='col-6 col-lg-4'>
                    <p className='ft-title-text'>
                        CHILL... MILKTEA & FASSTFOOD
                    </p>
                    <p>
                        <span className='fa fa-map-marker'></span> 214 - đường
                        Long Hưng - thị trấn Hưng Hà - huyện Hưng Hà
                    </p>
                    <p>
                        <span className='fa fa-phone-square'></span>{' '}
                        (+84)-397-580-689
                    </p>
                    <p>
                        <span className='fa fa-envelope-o'></span>{' '}
                        buiduykhanh1901@gmail.com
                    </p>
                    <p>
                        <span className='fa fa-facebook-official'></span>{' '}
                        <a
                            style={{ textDecoration: 'none', color: 'white' }}
                            href='https://www.facebook.com/Chill-MilkTea-FastFood-214-%C4%90%C6%B0%E1%BB%9Dng-Long-H%C6%B0ng-TT-H%C6%B0ng-H%C3%A0-103010185416959'
                        >
                            {' '}
                            Chill... Milk Tea & Fast Food
                        </a>
                    </p>
                </div>
                <div className='col-6 col-lg-3'>
                    <p className='ft-title-text'>VỀ CHÚNG TÔI</p>
                    <p>Giới thiệu về Chill...</p>
                    <p>Tin tức khuyễn mại</p>
                    <p>Store Owner: Bich Dao Vu</p>
                </div>
                <div className='col-6 col-lg-2'>
                    <p className='ft-title-text'>CHÍNH SÁCH</p>
                    <p>Hình thức thanh toán</p>
                    <p>Vận chuyển, giao nhận</p>
                    <p>Đổi trả hoàn tiền</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
