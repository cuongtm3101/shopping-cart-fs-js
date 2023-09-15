import { Link } from "react-router-dom";
const BillPage = () => {
  return (
    <div className="col-7 pt-5 mt-5 bill-content">
      <div className="success-icon">
        <i class="fa-regular fa-circle-check"></i>
      </div>
      <h3 className="title">CiCi- Thượng đỉnh yến</h3>
      <div className="bill-title">
        <h4>Đặt hàng thành công</h4>
        <span>Mã đơn hàng # 100930</span>
        <p>Cảm ơn bạn đã mua hàng</p>
        <span>
          Chúng tôi đã gửi đơn hàng đến abbc@gmail.com, vui lòng theo dõi đơn
          hàng
        </span>
      </div>

      <div className="bill-info">
        <h4>Thông tin đơn hàng</h4>
        <p>Thông tin giao hàng</p>
        <ul className="list-unstyled">
          <li>Nguyen văn A</li>
          <li>099999999999</li>
          <li>ac@gmail.com</li>
          <li>xã....</li>
          <li>huyện ....</li>
          <li>tỉnh .....</li>
          <li>viêt nam </li>
        </ul>
        <p>Phương thức thanh toán</p>
        <span>Thanh toán khi giao hàng</span>
      </div>
      <div className="d-flex justify-content-between align-items-center pt-4">
        <div>
          {" "}
          Cần hỗ trợ?
          <Link
            to="/"
            style={{ color: "#338dbc", fontSize: "" }}
            className="text-decoration-none"
          >
            Liên hệ chúng thôi
          </Link>
        </div>
        <Link type="submit" className="btn btn-primary continue-btn" to="/">
          Tiếp tục mua hàng
        </Link>
      </div>
    </div>
  );
};

export default BillPage;
