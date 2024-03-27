import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const MusDetail = () => {
    const { musicid } = useParams();

    const [musicdata, musicdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/musically/" + musicid).then((res) => {
            return res.json();
        }).then((resp) => {
            musicdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>musically Create</h2>
                </div>
                <div className="card-body"></div>

                {musicdata &&
                    <div>
                        <h2>Track Name :{musicdata.tname}</h2>
                        <h5>Artist: {musicdata.aname}</h5>
                        <h5>Album: {musicdata.alname}</h5>
                        <h5>Genre : {musicdata.gname}</h5>
                        <h5>Duration : {musicdata.duration}</h5>
                        <h5>Release Date : {musicdata.rdate}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
           
        </div >
    );
}

export default MusDetail;