
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
// import { CardSubtitle } from 'reactstrap';
function Homepage() {
    const [type, setType] = useState('');
    const [tickets, setTickets] = useState([]);
    const getTickets = () => {
        axios.get('http://localhost:3000/tickets/')
            .then(function (response) {
                console.log(response.data);
                setTickets(response.data)
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {

            });
    }
    const handlerOnchange = (e) => {
        const val = e.target.value;
        setType(val);
        console.log(type);
    }
    useEffect(() => {
        getTickets();

    }, [])
    return (
        <>
            
            <div className='container'>
            <input
                type="text"
                className="form-control"
                value={type}
                placeholder="Tìm kiếm chuyến bay"
                onChange={handlerOnchange}
            />
                <div className='row'>
                    {type === ""
                        ? tickets.map((tickets) => (
                            <div className='col-4'>
                                <div className='border border-secondary m-2 '>
                                    <div>
                                        <img className="" style={{ width: "100%", height: "250px" }} src={tickets.image} alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{tickets.nameticket}</h5>
                                        <p className="">{tickets.timestart}</p>
                                        <p className="text-right">Từ: {tickets.price}</p>
                                        <p className="text-right">{tickets.type}</p>
                                        <a href='https://www.vietnamairlines.com/vn/vi/home'><button className='btn btn-warning'>Đặt ngay</button></a>
                                    </div>
                                </div>
                            </div>
                        ))
                        : tickets
                            .filter((tickets) => tickets.nameticket.indexOf(type) !== -1)
                            .map((tickets) => (
                                <div className='col-4'>
                                    <div className='border border-secondary m-2 '>
                                        <div>
                                            <img className="" style={{ width: "100%", height: "250px" }} src={tickets.image} alt="Card image cap" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{tickets.nameticket}</h5>
                                            <p className="">{tickets.timestart}</p>
                                            <p className="text-right">Từ: {tickets.price}</p>
                                            <p className="text-right">{tickets.type}</p>
                                            <a href='https://www.vietnamairlines.com/vn/vi/home' className='text-center'><button className='btn btn-warning'>Đặt ngay</button></a>

                                        </div>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </>

        // <div className='container'>
        //     <div className='row'>
        //         {!!tickets
        //             ?
        //             tickets.map((tickets, index) =>
        //                 <div className='col-4' key={index}>
        //                     <div className='border border-secondary m-2 '>
        //                         <div>
        //                             <img className="" style={{ width: "100%", height: "250px" }} src={tickets.image} alt="Card image cap" />
        //                         </div>
        //                         <div className="card-body">
        //                             <h5 className="card-title">{tickets.nameticket}</h5>
        //                             <p className="">{tickets.timestart}</p>
        //                             <p className="text-right">Từ: {tickets.price}</p>
        //                             <p className="text-right">{tickets.type}</p>
        //                             <a href='https://www.vietnamairlines.com/vn/vi/home'><button className='btn btn-warning'>Đặt ngay</button></a>

        //                         </div>
        //                     </div>
        //                 </div>
        //             )
        //             :
        //             <tr><td>Loading</td></tr>
        //         }
        //     </div>
        // </div>
    )


}
export default Homepage;
