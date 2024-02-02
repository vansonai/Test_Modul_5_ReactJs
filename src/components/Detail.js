import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

function Detail() {
    const [products, setProducts] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/products/' + id)
            .then(res => {
                console.log(res);
                setProducts(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    return (
            <div className="container"  style={{margin: '100px'}} >
                <h2>Chi tiết sản phẩm</h2>
                <div className="card">
                    <div className="card-body" style={{padding: '40px'}}>
                        <p><b>Tên sản phẩm:</b> {products.title}</p>
                        <p><b>Mô tả:</b> {products.description}</p>
                        <p><b>Giá:</b> {products.price}</p>
                        <Link to="/" className='btn btn-primary'>Back</Link>
                    </div>
                </div>
            </div>
    );
}
export default Detail;