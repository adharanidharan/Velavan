// import { Fragment, useRef, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { PlusIcon } from "@heroicons/react/24/outline";

// export default function AddPurchaseDetails({
//   addSaleModalSetting,
//   products,
//   handlePageUpdate,
//   authContext
// }) {
//   const [purchase, setPurchase] = useState({
//     userID: authContext.user,
//     productID: "",
//     quantityPurchased: "",
//     purchaseDate: "",
//     totalPurchaseAmount: "",
//   });
//   const [open, setOpen] = useState(true);
//   const cancelButtonRef = useRef(null);

//   console.log("PPu: ", purchase);

//   // Handling Input Change for input fields
//   const handleInputChange = (key, value) => {
//     setPurchase({ ...purchase, [key]: value });
//   };

//   // POST Data
//   const addSale = () => {
//     fetch("http://localhost:4000/api/purchase/add", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(purchase),
//     })
//       .then((result) => {
//         alert("Purchase ADDED");
//         handlePageUpdate();
//         addSaleModalSetting();
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     // Modal
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog
//         as="div"
//         className="relative z-10"
//         initialFocus={cancelButtonRef}
//         onClose={setOpen}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg overflow-y-scroll">
//                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                   <div className="sm:flex sm:items-start">
//                     <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
//                       <PlusIcon
//                         className="h-6 w-6 text-blue-400"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
//                       <Dialog.Title
//                         as="h3"
//                         className="text-lg  py-4 font-semibold leading-6 text-gray-900 "
//                       >
//                         Purchase Details
//                       </Dialog.Title>
//                       <form action="#">
//                         <div className="grid gap-4 mb-4 sm:grid-cols-2">
//                           <div>
//                             <label
//                               htmlFor="productID"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Product Name
//                             </label>
//                             <select
//                               id="productID"
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               name="productID"
//                               onChange={(e) =>
//                                 handleInputChange(e.target.name, e.target.value)
//                               }
//                             >
//                               <option selected="">Select Products</option>
//                               {products.map((element, index) => {
//                                 return (
//                                   <option key={element._id} value={element._id}>
//                                     {element.name}
//                                   </option>
//                                 );
//                               })}
//                             </select>
//                           </div>
//                           <div>
//                             <label
//                               htmlFor="quantityPurchased"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Quantity Purchased
//                             </label>
//                             <input
//                               type="number"
//                               name="quantityPurchased"
//                               id="quantityPurchased"
//                               value={purchase.quantityPurchased}
//                               onChange={(e) =>
//                                 handleInputChange(e.target.name, e.target.value)
//                               }
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               placeholder="0 - 999"
//                             />
//                           </div>
//                           <div>
//                             <label
//                               htmlFor="totalPurchaseAmount"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Total Purchase Amount
//                             </label>
//                             <input
//                               type="number"
//                               name="totalPurchaseAmount"
//                               id="price"
//                               value={purchase.totalPurchaseAmount}
//                               onChange={(e) =>
//                                 handleInputChange(e.target.name, e.target.value)
//                               }
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               placeholder="₹299"
//                             />
//                           </div>
//                           <div className="h-fit w-fit">
//                             {/* <Datepicker
//                               onChange={handleChange}
//                               show={show}
//                               setShow={handleClose}
//                             /> */}
//                             <label
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                               htmlFor="purchaseDate"
//                             >
//                               Purchase Date
//                             </label>
//                             <input
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               type="date"
//                               id="purchaseDate"
//                               name="purchaseDate"
//                               value={purchase.purchaseDate}
//                               onChange={(e) =>
//                                 handleInputChange(e.target.name, e.target.value)
//                               }
//                             />
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                           {/* <button
//                             type="submit"
//                             className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                           >
//                             Update product
//                           </button> */}
//                           {/* <button
//                             type="button"
//                             className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
//                           >
//                             <svg
//                               className="mr-1 -ml-1 w-5 h-5"
//                               fill="currentColor"
//                               viewBox="0 0 20 20"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 fill-rule="evenodd"
//                                 d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
//                                 clip-rule="evenodd"
//                               ></path>
//                             </svg>
//                             Delete
//                           </button> */}
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                   <button
//                     type="button"
//                     className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
//                     onClick={addSale}
//                   >
//                     Add
//                   </button>
//                   <button
//                     type="button"
//                     className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                     onClick={() => addSaleModalSetting()}
//                     ref={cancelButtonRef}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }





