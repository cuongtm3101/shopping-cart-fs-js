import { Link, useSearchParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const CheckoutLayout = () => {
  return (
    <div className="CheckoutPage">
      <div className="container">
        <div className="row">
          <Outlet />
          <div className="col-5 order-summary p-5 mt-5">
            <table className="table table-borderless product-table align-middle">
              <thead>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </thead>
              <tbody>
                <tr>
                  <td className="product-img">
                    <div>
                      <img
                        src="https://product.hstatic.net/200000404397/product/6fc520de32fae3a4baeb_3c4daed861024486a268ecd30b1b92d6_451a684b427f4a238d9d61bd284c8c14_small.jpg"
                        alt=""
                      />
                      <span className="product-count"> 1</span>
                    </div>
                  </td>
                  <td className="product-name">
                    <span>Nước Yến Hồng Sâm</span>
                    <p style={{ fontSize: "12px", color: "#96969" }}>50gram</p>
                  </td>
                  <td className="product-price text-end">55000</td>
                </tr>
                <tr>
                  <td className="product-img">
                    <div>
                      <img
                        src="https://product.hstatic.net/200000404397/product/6fc520de32fae3a4baeb_3c4daed861024486a268ecd30b1b92d6_451a684b427f4a238d9d61bd284c8c14_small.jpg"
                        alt=""
                      />
                      <span className="product-count"> 1</span>
                    </div>
                  </td>
                  <td className="product-name">
                    <span>Nước Yến Hồng Sâm</span>
                    <p style={{ fontSize: "12px", color: "#96969" }}>50gram</p>
                  </td>
                  <td className="product-price text-end">55000</td>
                </tr>
              </tbody>
            </table>

            <div className="sale-code d-flex align-items-center gap-2 ">
              <input type="text" placeholder="Mã giảm giá" />
              <button className="btn ">Sử dụng</button>
            </div>

            <div className="product-total">
              <div>
                <span>Tạm tính</span>
                <span>50000</span>
              </div>
              <div>
                <span>Phí vận chuyển</span>
                <span>---</span>
              </div>
              <div className="total-price ">
                <span style={{ fontSize: "20px" }}>Tổng cộng</span>
                <span>5000000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;
