import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function Home() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
               const response = await axios.get('http://localhost:3000/products')
                setProducts(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

    const navigate = useNavigate();
    const handleDelete = (id) => {
        const confirm = window.confirm('Bạn muốn xoá sản phẩm này không');
        if (confirm) {
            axios.delete('http://localhost:3000/products/'+ id)
                .then(res => {
                    alert("Xác nhận");
                    window.location.reload();
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div style={{margin: '100px'}} className='d-flex flex-column bg-light vh-100'>
            <h2>Danh sách sản phẩm</h2>
            <div className='w-75 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-first'>
                    <Link to='/create' className='btn btn-primary'>Thêm sản phẩm</Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Mô tả</th>
                            <th>Giá</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                    {products.map((products, index) =>(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><Link to={`/view/${products.id}`}>{products.title}</Link></td>
                                <td>{products.description}</td>
                                <td>{products.price}</td>
                                <td>
                                    <Link to={`/update/${products.id}`} className='btn btn-sm btn btn-secondary me-2'>Sửa</Link>
                                    <button className='btn btn-sm btn-danger' onClick={event => handleDelete(products.id)}>Xoá</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;