// import { Fragment, useRef, useState, useEffect } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { PlusIcon } from "@heroicons/react/24/outline";

// export default function AddPurchaseDetails({
//   addSaleModalSetting,
//   products,
//   handlePageUpdate,
//   authContext,
// }) {
//   const [purchase, setPurchase] = useState({
//     userID: authContext.user,
//     productID: "",
//     quantityPurchased: "",
//     purchaseDate: "",
//     totalPurchaseAmount: "",
//   });
//   const [singlePiecePrice, setSinglePiecePrice] = useState(""); // State for single piece price
//   const [open, setOpen] = useState(true);
//   const cancelButtonRef = useRef(null);

//   console.log("PPu: ", purchase);

//   // Handling Input Change for input fields
//   const handleInputChange = (key, value) => {
//     setPurchase({ ...purchase, [key]: value });
//   };

//   // Automatically calculate total purchase amount when quantity or price changes
//   useEffect(() => {
//     if (purchase.quantityPurchased && singlePiecePrice) {
//       const total = purchase.quantityPurchased * singlePiecePrice;
//       setPurchase((prevState) => ({
//         ...prevState,
//         totalPurchaseAmount: total.toFixed(2),
//       }));
//     }
//   }, [purchase.quantityPurchased, singlePiecePrice]);

//   // POST Data
//   const addSale = () => {
//     fetch("http://localhost:4000/api/purchase/add", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(purchase),
//     })
//       .then((result) => {
//         alert("Purchase ADDED");
//         handlePageUpdate();
//         addSaleModalSetting();
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     // Modal
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog
//         as="div"
//         className="relative z-10"
//         initialFocus={cancelButtonRef}
//         onClose={setOpen}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg overflow-y-scroll">
//                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                   <div className="sm:flex sm:items-start">
//                     <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
//                       <PlusIcon
//                         className="h-6 w-6 text-blue-400"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
//                       <Dialog.Title
//                         as="h3"
//                         className="text-lg  py-4 font-semibold leading-6 text-gray-900 "
//                       >
//                         Purchase Details
//                       </Dialog.Title>
//                       <form action="#">
//                         <div className="grid gap-4 mb-4 sm:grid-cols-2">
//                           <div>
//                             <label
//                               htmlFor="productID"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Product Name
//                             </label> Product Name
//                             <select
//                               id="productID"
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               name="productID"
//                               onChange={(e) =>
//                                 handleInputChange(e.target.name, e.target.value)
//                               }
//                             >
//                               <option selected="">Select Products</option>
//                               {products.map((element, index) => {
//                                 return (
//                                   <option key={element._id} value={element._id}>
//                                     {element.name}
//                                   </option>
//                                 );
//                               })}
//                             </select>
//                           </div>
//                           <div>
//                             <label
//                               htmlFor="quantityPurchased"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Quantity Purchased
//                             </label>Quantity Purchased
//                             <input
//                               type="number"
//                               name="quantityPurchased"
//                               id="quantityPurchased"
//                               value={purchase.quantityPurchased}
//                               onChange={(e) =>
//                                 handleInputChange(e.target.name, e.target.value)
//                               }
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               placeholder="0 - 999"
//                             />
//                           </div>
//                           <div>
//                             <label
//                               htmlFor="singlePiecePrice"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Single Piece Price
//                             </label>
//                             Single Piece Price<input
//                               type="number"
//                               name="singlePiecePrice"
//                               id="singlePiecePrice"
//                               value={singlePiecePrice}
//                               onChange={(e) =>
//                                 setSinglePiecePrice(e.target.value)
//                               }
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               placeholder="₹0"
//                             />
//                           </div>
//                           <div>
//                             <label
//                               htmlFor="totalPurchaseAmount"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Total Purchase Amount
//                             </label>Total Purchase Amount
//                             <input
//                               type="number"
//                               name="totalPurchaseAmount"
//                               id="totalPurchaseAmount"
//                               value={purchase.totalPurchaseAmount}
//                               disabled
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                             />
//                           </div>
//                           <div className="h-fit w-fit">
//                             <label
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                               htmlFor="purchaseDate"
//                             >
//                               Purchase Date
//                             </label>
//                             <input
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               type="date"
//                               id="purchaseDate"
//                               name="purchaseDate"
//                               value={purchase.purchaseDate}
//                               onChange={(e) =>
//                                 handleInputChange(e.target.name, e.target.value)
//                               }
//                             />
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                           <button
//                             type="button"
//                             className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
//                             onClick={addSale}
//                           >
//                             Add Sale
//                           </button>
//                           <button
//                             type="button"
//                             className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:ml-3 sm:w-auto"
//                             onClick={() => addSaleModalSetting()}
//                           >
//                             Cancel
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }




