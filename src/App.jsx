// import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import "bootstrap/dist/js/bootstrap.bundle"
import { useState } from 'react'
import { Col, Row } from 'antd'
import AddEmploy from './components/Home/AddEmploy'


function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  // const [count, setCount] = useState(0)

  // console.log(isModalVisible)

  return (
    <>
      <Header />
      <main>
        <div className="container mt-5">
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-md-6">
              <h1 className="text-center">Employee Management</h1>
            </div>
            <div className="col-12 col-md-6 ms-auto">
              <button className="btn btn-outline-primary ms-auto d-block" onClick={() => setIsModalVisible((prev) => (!prev))}>Add Employee</button>
            </div>
          </div>
        </div>

        <Row className='container mt-5'>
          <Col span={24} md={9} >
            <div className='card shadow mx-2 p-3'>
              <h1>Employees</h1>
            </div>
          </Col>
          <Col span={24} md={15} className='mt-3 mt-md-0'>
            <div className='card shadow mx-2 p-3'>

              <h1>Employee Details</h1>

            </div>
          </Col>
        </Row>

        {
          isModalVisible && (
            <AddEmploy isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
          )
        }

      </main>
      <Footer />
    </>
  )
}

export default App
