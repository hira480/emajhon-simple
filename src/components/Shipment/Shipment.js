import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handelNamelBlur = event => {
        setName(event.target.value);
    }

    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handelAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handelPhoneNumberBlur = event => {
        setPhone(event.target.value);
    }

    const handelCreateUser = event => {
        event.preventDefault();

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handelCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handelNamelBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handelAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Phone Number</label>
                        <input onBlur={handelPhoneNumberBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>

                <div className='or'>
                    <div className='line'><hr /></div>
                    or
                    <div className='line'><hr /></div>
                </div>
                <button className='google-submit'>
                    <div className='btn-items'>
                        {/* <img src={btnImg} alt="" /> */}
                        <p>Continue With Google</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Shipment;