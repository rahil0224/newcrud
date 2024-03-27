import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MusicCreate = () => {
// Same process ke Data create karne ke liye 
    const[id,idchange]=useState("");
    const[tname,namechange]=useState("");
    const[aname,emailchange]=useState("");
    const[alname,phonechange]=useState("");
    const[gname,gchange]=useState("");
    const[duration,durationchange]=useState("");
    const[rdate,rchange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const musdata={tname,aname,alname,gname,duration,rdate,active};
      
        // Post method ke throud Data input kiya 
      fetch("http://localhost:8000/musically",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(musdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2 className="text-center">Music Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Track Name</label>
                                            <input required value={tname} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control" placeholder="Track Name"></input>
                                        {tname.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Artist</label>
                                            <input value={aname} onChange={e=>emailchange(e.target.value)} className="form-control" placeholder="Artist"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Album</label>
                                            <input value={alname} onChange={e=>phonechange(e.target.value)} className="form-control" placeholder="Abdul"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Genre</label>
                                            <input value={gname} onChange={e=>gchange(e.target.value)} className="form-control" placeholder="Genre"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Duration</label>
                                            <input value={duration} onChange={e=>durationchange(e.target.value)} className="form-control" placeholder="Duration"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Release Date</label>
                                            <input value={rdate} onChange={e=>rchange(e.target.value)} className="form-control" placeholder="Release Date"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default MusicCreate;