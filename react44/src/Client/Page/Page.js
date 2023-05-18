
import { useEffect, useState } from 'react'
import './Page.css'
import Axios from '../../axios/Axios'
// import Page2 from './page2'

function Page() {
    const [cata, setCata] = useState([])
    const [data, setdata] = useState([])
    const [cataData,setCatadata] = useState([])
    
    const [mobiles, setMobiles] = useState([])
   

 
       

    useEffect(() => {
        Axios.get('/getTotalcata').then((response)=>{
            // console.log(response.data.results)
            console.log(response.data)
            setCata(response.data)
        })
        Axios.get('/getEcgadjets').then((response)=>{
            // console.log(response.data.results)
            console.log(response.data)
            setdata(response.data)
        })
        Axios.get('/getCata').then((response)=>{
            // console.log(response.data.results)
            console.log(response.data)
            setCatadata(response.data)
        })
        Axios.get('/get-allMobile').then((response)=>{
            // console.log(response.data.results)
            console.log(response.data,"mobiles")
            setMobiles(response.data)
        })
},[])
    return (
        <div>
            <div className='Home'>

                <div className='Home1'>
                    <img className='logo1' src='https://www.deepnetsoft.com/images/logo.png' alt='no img' />
                    <h2 className='h2line'>Categories ({cata})</h2>
                    <div className='box1'>

                        <ul>
                                    {
                                    cataData.map((obj)=>{
                                        return(
                                            <li>{obj.cataName}</li>
                                        )
                                    })
                                    }
                        </ul>
                   

                        
                    </div>
                    <div className='table55'> 
                    <div className='table'>
                        <table>
                            <tr className='firsttr'>
                                <th className='checkbox1'><input className='checkbox' type='checkbox' /></th>
                                <th>Product Name</th>
                                <th>Price</th>
                            </tr>
                                        
                            {
                                    data.map((obj)=>{
                                        return(
                                            <tr>
                                            <td> <th className='checkbox1'><input className='checkbox' type='checkbox' /></th></td>
                                             <td>{obj.productName}</td>
                                            <td>{obj.price}</td>
                                       
                                           </tr>
                                        )
                                    })
                            }
                        <tr>

                             </tr>
                            
                           
                           
                        </table>
                    </div>
                    </div>
                </div>
            </div>
           
                            
<div className='Home'>
        <div className='Home1'>
            <img className='logo1' src='https://www.deepnetsoft.com/images/logo.png'  alt='no img'/>
            {/* <h2 className='h2line'>Categories ({cata})</h2> */}
            <div className='box1'>
            <ul>
                            {
                            mobiles.map((obj)=>{
                                return(
                                    <li>{obj.productName}</li>
                                )
                            })
                            }
                </ul>
            </div>
            <div className='table55'> 
            <div className='table'>
                <table>
                    <tr className='firsttr'>
                        <th className='checkbox1'><input className='checkbox' type='checkbox' /></th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                    {
                            mobiles.map((obj)=>{
                                return(
                                    <tr>
                                    <td> <th className='checkbox1'><input className='checkbox' type='checkbox' /></th></td>
                                    <td>{obj.productName}</td>
                                    <td>{obj.price}</td>
                            
                                </tr>
                                )
                            })
                    }
                </table>
                </div>
                </div>
            </div>
            </div>


            <div className='Home1'>
            <img className='logo1' src='https://www.deepnetsoft.com/images/logo.png'  alt='no img'/>
            <h2 className='h2line'>Smart Phones</h2>
            {/* <h2 className='h2line'>Categories ({cata})</h2> */}
            <div className='box1'>
            <ul>
                            {
                            mobiles.map((obj)=>{
                                return(
                                    <li>{obj.productName}</li>
                                )
                            })
                            }
                </ul>
            </div>
            <div className='table55'> 
            <div className='table'>
                <table>
                    <tr className='firsttr'>
                        <th className='checkbox1'><input className='checkbox' type='checkbox' /></th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                    {
                            mobiles.map((obj)=>{
                                return(
                                    <tr>
                                    <td> <th className='checkbox1'><input className='checkbox' type='checkbox' /></th></td>
                                    <td>{obj.productName}</td>
                                    <td>{obj.price}</td>
                            
                                </tr>
                                )
                            })
                    }
                </table>
                </div>
                </div>
            </div>
       
</div>
     
    )
}

export default Page
