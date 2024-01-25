import axios from "axios";
import { useState,useEffect} from "react";
import Deletedprod from "../deletedproducts/Deletedprod";
import './Productlist.css'

function Productlist() {

    let [products,setProducts] =useState([])
    let [dellist,setdellist] =useState([])


    useEffect(()=>{
       axios.get("https://fakestoreapi.com/products")
       .then(res=>setProducts(res.data))
       .catch(err=>console.log(err))
    },[])
 
    console.log(products)


    function handleDelete(prodid){
      console.log(prodid)
     let delprod =  products.find(delitem=>delitem.id===prodid)
     console.log(delprod)
     let copyList=[...products]
     copyList = copyList.filter(li => li.id !== prodid)
      setProducts(copyList)
      setdellist([...dellist,delprod])

    }
   

  return (
    <>
    <div className="container">
          <h2>Products list</h2>
        <table className="table table-striped">
            <tbody>
               { products.map((prod,index)=> <tr>
                <td>
                 <div style={{width: "18 rem"}}>
                  <img src={prod.image} className="card-img-top" style={{maxHeight: "150px", maxWidth: "150px"}}></img>
                  <div className="card-body h-50"></div>
                  <h6 className="card-text">{prod.category}</h6>
                  <p>{prod.title}</p>
                 </div>
                   </td>
                    <td>{prod.price}$</td>
                    <td>{prod.rating.rate}</td>
                    <td>
                    <button className="btn btn-danger" onClick={()=>handleDelete(prod.id)}>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    </td>
                    </tr>
                    )}
            </tbody>
        </table>
      </div>
        {/*username validation error message*/}
        {dellist.length>=1 && <Deletedprod dellist={dellist}/>}
      </>
  )
}


export default Productlist



{list.length>=1 && <Deletedprod list={list}/>}



