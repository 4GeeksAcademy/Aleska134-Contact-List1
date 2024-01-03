import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	// const handleSubmitChanges= () => {
	// 	fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`,{ 
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json"
    //               },
	// 			  body:
	// 			  {
	// 				"full_name": full_name,
	// 				"email": email,
	// 				"agenda_slug": "Aleska",
	// 				"address":address,
	// 				"phone":phone
	// 			  }
    //             }
    //         )
    //         .then(resp => {
    //             if (resp.status >= 200 && resp.status < 300){
    //                 console.log("El request se hizo bien");
    //                 return (resp.json());
    //             }else{
    //                 console.log(`Hubo un error ${resp.status} en el request`);
    //             }
                
    //             console.log(store.contacts)
                
    //             return(resp.json());
    //         })  
    //         .catch(error => {
    //             //manejo de errores
    //             console.error(error);
    //             console.log('F')
    //         });
    //     }
	// };

	return (
		<div className="container">
			<h1>Change contact</h1>
			<div>
				{/* onSubmit={()=>{
					handleSubmitChanges()}} */}
				<form method="PUT">
					<div className="mb-3">
						<label className="form-label">Full Name:</label>
						<input type="text" className="form-control" name="full_name" />
					</div>

					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input type="email" className="form-control" name="email"/>	
					</div>
					
					<div className="mb-3">
						<label className="form-label">Phone:</label>
						<input type="number" className="form-control" name="phone"/>
					</div>

					<div className="mb-3">
						<label className="form-label">Address:</label>
						<input type="text" className="form-control" name="address"/>
					</div>
					<br />
					<div className="d-grid">
						<button className="btn btn-primary" type="submit" >Save</button>
					</div>
				</form>
			</div>
			<br />
			<Link to="/">
				<a>Or get back to contacts</a>
			</Link>
		</div>
	);
		
};

Single.propTypes = {
	match: PropTypes.object
};
