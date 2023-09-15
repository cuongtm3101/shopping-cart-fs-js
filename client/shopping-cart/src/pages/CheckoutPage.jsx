import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CheckoutPage = () => {
  let [provinces, setProvinces] = useState([]); // Tỉnh/Thành Phố
  let [activeProvince, setActiveProvince] = useState("");

  let [districts, setDistricts] = useState([]); // Quận/Huyện
  let [activeDistrict, setActiveDistrict] = useState("");

  let [wards, setWards] = useState([]); // Phường/Xã
  let [activeWard, setActiveWard] = useState("");

  let VIETNAM_BASE_API = "https://provinces.open-api.vn/api/?depth=3";

  const fetchProvinces = async () => {
    try {
      let res = await fetch(VIETNAM_BASE_API);
      let data = await res.json();
      console.log(data);
      setProvinces(() => [...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProvinces();
  }, []);

  useEffect(() => {
    let clickProvince = provinces.find((e) => e.code == activeProvince);
    if (clickProvince) {
      setDistricts(() => [...clickProvince.districts]);
      setActiveWard("");
    }
  }, [activeProvince]);

  useEffect(() => {
    let clickDistrict = districts.find((e) => e.code == activeDistrict);
    if (clickDistrict) {
      setWards(() => [...clickDistrict.wards]);
    }
  }, [activeDistrict]);

  const handleActiveProvince = (e) => {
    if (!e.target.value) {
      resetAllProvinces();
    } else {
      setActiveProvince(e.target.value);
      // activeProvince KHÔNG THỂ
    }
  };

  const handleActiveDistrict = (e) => {
    if (!e.target.value) {
      resetAllProvinces();
    } else {
      setActiveDistrict(e.target.value);
    }
  };

  const handleActiveWard = (e) => {
    if (!e.target.value) {
      resetAllProvinces();
    } else {
      setActiveWard(e.target.value);
    }
  };

  function resetAllProvinces() {
    setActiveProvince("");
    setActiveDistrict("");
    setDistricts([]);
    setActiveWard("");
    setWards([]);
  }

  return (
    <div className="col-7 left-side">
      <h3 className="title">CiCi - Thượng Đỉnh Yến</h3>
      <p className="sub-title">Thông tin giao hàng</p>
      <div className="remind">
        Bạn đã có tài khoản? <Link to="/">Đăng nhập</Link>
      </div>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Họ và tên"
          />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Số điện thoại"
          />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Địa chỉ" />
        </div>

        <div className="address-container mb-3">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={handleActiveProvince}
            value={activeProvince}
          >
            <option selected value="">
              Tỉnh/Thành
            </option>
            {provinces.length > 0 &&
              provinces.map((e, i) => <option value={e.code}>{e.name}</option>)}
          </select>

          <select
            class="form-select"
            aria-label="Default select example"
            onChange={handleActiveDistrict}
            value={activeDistrict}
          >
            <option selected value="">
              Quận/Huyện
            </option>
            {districts.length > 0 &&
              districts.map((e, i) => <option value={e.code}>{e.name}</option>)}
          </select>

          <select
            class="form-select"
            aria-label="Default select example"
            onChange={handleActiveWard}
            value={activeWard}
          >
            <option selected value="">
              Phường/Xã
            </option>
            {wards.length > 0 &&
              wards.map((e, i) => <option value={e.code}>{e.name}</option>)}
          </select>
        </div>

        <div className="form-footer mb-3">
          <Link className="back" to="/cart">
            Giỏ hàng
          </Link>
          <Link className="step btn btn-primary" to="/checkout/step-2">
            Tiếp tục đến phương thức thanh toán
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
