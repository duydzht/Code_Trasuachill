import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody,
    CardHeader,
    CardImg,
    CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Aboutus(props) {
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
                        Giới thiệu
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
                        <p className='menu-prod-like-text'>VỀ CHÚNG TÔI</p>
                    </div>
                    <hr />
                </div>
            </div>
            <div className='row row-content'>
                <div className='col-12 col-md-6'>
                    <h2>Câu chuyện thương hiệu</h2>
                    <p>
                        Có thể nói, trà là một thức uống quen thuộc, ra đời và
                        tồn tại hàng thập kỷ qua được nhiều người trên thế giới
                        yêu thích. Trải qua bao thăng trầm, tại Việt Nam uống
                        trà còn trở thành một nét văn hóa rất riêng và đặc biệt.
                        Người ta không chỉ xem trà như một thức uống giải tỏa
                        cơn khát, đem lại sức khỏe mà còn nâng lên thành một thứ
                        nghệ thuật thưởng thức. Người uống trà dựa trên nguồn
                        cảm hứng này mà suy ngẫm
                    </p>
                    <p>
                        Sữa là thực phẩm có giá trị dinh dưỡng cao, chứa đầy đủ
                        các nhóm chất cần thiết cho cơ thể như protein, lipit,
                        đường, vitamin và các khoáng chất. Các nghiên cứu khoa
                        học đã chứng minh thức ăn và chế phẩm từ sữa luôn là
                        nguồn dưỡng chất lý tưởng cho con người. Đây là nguồn
                        thực phẩm đúng nghĩa chứ không chỉ là thực phẩm bổ sung.
                        Việc uống sữa thường xuyên và đúng cách còn giúp bạn có
                        thể đề phòng nhiều bệnh tật.
                    </p>
                    <p>
                        Trà sữa là loại trà được kết hợp giữa trà và sữa. Khi
                        nhắc đến trà sữa thì người Việt chúng ta sẽ nghĩ ngay
                        đến những ly trà sữa mát lạnh với những hạt trân châu
                        dẻo ngọt. Trà sữa từ Anh Quốc được xem tạo nên nền tảng
                        cho các loại trà sữa nổi tiếng sau này. Từ trà sữa Đài
                        Loan cho đến trà sữa Thái hay trà sữa Hong Kong. Thế
                        nhưng bạn có biết rằng trà sữa đã xuất hiện từ hàng trăm
                        năm trước khi trà xuất hiện ở Anh. Ở những đồng cỏ mênh
                        mông của Mông Cổ.
                    </p>
                    <Card className='bg-info'>
                        <CardTitle className='mt-2 text-center text-light'>
                            Chill... Milktea and FastFood
                        </CardTitle>
                        <CardImg src='/images/cuahang2.jpg' alt='' />
                    </Card>
                </div>
                <div className='col-12 col-md-5'>
                    <Card>
                        <CardHeader className='bg-primary text-white'>
                            Facts At a Glance
                        </CardHeader>
                        <CardImg src='/images/cuahang.jpg' alt='' />
                        <CardBody>
                            <dl className='row p-1'>
                                <dt className='col-6'>Khai trương</dt>
                                <dd className='col-6'>29/6/2020</dd>
                                <dt className='col-6'>Xuất sứ thương hiệu</dt>
                                <dd className='col-6'>UK. Vương Quốc Anh</dd>
                                <dt className='col-6'>Hình thức</dt>
                                <dd className='col-6'>Cửa hàng</dd>
                                <dt className='col-6'>Mặt hàng chính</dt>
                                <dd className='col-6'>Đồ uống, đồ ăn nhanh</dd>
                                <dt className='col-6'>Shipcode</dt>
                                <dd className='col-6'>
                                    Phạm vi 15km. Free ship cho đơn hàng từ 99k
                                </dd>
                            </dl>
                        </CardBody>
                    </Card>
                    <p className='mt-4'>
                        Dựa trên những điều đó, chúng tôi -{' '}
                        <em>Chill... Milktea and FastFood</em> đã kế thừa và
                        phát triển chúng, đưa sự kết hợp tuyệt vời này vào sản
                        phầm của mình để có thể làm hài lòng các bạn - những vị
                        khách thượng đế. Không chỉ vậy, đến với chúng tôi các
                        bạn không những được thưởng thức những ly trà sữa, cà
                        phê tuyệt vời mà còn được trải nghiệm sự tận tâm, nhiệt
                        tình và chu đáo đến từ đội ngũ phục vụ. Bởi chúng tôi
                        hiểu rằng{' '}
                        <em>
                            "Làm hài lòng các bạn chính là sứ mệnh và trách
                            nhiệm của chúng tôi"
                        </em>
                    </p>
                </div>
                <div className='col-12'>
                    <Card>
                        <CardBody className='bg-faded'>
                            <blockquote className='blockquote'>
                                <p className='mb-0'>
                                    Một thương hiệu tốt không chỉ ở chất lượng
                                    sản phẩm tốt, mà nó còn ở cách làm hài lòng
                                    khách hàng và giá cả của chúng....
                                </p>
                                <footer className='blockquote-footer'>
                                    Yogi Berra,
                                    <cite title='Source Title'>
                                        The Wit and Wisdom of Yogi Berra, P.
                                        Pepe, Diversion Books, 2014
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
