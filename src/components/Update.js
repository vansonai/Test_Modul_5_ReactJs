import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Update() {

    const [products, setProducts] = useState({
        title: '',
        price: '',
        description: ''
    });

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/products/' + id)
            .then(res => {
                console.log(res);
                setProducts(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3000/products/' + id, products)
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex w-100 vh-100 '>
            <div style={{margin: '100px'}} className='w-50 text-black p-5'>
                <form onSubmit={handleUpdate}>
                    <h2>Sửa sản phẩm</h2>
                    <div>
                        <label htmlFor="name">Tên sản phẩm:</label>
                        <input type="text" name='title' className='form-control'
                               value={products.title}
                               onChange={event =>
                                   setProducts({...products, [event.target.name]: event.target.value})
                               }
                               />
                    </div>
                    <div>
                        <label htmlFor="email">Giá:</label>
                        <input type="text" name='price' className='form-control'
                               value={products.price}
                               onChange={event =>
                                   setProducts({...products, [event.target.name]: event.target.value})
                               }
                               />
                    </div>
                    <div>
                        <label htmlFor="phone">Mô tả:</label>
                        <input type="text" name='phone' className='form-control'
                               value={products.description}
                               onChange={event =>
                                   setProducts({...products, [event.target.name]: event.target.value})
                               }
                               />
                    </div>
                    <br/>
                    <button style={{marginRight:'10px'}}  className='btn btn-primary'>Submit</button>
                    <Link to='/' className='btn btn-secondary'>Back</Link>
                </form>
            </div>
        </div>
    );
}

export default Update;