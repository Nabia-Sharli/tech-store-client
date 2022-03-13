import React, { useState } from "react";
import "./Dashboard.css";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link, NavLink, Outlet, useMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  // let { path, url } = useMatch();
  const { user, logOut, isAdmin } = useAuth();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="dashboard-area">
      <Container fluid className="ps-0">
        <Row className="p-0">
          <Col lg={2} className="p-0">
            <div className="side-navbar desktop">
              <Link to="/" className="logo">
                <img style={{ width: "120px" }} src={logo} alt="" />
              </Link>

              <div className="dashboard-menu">
                <ul>
                  {!isAdmin && (
                    <>
                      <li>
                        <NavLink end to="/dashboard/myOrder">
                          My Orders
                        </NavLink>
                      </li>
                      <li>
                        <NavLink end to="/dashboard/customerReview">
                          My Reviews
                        </NavLink>
                      </li>
                      <li>
                        <NavLink end to="/home">
                          Back To Home
                        </NavLink>
                      </li>
                    </>
                  )}
                  {isAdmin && (
                    <>
                      <li>
                        <NavLink end to="/dashboard/manageOrders">
                          Manage Orders
                        </NavLink>
                      </li>
                      <li>
                        <NavLink end to="/dashboard/addProducts">
                          Add Products
                        </NavLink>
                      </li>
                      <li>
                        <NavLink end to="/dashboard/manageProducts">
                          Manage Products
                        </NavLink>
                      </li>
                      <li>
                        <NavLink end to="/dashboard/makeAdmin">
                          Make an Admin
                        </NavLink>
                      </li>
                      <li>
                        <NavLink end to="/home">
                          Back To Home
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <button className="signin ms-4" onClick={logOut}>
                Logout
              </button>
            </div>
          </Col>
          <Col lg={10} className="p-0">
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <div className="side-navbar">
                <Link to="/" className="logo">
                  <img style={{ width: "120px" }} src={logo} alt="" />
                </Link>

                <div className="dashboard-menu">
                  <ul>
                    {!isAdmin && (
                      <>
                        <li>
                          <NavLink end to="/dashboard/myOrder">
                            My Orders
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/dashboard/customerReview">
                            My Reviews
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/home">
                            Back To Home
                          </NavLink>
                        </li>
                      </>
                    )}
                    {isAdmin && (
                      <>
                        <li>
                          <NavLink end to="/dashboard/manageOrders">
                            Manage Orders
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/dashboard/addProducts">
                            Add Products
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/dashboard/manageProducts">
                            Manage Products
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/dashboard/makeAdmin">
                            Make an Admin
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/home">
                            Back To Home
                          </NavLink>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <button className="signin ms-4" onClick={logOut}>
                  Logout
                </button>
              </div>
            </Offcanvas>
            <div className="dashbord-header d-flex justify-content-between align-items-center">
              <Button className="dashboard-sm" onClick={handleShow}>
                {" "}
                <FontAwesomeIcon icon={faBars} />
              </Button>
              <p>Dashboard</p>
              <span>{user.displayName}</span>
            </div>

            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
