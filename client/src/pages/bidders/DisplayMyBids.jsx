import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
// address payable bidowner;
//         string companyName;
//         string contact;
//         string goodsDealsWith;
//         string tenderOwnerName;
//         uint bidsTenderIndex;
//         statuschoices choice;
//         string goodsDescription;

const DisplayBidsTenders = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  const [color, setColor] = useState(true);
  const navigate = useNavigate();
  const [nothavetender,setNotHaveTender] = useState(false);

  return (
    <div className="">
      <div className="w-[94%] mx-auto my-10">
     
        <div>
          <h1 className=" text-3xl font-extrabold">My bids</h1>

          <table className="bg-white min-w-max w-full table-auto my-10">
            <thead className="border-b border-gray-200 hover:bg-gray-100">
              <tr className="bg-white text-gray-500 text-sm leading-normal rounded-lg">
                <th className="py-3 px-6 text-left">Company Name</th>
                <th className="py-3 px-6 text-left">Contact</th>
                <th className="py-3 px-6 text-left">Tender Owner</th>
                <th className="py-3 px-6 text-left">Tender Description</th>
                <th className="py-3 px-6 text-left">Status</th>
                {/* <th className="py-3 px-6 text-left">Tender Amount</th> */}
               
                
              </tr>
            </thead>
            <tbody className="text-[#130026]  text-sm font-light">
              {props.tenders.map((tender, index) => (
                
                <>
                 
                  <tr
                    key={index}
                    className="border-b border-gray-200  hover:bg-gray-100"
                  >
                    
                    {tender.bidowner.toString() == props.userAccount.toString()?<><td className="py-3 px-2 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span className="font-medium font-josefin">
                            {tender.companyName}
                          </span>
                        </div>
                      </td><td className="py-3 px-2 text-left ">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-josefin font-normal">
                              {tender.contact}
                            </span>
                          </div>
                        </td><td className="py-3 px-2 text-left">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-josefin font-normal">
                              {tender.tenderOwnerName}
                            </span>
                          </div>
                        </td><td className="py-3 px-2 text-left">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-josefin font-normal">
                              {tender.goodsDealsWith}
                            </span>
                          </div>
                        </td><td className="py-3 px-2 text-left">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-josefin font-normal">
                              {tender.choice == 1 ? (
                                <button
                                  className="py-2 px-5 bg-green/20 rounded-full font-josefin font-normal"
                                  style={{ color: color ? "green" : "orange" }}
                                >
                                  Approved
                                </button>
                              ) : (
                                <button
                                  className="py-2 px-5 bg-orange/20 rounded-full font-josefin font-normal"
                                  style={{ color: color ? "orange" : "green" }}
                                >
                                  Pending
                                </button>
                              )}
                            </span>
                          </div>
                        </td></>
                   
                   :nothavetender ? "":setNotHaveTender(true)}
                    
                   
                    
                  </tr>
                </>
              ))}
            </tbody>
            
          </table>
          {nothavetender?<h1>User <span className="text-red-500 mr-4 ml-4">{props.userAccount}</span> don't have any bids</h1>:""}
        </div>
      </div>
    </div>
  );
};

//     const navigate = useNavigate();

//     return tenders.map(tender => (

//         <div className='tenderCard' key ={tender.contact}>
//             <div className='tenderCardHeader' id='tenderCardHeader'>

//                         <p><RiBuilding2Fill/><b> {tender.companyName}</b></p>
//                         <p>{tender.description}</p>
//                         <h4>{tender.amount}</h4>

//             </div>
//             <div className='tenderCard-middle' id='tendercard-middle'>
//                 <h5><GiRotaryPhone/>&nbsp;{tender.contact}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;{tender.deadline} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;{tender.email}</h5>
//             </div>
//             <div className='bid-btn-approve-btn' id='bid-btn-approve-btn'>
//                 <button className='btn-bid' id='btn-bid' onClick={ () =>navigate("/BiderForm")}>BID</button>
//                 <button className='btn-aprove'>Approve</button>
//                 <button className="deletebtn" onClick={()=> deleteTender(tender.contact)}><BsTrash/></button>
//             </div>

//         </div>

//      ))

//   }
export default DisplayBidsTenders;