// import { Fragment, useRef, useState, useEffect } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { PlusIcon } from "@heroicons/react/24/outline";

// export default function AddPurchaseDetails({
//   addSaleModalSetting,
//   products,
//   handlePageUpdate,
//   authContext,
// }) {
//   const [purchase, setPurchase] = useState({
//     userID: authContext.user,
//     productID: "",
//     quantityPurchased: "",
//     purchaseDate: "",
//     totalPurchaseAmount: "",
//     singlePiecePrice: "", // Add singlePiecePrice to the purchase object
//   });
//   const [open, setOpen] = useState(true);
//   const cancelButtonRef = useRef(null);

//   console.log("PPu: ", purchase);

//   // Handling Input Change for input fields
//   const handleInputChange = (key, value) => {
//     setPurchase({ ...purchase, [key]: value });
//   };

//   // Automatically calculate total purchase amount when quantity or price changes
//   useEffect(() => {
//     if (purchase.quantityPurchased && purchase.singlePiecePrice) {
//       const total = purchase.quantityPurchased * purchase.singlePiecePrice;
//       setPurchase((prevState) => ({
//         ...prevState,
//         totalPurchaseAmount: total.toFixed(2),
//       }));
//     }
//   }, [purchase.quantityPurchased, purchase.singlePiecePrice]);

//   // POST Data
//   const addSale = () => {
//     fetch("http://localhost:4000/api/purchase/add", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(purchase),
//     })
//       .then((result) => {
//         alert("Purchase ADDED");
//         handlePageUpdate();
//         addSaleModalSetting();
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     // Modal
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog
//         as="div"
//         className="relative z-10"
//         initialFocus={cancelButtonRef}
//         onClose={setOpen}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg overflow-y-scroll">
//                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                   <div className="sm:flex sm:items-start">
//                     <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
//                       <PlusIcon
//                         className="h-6 w-6 text-blue-400"
//                         aria-hidden="true"
//                       />
//                     </div>
//                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
//                       <Dialog.Title
//                         as="h3"
//                         className="text-lg  py-4 font-semibold leading-6 text-gray-900 "
//                       >
//                         Purchase Details
//                       </Dialog.Title>
//                       <form action="#">
//                         <div className="grid gap-4 mb-4 sm:grid-cols-2">
//                           <div>
//                             <label
//                               htmlFor="productID"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Product Name
//                             </label>
//                             <select
//                               id="productID"
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               name="productID"
//                               onChange={(e) =>
//                                 handleInputChange(e.target.name, e.target.value)
//                               }
//                             >
//                               <option selected="">Select Products</option>
//                               {products.map((element, index) => {
//                                 return (
//                                   <option key={element._id} value={element._id}>
//                                     {element.name}
//                                   </option>
//                                 );
//                               })}
//                             </select>
//                           </div>
//                           <div>
//                             <label
//                               htmlFor="quantityPurchased"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Quantity Purchased
//                             </label>
//                             <input
//                               type="number"
//                               name="quantityPurchased"
//                               id="quantityPurchased"
//                               value={purchase.quantityPurchased}
//                               onChange={(e) =>
//                                 handleInputChange(e.target.name, e.target.value)
//                               }
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               placeholder="0 - 999"
//                             />
//                           </div>
//                           <div>
//                             <label
//                               htmlFor="singlePiecePrice"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Single Piece Price
//                             </label>
//                             <input
//                               type="number"
//                               name="singlePiecePrice"
//                               id="singlePiecePrice"
//                               value={purchase.singlePiecePrice} // Bind it to the purchase object
//                               onChange={(e) =>
//                                 handleInputChange(
//                                   e.target.name,
//                                   e.target.value
//                                 )
//                               }
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               placeholder="₹0"
//                             />
//                           </div>
//                           <div>
//                             <label
//                               htmlFor="totalPurchaseAmount"
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                             >
//                               Total Purchase Amount
//                             </label>
//                             <input
//                               type="number"
//                               name="totalPurchaseAmount"
//                               id="totalPurchaseAmount"
//                               value={purchase.totalPurchaseAmount}
//                               disabled
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                             />
//                           </div>
//                           <div className="h-fit w-fit">
//                             <label
//                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                               htmlFor="purchaseDate"
//                             >
//                               Purchase Date
//                             </label>
//                             <input
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                               type="date"
//                               id="purchaseDate"
//                               name="purchaseDate"
//                               value={purchase.purchaseDate}
//                               onChange={(e) =>
//                                 handleInputChange(e.target.name, e.target.value)
//                               }
//                             />
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                           <button
//                             type="button"
//                             className="inline-flex w-20 justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
//                             onClick={addSale}
//                           >
//                             Add Sale
//                           </button>
//                           <button
//                             type="button"
//                             className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:w-auto"
//                             onClick={() => addSaleModalSetting()}
//                           >
//                             Cancel
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }






