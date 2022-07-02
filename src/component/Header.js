
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// import { CardSubtitle } from 'reactstrap';

function Header() {
    return (
        <>
             {/* Topbar Start */}
        {/* Topbar End */}
        {/* Navbar Start */}
        <div className="container-fluid position-relative nav-bar p-0">
          <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex: 9}}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
              <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-primary"><span className="text-secondary">e</span>Booking</h1>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto py-0">
                  <a href="index.html" className="nav-item nav-link active">Home</a>
                  <a href="about.html" className="nav-item nav-link">About</a>
                  <a href="product.html" className="nav-item nav-link">Product</a>
                </div>
                <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                  <h1 className="m-0 display-4 text-primary"><span className="text-secondary">e</span>Booking</h1>
                </a>
                <div className="navbar-nav mr-auto py-0">
                  <a href="service.html" className="nav-item nav-link">Service</a>
                  <a href="gallery.html" className="nav-item nav-link">Gallery</a>
                  <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
            <div className='container'>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i-dulich.vnecdn.net/2020/07/01/shutterstock-1169930359-4299-1593590420.jpg" alt="Los Angeles" width="1100" height="500" />
                            <div className="carousel-caption">
                                <h3>Thành phố Đà Nẵng</h3>
                                <p>Đến Đà Nẵng với những trải nghiệm mới lạ!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://res.klook.com/image/upload/c_crop,w_1125,h_624,x_1,y_0/w_1125,h_624/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/destination/ur2mrg23d91mex03l4mw.jpg" alt="Chicago" width="1100" height="500" />
                            <div className="carousel-caption">
                                <h3>Cầu Vàng</h3>
                                <p>Khám phá địa danh mới!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://image.vtc.vn/upload/2021/07/14/sai-gon-98931-17345353.jpg" alt="New York" width="1100" height="500" />
                            <div className="carousel-caption">
                                <h3>Thành phố Hồ Chí Minh</h3>
                                <p>Thành phố về đêm đầy ắt ánh đèn!</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
                <div className="container">
                    <h3>Tìm kiếm chuyến bay được ưa thích</h3>
                    <p>Luôn cung cấp cho bạn những trải nghiệm tuyệt vời.</p>
                </div>

            </div>
        </>

    )


}
export default Header;
