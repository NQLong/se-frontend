import React from 'react';
import './Footer.css'


function Footer(props) {
    return (
        <div className="footer">
        {/* Begin Footer Static Top Area */}
        
        {/* Footer Static Top Area End Here */}
        {/* Begin Footer Static Middle Area */}
        <div className="mt-50 footer-static-middle">
          <div className="container">
            <div className="footer-logo-wrap pt-50 pb-35">
              <div className="row">
                {/* Begin Footer Logo Area */}
                <div className="col-lg-4 col-md-6">
                  <div className="footer-logo">
                    <p className="info">
                      Chúng tôi là đội ngũ với 5 thành viên chuyên thiết kế Website siêu cấp vip bro 
                    </p>
                    <p>Leader: Nguyễn Quang Long lập trình viên Backend</p>
                    <p>Thành viên: Lê Huy Ngọ lập trình viên Backend</p>
                    <p>Thành viên: Nguyễn Duy Khánh lập trình viên Frontend</p>
                    <p>Thành viên: Võ Văn Đăng Khoa lập trình viên Frontend</p>
                    <p>Thành viên: Nguyễn Tấn Lộc lập trình viên Frontend</p>
                  </div>
                  <ul className="des">
                    <li>
                      <span>Địa chỉ: </span>
                      Đại học Bách Khoa Thành phố Hồ Chí Minh
                    </li>
                    <li>
                      <span>Phone: </span>
                      <a href="#">0987 654 321</a>
                    </li>
                    <li>
                      <span>Email: </span>
                      <a href="dhbk">dhbk@hcmut.edu.vn</a>
                    </li>
                  </ul>
                </div>
                {/* Footer Logo Area End Here */}
                {/* Begin Footer Block Area */}
                <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="footer-block">
                    <h3 className="footer-block-title">Món ăn</h3>
                    <ul>
                      <li><a href="#">Pizza</a></li>
                      <li><a href="#">Sushi</a></li>
                      <li><a href="#">Sushi</a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Block Area End Here */}
                {/* Begin Footer Block Area */}
                <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="footer-block">
                    <h3 className="footer-block-title">Nhà hàng</h3>
                    <ul>
                      <li><a href="#">Giới thiệu</a></li>
                      <li><a href="#">Liên hệ với chúng tôi</a></li>
                    </ul>
                  </div>
                </div>
                {/* Footer Block Area End Here */}
                {/* Begin Footer Block Area */}
                <div className="col-lg-4">
                  <div className="footer-block">
                    <h3 className="footer-block-title">Theo dõi chúng tôi </h3>
                    <ul className="social-link">
                      <li className="twitter">
                        <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="rss">
                        <a href="https://rss.com/" data-toggle="tooltip" target="_blank" title="RSS">
                          <i className="fa fa-rss" />
                        </a>
                      </li>
                      <li className="google-plus">
                        <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google +">
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                      <li className="facebook">
                        <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="youtube">
                        <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                          <i className="fa fa-youtube" />
                        </a>
                      </li>
                      <li className="instagram">
                        <a href="https://www.instagram.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Footer Block Area End Here */}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Static Middle Area End Here */}
        {/* Begin Footer Static Bottom Area */}
     
      </div>
    );
}

export default Footer;