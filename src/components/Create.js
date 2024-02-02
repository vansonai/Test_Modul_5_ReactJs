import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Create() {

    const [values, setValues] = useState({
        title: '',
        price: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/products', values)
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='d-flex w-100 vh-100 '>
            <div style={{margin: '100px'}} className='w-50 text-black p-5'>
                <form onSubmit={handleSubmit}>
                    <h2>Thêm sản phẩm</h2>
                    <div>
                        <label htmlFor="name">Tên sản phẩm:</label>
                        <input type="text" name='title' className='form-control'
                               onChange={event =>
                                   setValues({...values, [event.target.name]: event.target.value})
                                }/>
                    </div>
                    <div>
                        <label htmlFor="email">Giá:</label>
                        <input type="number" name='price' className='form-control'
                               onChange={event =>
                                   setValues({...values, [event.target.name]: event.target.value})
                               }/>
                    </div>
                    <div>
                        <label htmlFor="phone">Mô tả:</label>
                        <input type="text" name='description' className='form-control'
                               onChange={event =>
                            setValues({...values, [event.target.name]: event.target.value})
                        }/>
                    </div>
                    <br/>
                    <button style={{marginRight:'10px'}} className='btn btn-primary '>Submit</button>
                    <Link to='/' className='btn btn-secondary'>Back</Link>
                </form>
            </div>
        </div>
    );
}

export default Create;