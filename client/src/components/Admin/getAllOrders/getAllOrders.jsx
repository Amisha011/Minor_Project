import React, { useEffect, useState } from "react"
import axios from "axios"
import "../../myOrders&wishlist/orders.css"
//./../components/myOrders&wishlist/orders.css
const GetOrdersList = () => {
    const [allOrders, setallOrders] = useState([])
    const token = localStorage.getItem("token")
    const lisOfOrders = async () => {

        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/api/orders/getAllOrders`, { headers: { "Authorization": `Bearer ${token}` } })

            const data = response.data

            setallOrders(data)
        } catch (error) {

        }
    }
    useEffect(() => {
        lisOfOrders()
    }, [])

    return (
        <div >
            <div>
                <h1 className="headingoforder">All Orders</h1>
                <div className="myOrders">
                    <table style={{ marginLeft: "140px" }}>
                        <thead>
                            <th>S.No</th>
                            <th>Product Id</th>
                            <th>Book type</th>

                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </thead>
                        {allOrders.map((dataa, index) => {

                            return (

                                <tbody>
                                    <td>{index + 1}</td>
                                    <td>{dataa.product._id}</td>
                                    {/* <td>{ dataa.owner._id}</td> */}

                                    <td>{dataa.product.bookType }</td>
                                    {/* <td>{dataa.owner.name }</td> */}
                                    <td>{dataa.product.price}</td>
                                    <td>{new Date(dataa.product.createdAt).toLocaleString()}</td>
                                    <td>delivered</td>
                                </tbody>

                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}
export default GetOrdersList