// import { Fragment, useRef, useState, useEffect } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { PlusIcon } from "@heroicons/react/24/outline";

// export default function AddPurchaseDetails({
//   addSaleModalSetting,
//   products,
//   handlePageUpdate,
//   authContext,
// }) {
//   const [purchase, setPurchase] = useState({
//     userID: authContext.user,
//     productID: "",
//     quantityPurchased: "",
//     purchaseDate: "",
//     totalPurchaseAmount: "",
//     singlePiecePrice: "",
//   });
//   const [open, setOpen] = useState(true);
//   const cancelButtonRef = useRef(null);

//   console.log("PPu: ", purchase);

//   const handleInputChange = (key, value) => {
//     setPurchase({ ...purchase, [key]: value });
//   };

//   useEffect(() => {
//     if (purchase.quantityPurchased && purchase.singlePiecePrice) {
//       const total = purchase.quantityPurchased * purchase.singlePiecePrice;
//       setPurchase((prevState) => ({
//         ...prevState,
//         totalPurchaseAmount: total.toFixed(2),
//       }));
//     }
//   }, [purchase.quantityPurchased, purchase.singlePiecePrice]);

//   const addSale = () => {
//     fetch("http://localhost:4000/api/purchase/add", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(purchase),
//     })
//       .then((result) => {
//         alert("Purchase ADDED");
//         handlePageUpdate();
//         addSaleModalSetting();
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog
//         as="div"
//         className="relative z-10"
//         initialFocus={cancelButtonRef}
//         onClose={setOpen}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                   <div className="sm:flex sm:items-start">
//                     <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
//                       <PlusIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
//                     </div>
//                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                       <Dialog.Title as="h3" className="text-lg py-4 font-semibold leading-6 text-gray-900">
//                         Purchase Details
//                       </Dialog.Title>
//                       <form action="#">
//                         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
//                           <div>
//                             <label htmlFor="productID" className="block mb-2 text-sm font-medium text-gray-900">
//                               Product Name
//                             </label>
//                             <select
//                               id="productID"
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
//                               name="productID"
//                               onChange={(e) => handleInputChange(e.target.name, e.target.value)}
//                             >
//                               <option selected="">Select Products</option>
//                               {products.map((element) => (
//                                 <option key={element._id} value={element._id}>
//                                   {element.name}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                           <div>
//                             <label htmlFor="quantityPurchased" className="block mb-2 text-sm font-medium text-gray-900">
//                               Quantity Purchased
//                             </label>
//                             <input
//                               type="number"
//                               name="quantityPurchased"
//                               id="quantityPurchased"
//                               value={purchase.quantityPurchased}
//                               onChange={(e) => handleInputChange(e.target.name, e.target.value)}
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                               placeholder="0 - 999"
//                             />
//                           </div>
//                           <div>
//                             <label htmlFor="singlePiecePrice" className="block mb-2 text-sm font-medium text-gray-900">
//                               Single Piece Price
//                             </label>
//                             <input
//                               type="number"
//                               name="singlePiecePrice"
//                               id="singlePiecePrice"
//                               value={purchase.singlePiecePrice}
//                               onChange={(e) => handleInputChange(e.target.name, e.target.value)}
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                               placeholder="₹0"
//                             />
//                           </div>
//                           <div>
//                             <label htmlFor="totalPurchaseAmount" className="block mb-2 text-sm font-medium text-gray-900">
//                               Total Purchase Amount
//                             </label>
//                             <input
//                               type="number"
//                               name="totalPurchaseAmount"
//                               id="totalPurchaseAmount"
//                               value={purchase.totalPurchaseAmount}
//                               disabled
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
//                             />
//                           </div>
//                           <div>
//                             <label htmlFor="purchaseDate" className="block mb-2 text-sm font-medium text-gray-900">
//                               Purchase Date
//                             </label>
//                             <input
//                               type="date"
//                               id="purchaseDate"
//                               name="purchaseDate"
//                               value={purchase.purchaseDate}
//                               onChange={(e) => handleInputChange(e.target.name, e.target.value)}
//                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                             />
//                           </div>
//                         </div>
//                         <div className="flex justify-between mt-4">
//                           <button
//                             type="button"
//                             className="inline-flex justify-center rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//                             onClick={addSale}
//                           >
//                             Add Sale
//                           </button>
//                           <button
//                             type="button"
//                             className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                             onClick={() => addSaleModalSetting()}
//                           >
//                             Cancel
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }





