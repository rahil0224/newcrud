import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const MusicEdit = () => {
// Ye music ka edit part hain yahan se music ki perticular ID bane gi or phir uske baad ushi id se BD me change kare ga Start yahan se hain or 
    const { musicid } = useParams();
    
    useEffect(() => {
        // yahan se humne Database fetch kiya hain using fetch karne ke liye 
        fetch("http://localhost:8000/musically/" + musicid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            tname(resp.tname);
            aname(resp.aname);
            alname(resp.alname);
            gname(resp.gname);
            duration(resp.duration);
            rdate(resp.rdate);
            activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
// yahan humne Hooks bana hain input box ki value me jo data aaraha wo display karne ke liye
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
    // ye dusre page me jane ke liye 
    const handlesubmit=(e)=>{
      e.preventDefault();
      const musdata={id,tname,aname,alname,gname,duration,rdate,active};
        // Yahan humne Data store kiya jahan pe id ke sath data aata phir yahi se edit input box me show hoga
      fetch("http://localhost:8000/musically/"+musicid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(musdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
        // Jab data successfully submit ho jaye to te navigate ho jaye ga wapis home page pe
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    // End yahan pe hain 
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6 ">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title mt-4">
                            <h2>Music Edit</h2>
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
                                        <input required value={tname} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    {tname.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input value={aname} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Album</label>
                                        <input value={alname} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Genre</label>
                                        <input value={gname} onChange={e=>gchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Duration</label>
                                        <input value={duration} onChange={e=>durationchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Release Date</label>
                                        <input value={rdate} onChange={e=>rchange(e.target.value)} className="form-control"></input>
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
 
export default MusicEdit;