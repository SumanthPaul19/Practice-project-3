import React from 'react'
import img1 from './eminem.jpg'


export default function Home()
{
    return(
     
         <React.Fragment>
        
        <div className="navbar navbar-light  navbar-expand-md mt-3 d1">
            <h4 className="display-3"><strong><sup>The</sup>Eminem-Store</strong></h4>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse bg-dark" id="menu">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a href="#" className="nav-link text-light a1 pe-5">Home-Page</a>
                        </li>
            
                        <li className="nav-item">
                        <a href="#" className="nav-link text-light a1 pe-5">Notification</a>
                        </li>
            
                        <li className="nav-item">
                        <a href="/Register" className="nav-link text-light a1 pe-5" >Cart</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link text-light a1 pe-5">Orders</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-light a1 pe-5">Account</a>
                        </li>
                    </ul>
                </div>
        </div>


            <div className="container">
                <h1 className="mt-3"><strong>D</strong>eal of the day</h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 mt-4">
                    <div className="col mb-2">
                        <div className="card shadow">
                            <img src={img1} alt=""  className="img1"/>
                            <div className="card-body">
                                <p className="lead">Sports & Fitness Gear Upto 80% Off</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="card shadow">
                            <img src={img1} alt="" className="img1"/>
                            <div className="card-body">
                                <p className="lead">Branded Jeans Upto 50% Off </p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="card shadow">
                            <img src={img1} alt="" className="img1"/>
                            <div className="card-body">
                                <p className="lead"> Branded T-Shirts Upto 60% Off.</p>      
                            </div>
                 
                        </div>
                    </div>   
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 mt-4">
                    <div className="col mb-2">
                        <div className="card shadow">
                            <img src={img1} alt="" className="img1"/>
                            <div className="card-body">
                                <p className="lead">Branded Kids T-Shirts Upto 40% Off</p>
                            </div>
                       </div>
                   </div>
                   <div className="col mb-2">
                        <div className="card shadow">
                            <img src={img1} alt="" className="img1"/>
                            <div className="card-body">
                                <p className="lead">Sports Girls T-Shirts Upto 50% Off</p>   
                            </div>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="card shadow">
                            <img src={img1} alt="" className="img1"/>
                            <div className="card-body">
                                <p className="lead"> Branded Shirts Upto 70% Off.</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
                
                
                <div className="container">
                    <h1 className="mt-3"><strong>C</strong>ategories</h1>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 mt-4 mb-2">
                        <div className="col mb-2">
                       <div className="card shadow">
                        <img src={img1} alt="" className="img2"/>
                           <div className="card-body">
                               <p className="lead">Shirts</p>
                           </div>
                           </div>
                       </div>
                       <div className="col mb-2">
                        <div className="card shadow">
                            <img src={img1} alt="" className="img2" />
                            <div className="card-body">
                                <p className="lead">
                                   T-Shirts </p>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col mb-2">
                            <div className="card shadow">
                               <img src={img1} alt="" className="img2"/>
                                <div className="card-body">
                                    <p className="lead"> Jeans</p>   
                                    
                                </div>
                     
                                </div>
                            </div>

                            <div className="col mb-2">
                                <div className="card shadow">
                                   <img src={img1} alt="" className="img2" />
                                    <div className="card-body">
                                        <p className="lead">Shorts & Trousers</p>   
                                        
                                    </div>
                         
                                    </div>
                                </div>

                                <div className="col mb-2">
                                    <div className="card shadow">
                                       <img src={img1} alt="" className="img2"/>
                                        <div className="card-body">
                                            <p className="lead">Casual Shoes</p>   
                                            
                                        </div>
                             
                                        </div>
                                    </div>
                        
                 </div>

                 <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 mt-4">
                    <div className="col mb-2">
                   <div className="card shadow">
                      <img src={img1} alt="" className="img2" />
                       <div className="card-body">
                           <p className="lead">Kurtas & Kurta sets</p>
                       </div>
                       </div>
                   </div>
                   <div className="col mb-2">
                    <div className="card shadow">
                      <img src={img1} alt="" className="img2" />
                        <div className="card-body">
                            <p className="lead">
                             Sarees </p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="card shadow">
                            <img src={img1} alt="" className="img2"/>
                            <div className="card-body">
                                <p className="lead"> Dresses</p>   
                                
                            </div>
                 
                            </div>
                        </div>

                        <div className="col mb-2">
                            <div className="card shadow">
                              <img src={img1} alt="" className="img2" />
                                <div className="card-body">
                                    <p className="lead">Shorts</p>   
                                    
                                </div>
                     
                                </div>
                            </div>

                            <div className="col mb-2">
                                <div className="card shadow">
                                  <img src={img1} alt="" className="img2" />
                                    <div className="card-body">
                                        <p className="lead">Hand Bags</p>    
                                    </div>                        
                                </div>
                            </div>
                        </div>
            </div>
                            
                          
                          

        <div className="row mt-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ms-5 ">
            <div className="col">
                <h4 className="text-primary mt-2 al1"><strong>MY ACCOUNT</strong></h4>
                <ul className="list-unstyled">
                    <li>
                        <a href="#" className="text-dark">Orders</a>
                    </li>
                    <li >
                        <a href="#" className="text-dark">Returns/Refunds</a>
                    </li>
                    <li >
                        <a href="#" className="text-dark">Track Order</a>
                    </li>
                    <li >
                        <a href="#" className="text-dark">Frequently Asked Questions</a>
                    </li>
                </ul>
            </div>
            <div className="col">
                <h4 className="text-primary mt-2 al1"><strong>POLICIES</strong></h4>
                <ul className="list-unstyled">
                    <li>
                        <a href="#" className="text-dark">Payment Options</a>
                    </li>
                    <li >
                        <a href="#" className="text-dark">Returns & Exchange Policy</a>
                    </li>
                    <li >
                        <a href="#" className="text-dark">Privacy Policy</a>
                    </li>
                    <li >
                        <a href="#" className="text-dark">Offers Terms & conditions</a>
                    </li>
                    <li>
                        <a href="#" className="text-dark">Manufacturing</a>
                    </li>
                </ul>
                
            </div>

            <div className="col">
                <h4 className="text-primary mt-2 al1"><strong>CONTACT US</strong></h4>
                <ul className="list-unstyled">
                    <li>
                        <a href="#" className="text-dark">Customer Support</a>
                    </li>
                    <li >
                        <a href="#" className="text-dark">Store Location</a>
                    </li>
                    <li >
                        <a href="#" className="text-dark">Help Center</a>
                    </li>
                </ul>
            </div>

            <div className="col">
                <h4 className="text-primary mt-2 al1"><strong>SOCIAL</strong></h4>
                <ul className="list-unstyled">
                    <li>
                        <a href="#" className="text-dark">Facebbok</a>
                    </li>
                    <li >
                        <a href="#" className="text-dark">Twitter</a>
                    </li>
                    <li >
                        <a href="#" className="text-dark">Instagram</a>
                    </li>
                </ul>
            </div>

        
      </div>
        </React.Fragment>
        
                                
    
    )
}