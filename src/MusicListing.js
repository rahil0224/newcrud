import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MusicListing = () => {
    const [musicdata, mudatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/musically/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/musically/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/musically/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/musically").then((res) => {
            return res.json();
        }).then((resp) => {
            mudatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2 className="text-center">Music Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="musically/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Track-Name</td>
                                <td>Artist</td>
                                <td>Album</td>
                                <td>Genre</td>
                                <td>Duration</td>
                                <td>Release Date</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>

                            {musicdata &&
                                musicdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.tname}</td>
                                        <td>{item.aname}</td>
                                        <td>{item.alname}</td>
                                        <td>{item.gname}</td>
                                        <td>{item.duration}</td>
                                        <td>{item.rdate}</td>

                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default MusicListing;