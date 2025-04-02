// import { useState } from "react";
// function App() {
//   const [n1, setn1] = useState();
//   const [n2, setn2] = useState();
//   const [result, setResult] = useState();
//   const add = () => {
//     setResult(parseInt(n1) + parseInt(n2));
//   };
//   const sub = () => {
//     setResult(n1 - n2);
//   };
//   const division = () => {
//     setResult(n2 == 0 ? "Cannot divide by zero" : n1 / n2);
//   };
//   const product = () => {
//     setResult(n1 * n2);
//   };
//   return (
//     <>
//       <div className="p-2 border border-blue-200 m-auto mt-10 w-1/3 ">
//         <input type="number" onChange={(a) => setn1(a.target.value)} className="border-1" placeholder=""/><br />
//         <input type="number" onChange={(a) => setn2(a.target.value)} className="border-1" placeholder=""/> <br />
//         <button className="bg-amber-500 px-4 text-white" onClick={() => add()}>+</button>
//         <button className="bg-blue-500 px-4 text-white"  onClick={() => sub()}>-</button>
//         <button className="bg-green-500 px-4 text-white" onClick={() => division()}>/</button>
//         <button className="bg-red-500 px-4 text-white"   onClick={() => product()}>*</button>
//         <div className="p-5 w-full bg-blue-50 mt-5">
//           {result && result}
//         </div>
//       </div>
//     </>
//   );
// }