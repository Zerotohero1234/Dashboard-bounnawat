import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
export const MainProducts = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { error: errorDelete, success: successDelete } = productDelete;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, successDelete]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">ສິນຄ້າ</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            ອັບສິນຄ້າລົງເວັບ
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        {/* <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto ">
              <input
                type="search"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>ປະເພດສິນຄ້າທັງໝົດ</option>
                <option>ຄອມພິວເຕີ</option>
                <option>ເສື້ອຜ້າ</option>
                <option>ອື່ນໆ</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>ເພີ່ມລ່າສຸດ</option>
                <option>ລາຄາຖືກ</option>
                <option>ມີຄົນເຂົ້າເບິ່ງຫຼາຍທີ່ສຸດ</option>
              </select>
            </div>
          </div>
        </header> */}

        <div className="card-body">
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* Products */}
              {products.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </div>
          )}

          {/* <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  ກັບ
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  ຕໍ່ໄປ
                </Link>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