import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function AddPurchaseDetails({
  addSaleModalSetting,
  products,
  handlePageUpdate,
  authContext,
}) {
  const [purchase, setPurchase] = useState({
    userID: authContext.user,
    productID: "",
    quantityPurchased: "",
    purchaseDate: "",
    totalPurchaseAmount: "",
    singlePiecePrice: "",
  });
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const handleInputChange = (key, value) => {
    setPurchase({ ...purchase, [key]: value });
  };

  useEffect(() => {
    if (purchase.quantityPurchased && purchase.singlePiecePrice) {
      const total = purchase.quantityPurchased * purchase.singlePiecePrice;
      setPurchase((prevState) => ({
        ...prevState,
        totalPurchaseAmount: total.toFixed(2),
      }));
    }
  }, [purchase.quantityPurchased, purchase.singlePiecePrice]);

  const addSale = () => {
    fetch("http://localhost:4000/api/purchase/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((result) => {
        alert("Purchase ADDED");
        handlePageUpdate();
        addSaleModalSetting();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <PlusIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg py-4 font-semibold leading-6 text-gray-900">
                        Purchase Details
                      </Dialog.Title>
                      <form action="#">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                          <div>
                            <label htmlFor="productID" className="block mb-2 text-sm font-medium text-gray-900">
                              Product Name
                            </label>
                            <select
                              id="productID"
                              className="bg-gray-900 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                              name="productID"
                              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                            >
                              <option value="">Select Products</option>
                              {products.map((element) => (
                                <option key={element._id} value={element._id}>
                                  {element.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="quantityPurchased" className="block mb-2 text-sm font-medium text-gray-900">
                              Quantity Purchased
                            </label>
                            <input
                              type="number"
                              name="quantityPurchased"
                              id="quantityPurchased"
                              value={purchase.quantityPurchased}
                              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                              className="bg-gray-900 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder="0 - 999"
                            />
                          </div>
                          <div>
                            <label htmlFor="singlePiecePrice" className="block mb-2 text-sm font-medium text-gray-900">
                              Single Piece Price
                            </label>
                            <input
                              type="number"
                              name="singlePiecePrice"
                              id="singlePiecePrice"
                              value={purchase.singlePiecePrice}
                              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                              className="bg-gray-900 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder="₹0"
                            />
                          </div>
                          <div>
                            <label htmlFor="totalPurchaseAmount" className="block mb-2 text-sm font-medium text-gray-900">
                              Total Purchase Amount
                            </label>
                            <input
                              type="number"
                              name="totalPurchaseAmount"
                              id="totalPurchaseAmount"
                              value={purchase.totalPurchaseAmount}
                              disabled
                              className="bg-gray-900 border border-gray-300 text-gray-50 text-sm rounded-lg block w-full p-2.5"
                            />
                          </div>
                          <div>
                            <label htmlFor="purchaseDate" className="block mb-2 text-sm font-medium text-gray-900">
                              Purchase Date
                            </label>
                            <input
                              type="date"
                              id="purchaseDate"
                              name="purchaseDate"
                              value={purchase.purchaseDate}
                              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                              className="bg-gray-900 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={addSale}
                  >
                    Add Purchase
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => addSaleModalSetting()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
