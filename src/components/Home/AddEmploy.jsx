import { DatePicker, Form, Input, InputNumber, Modal } from 'antd'
import { useState } from 'react'

export default function AddEmploy({ isModalVisible, setIsModalVisible }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [date, setDate] = useState("")
    const [phone, setPhone] = useState("")


    // console.log(date)


    const handleSubmit = () => {
        // console.log(name)

        // setIsModalVisible((prev) => (!prev))
    }
    return (
        <>
            <Modal title="Basic Modal" open={isModalVisible} onCancel={() => setIsModalVisible((prev) => (!prev))} onOk={handleSubmit}>
                <Form>
                    <Form.Item label="Name" name="name">
                        <Input onChange={(e) => setName(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input onChange={(e) => setEmail(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Address" name="address">
                        <Input onChange={(e) => setAddress(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Phone" name="phone">
                        <InputNumber className='w-100' onChange={(value) => setPhone(value)} />
                    </Form.Item>
                    <Form.Item label="DOB" name="dob">
                        <DatePicker className='w-100' onChange={(date, dateString) => setDate(dateString)} format={"YYYY-MM-DD"} />
                    </Form.Item>
                </Form>
            </Modal>

        </>
    )
}
