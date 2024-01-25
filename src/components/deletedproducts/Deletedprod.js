import './Deletedprod.css';

function Deletedprod(props) {

console.log(props.dellist)
  return (
    <div className="container">
       <h2>Deleted Products</h2>
       <table className="table table-striped">
            <tbody>
               { props.dellist.map((prod,index)=> <tr>
                <div style={{width: "18 rem"}}>
                  <img src={prod.image} className="card-img-top" style={{maxHeight: "150px", maxWidth: "150px"}}></img>
                  <div className="card-body h-50"></div>
                  <h6 className="card-text">{prod.category}</h6>
                  <p>{prod.title}</p>
                 </div>
                    <td>{prod.price}</td>
                    <td>{prod.rating.rate}</td>
                    </tr>
                    )}
            </tbody>
            </table>
   </div>
  )
}

export default Deletedprod




//<div className="container">
//<table className="table table-striped">
//<tbody>
  // { props.dellist.map((prod,index)=> <tr>
    //<td>{prod.category}</td>
    //<td><img src={prod.image} alt="" border="3" height="200" width="200"></img></td>
      //  <td>{prod.price}</td>
       // <td>{prod.rating.rate}</td>
        ///</tr>
    //    ) 
     //   }
//</tbody>
//</table>
//</div>


// <div className="card">
//<img src={prod.image} className="card-img-top" alt="..." ></img>
//<div className="card-body">
  //   <p className="card-text">{prod.category}
    // <p>{prod.title}</p>
    // </p>
   //</div>
//</div>