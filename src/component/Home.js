
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// import { CardSubtitle } from 'reactstrap';



function Home() {

    const [tickets, setTickets] = useState([]);
    const getTickets = () => {
        axios.get('http://localhost:3000/tickets/')
            .then(function (response) {
                console.log(response.data);
                setTickets(response.data)
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {

            });
    }
    useEffect(() => {
        getTickets();

    }, [])
    return (

        <div className="container-fluit card bg-info">
            <br/>
            <div className="row">
                <div className="col-2">
                </div>
                <div className='col-8 row'>
                    <div className='col-3'><a className="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-list-type="Footer" data-content-type="Navigation" data-content-title="Vietnam Airlines" data-content-id="/vn/vi/vietnam-airlines" href="/vn/vi/vietnam-airlines">
                        <h4 className='text-warning'>
                            Vietnam Airlines
                        </h4>
                    </a>
                        <ul className="list-unstyled ">
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Giới Thiệu Công Ty" data-content-id="/vn/vi/vietnam-airlines/about-us" href="/vn/vi/vietnam-airlines/about-us">Giới Thiệu Công Ty</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Đội Bay" data-content-id="/vn/vi/vietnam-airlines/our-fleets" href="/vn/vi/vietnam-airlines/our-fleets">Đội Bay</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Đối Tác" data-content-id="/vn/vi/vietnam-airlines/subsidiaries-partners" href="/vn/vi/vietnam-airlines/subsidiaries-partners">Đối Tác</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Thông Tin Truyền Thông" data-content-id="/vn/vi/vietnam-airlines/press-room" href="/vn/vi/vietnam-airlines/press-room">Thông Tin Truyền Thông</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Quan Hệ Cổ Đông" data-content-id="/vn/vi/vietnam-airlines/investor-relations" href="/vn/vi/vietnam-airlines/investor-relations">Quan Hệ Cổ Đông</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Thông Tin Đấu Thầu" data-content-id="/vn/vi/vietnam-airlines/procurement" href="/vn/vi/vietnam-airlines/procurement">Thông Tin Đấu Thầu</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Việc Làm với Vietnam Airlines" data-content-id="/vn/vi/vietnam-airlines/career-with-us" href="/vn/vi/vietnam-airlines/career-with-us">Việc Làm với Vietnam Airlines</a>
                            </li>
                        </ul></div>
                    <div className='col-3'><a className="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-list-type="Footer" data-content-type="Navigation" data-content-title="Pháp lý" data-content-id="/vn/vi/legal" href="/vn/vi/legal">
                        <h4 className='text-warning'>
                            Pháp lý
                        </h4>
                    </a>
                        <ul className="list-unstyled ">
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Các Điều Kiện & Điều Khoản" data-content-id="/vn/vi/legal/terms-and-conditions" href="/vn/vi/legal/terms-and-conditions">Các Điều Kiện &amp; Điều Khoản</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Điều Lệ Vận Chuyển " data-content-id="/vn/vi/legal/conditions-of-carriage" href="/vn/vi/legal/conditions-of-carriage">Điều Lệ Vận Chuyển </a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Điều Kiện Sử Dụng Cookies" data-content-id="/vn/vi/legal/cookies-policy" href="/vn/vi/legal/cookies-policy">Điều Kiện Sử Dụng Cookies</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Bảo Mật Thông Tin" data-content-id="/vn/vi/legal/privacy-policy" href="/vn/vi/legal/privacy-policy">Bảo Mật Thông Tin</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Quy Chế Hoạt Động Sàn TMĐT" data-content-id="/vn/vi/legal/quy-che-hoat-dong-san-tmdt" href="/vn/vi/legal/quy-che-hoat-dong-san-tmdt">Quy Chế Hoạt Động Sàn TMĐT</a>
                            </li>
                        </ul></div>
                    <div className='col-3'><a className="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-list-type="Footer" data-content-type="Navigation" data-content-title="Hỗ Trợ" data-content-id="/vn/vi/support" href="/vn/vi/support">
                        <h4 className='text-warning'>
                            Hỗ Trợ
                        </h4>
                    </a>
                        <ul className="list-unstyled ">
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Góp ý dịch vụ" data-content-id="/vn/vi/support/claim-suggestion" href="/vn/vi/support/claim-suggestion">Góp ý dịch vụ</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Chăm sóc khách hàng" data-content-id="/vn/vi/support/customer-care" href="/vn/vi/support/customer-care">Chăm sóc khách hàng</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Chính Sách Bảo Vệ Hành Khách" data-content-id="/vn/vi/support/customer-service-plan" href="/vn/vi/support/customer-service-plan">Chính Sách Bảo Vệ Hành Khách</a>
                            </li>
                        </ul></div>
                    <div className='col-3'><a className="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-list-type="Footer" data-content-type="Navigation" data-content-title="Thông Tin Hữu Ích" data-content-id="/vn/vi/useful-information" href="/vn/vi/useful-information">
                        <h4 className='text-warning'>
                            Thông Tin Hữu Ích
                        </h4>
                    </a>
                        <ul className="list-unstyled ">
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Thông Tin Hành Lý" data-content-id="/vn/vi/useful-information/baggage-info" href="/vn/vi/useful-information/baggage-info">Thông Tin Hành Lý</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Cẩm nang mua vé online" data-content-id="/vn/vi/useful-information/huong-dan" href="/vn/vi/useful-information/huong-dan">Cẩm nang mua vé online</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Quảng cáo với Vietnam Airlines" data-content-id="/vn/vi/useful-information/advertise-with-us" href="/vn/vi/useful-information/advertise-with-us">Quảng cáo với Vietnam Airlines</a>
                            </li>
                            <li className=''>
                                <a data-list-type="Footer" className="text-decoration-none text-white" data-content-type="Navigation" data-content-title="Thuế, Phí, Lệ Phí & Phụ Thu" data-content-id="/vn/vi/useful-information/tax-fee-surcharges" href="/vn/vi/useful-information/tax-fee-surcharges">Thuế, Phí, Lệ Phí &amp; Phụ Thu</a>
                            </li>
                        </ul></div>
                </div>
                <div className="col-2">
                </div>
                

            </div>
            <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'>                        
                        <p className="text-white">
                        <p><i class="bi bi-telephone"></i> Trung tâm chăm sóc khách hàng tại Việt Nam (24/7): <a className="text-white" href="tel:19001100">1900 1100</a></p>
                        <p> <i class="bi bi-envelope"></i> <a className="text-white" href="mailto:Telesales@vietnamairlines.com">Email: Telesales@vietnamairlines.com</a></p>
                        </p>
                    </div>
                    <div className='col-4'></div>
                </div>
        </div>

    )


}
export default Home;
