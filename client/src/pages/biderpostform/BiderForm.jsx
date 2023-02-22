import React from "react";
import { BiderAbi } from "../../abi/bidercontract_abi";
import Web3Modal from "web3modal";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SiBitcoincash } from "react-icons/si";
import { useNavigate } from "react-router-dom";

import { providers, Contract } from "ethers";


const BiderForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state; // Read values passed on state
  const ContractBiderAddress = "0x0dDCC4ccA81cF91953a6dcbf8da45C125d39A6bE"; 
  const Web3ModalRef = useRef();
  const [biderCompanyName, setBiderCompanyName] = useState("");
  const [biderCompanyRegistrationNumber, setBiderCompanyRegistrationNumber] =
    useState("");
  const [biderContact, setBiderContact] = useState("");
  const [_tenderIndex, settenderIndex] = useState("");
  const [bidertypeOfGoods, setTypeOfGoods] = useState("");

  //provide sgner or provider
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await Web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    // check if network is Mumbai
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 3141) {
      window.alert("Change network to HyperSpace fileCoin");
      throw new Error("Change network To HyperSpace fileCoin ");
    }
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  //call the metamask on page reload
  useEffect(() => {
    Web3ModalRef.current = new Web3Modal({
      network: "hyperspace",
      providerOptions: {},
      disableInjectedProvider: false,
      cacheProvider: false,
    });
    getProviderOrSigner();
    settenderIndex(id);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  //btnsubmit to submit the biders tender details
  const btnsubmit = async () => {
    const params = [
      _tenderIndex,
      biderCompanyName,
      biderContact,
      bidertypeOfGoods,
    ];

    try {
      const signer = await getProviderOrSigner(true);
      const BiderContract = new Contract(
        ContractBiderAddress,
        BiderAbi,
        signer
      );
      const results = await BiderContract.writeBiderDetails(...params);

      alert("BidSuccessful ");
    } catch (error) {
      alert(error);
    }
  };
  // //Form submit event
  const handleAddTender = (e) => {
    //prevent page refresh
    e.preventDefault();

    // //creating an object
    // let tender={
    //     companyName,
    //     description,
    //     deadline,
    //     contact,
    //     email,
    //     amount
    // }
    // setTenders([...tenders, tender]);
    setBiderCompanyName("");
    setBiderContact("");
    setTypeOfGoods("");
  };

  return (
    <div className="flex">
      <div className="mx-auto w-[95%] my-10">
        <div className="">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="font-jakarta text-3xl font-extrabold">
                Bid For Tender
              </h1>
              <p className="py-4 pr-4 font-josefin">
                Connect wallet to fill in the form below to bid for the tender.
              </p>
            </div>

            {/* <div>
              <button className="px-4 py-2 font-josefin text-white bg-primary-color rounded-full shadow-md hover:shadow-lg">
                Connect Wallet
              </button>
            </div> */}
          </div>

          <div className="bg-white w-1/3 shadow-sm my-4 p-10 rounded-md">
            <div className="my-6 w-full">
              <form
                onSubmit={handleAddTender}
                className="flex justify-between w-11/12 mx-auto"
              >
                <div className="space-y-4">
                  <div className="w-full">
                    <label className="font-josefin">Company Name</label>
                    <br />
                    <input
                      className="py-3 pr-24 pl-4 border-2 rounded-lg"
                      type="text"
                      id="company"
                      name="biderCompanyName"
                      placeholder="Company Name..."
                      required
                      onChange={(e) => setBiderCompanyName(e.target.value)}
                      value={biderCompanyName}
                    />
                  </div>

                  <div>
                    <label className="font-josefin pt-2">
                      Company Registration Number
                    </label>
                    <br />
                    <input
                      className="py-3 pr-24 pl-4 border-2 rounded-lg"
                      type="text"
                      id="biderCompanyRegistrationNumber"
                      name="description"
                      placeholder="SL002900"
                      required
                      onChange={(e) =>
                        setBiderCompanyRegistrationNumber(e.target.value)
                      }
                      value={biderCompanyRegistrationNumber}
                    />
                  </div>

                  <div>
                    <label className="font-josefin">Contact</label>
                    <br />
                    <input
                      className="py-3 px-4 border-2 rounded-lg"
                      type="text"
                      id="deadline"
                      name="deadline"
                      placeholder="0792271915"
                      required
                      onChange={(e) => setBiderContact(e.target.value)}
                      value={biderContact}
                    />
                  </div>
                  <div>
                    <label className="font-josefin">
                      Link To Company Documents
                    </label>
                    <br />
                    <input
                      className="py-3 px-4 border-2 rounded-lg"
                      type="text"
                      id="deadline"
                      name="deadline"
                      placeholder="https://documents.tender.io"
                      required
                      onChange={(e) => setTypeOfGoods(e.target.value)}
                      value={bidertypeOfGoods}
                    />
                  </div>

                  <div className="flex justify-between my-4">
                    <button
                      className="px-10 py-2 border-2 border-secondary-color text-gray-300 rounded-md mb-2 font-josefin"
                      onClick={() => navigate("/TenderStatus")}
                    >
                      Close
                    </button>
                    <button
                      className="px-10 py-2 bg-button-color text-[#fff] rounded-md shadow-md mb-2 font-josefin"
                      onClick={btnsubmit}
                      type="submit"
                      value="Submit"
                    >
                      Bid Tender
                    </button>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BiderForm;
