// import React, { useState } from "react";
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

// function Profilepic() {
//   const [image, setImage] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="col-span-full">
//       <label
//         htmlFor="cover-photo"
//         className="block text-sm font-medium leading-6 text-gray-900"
//       >
//         Update Profile Pic
//       </label>
//       <div className="mt-2 inline-block  rounded-lg  border border-dashed border-gray-900/25  px-6 py-10">
//         {image ? (
//           <div class="mt-4 flex-col text-sm leading-6 text-gray-600 w-36 text-center">
//             <img
//               src={image}
//               alt="Uploaded"
//               class="mx-auto mb-2 h-20 w-20 rounded-full"
//             />
//             <label
//               for="file-upload"
//               class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//             >
//               <span>Change Photo</span>
//               <input
//                 id="file-upload"
//                 name="file-upload"
//                 type="file"
//                 class="sr-only"
//                 onChange={handleFileChange}
//               />
//             </label>
//           </div>
//         ) : (
//           <div className="text-center">
//             <UserCircleIcon
//               className="mx-auto h-16 w-16 text-gray-300"
//               aria-hidden="true"
//             />
//             <div className="mt-4 flex text-sm leading-6 text-gray-600">
//               <label
//                 htmlFor="file-upload"
//                 className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//               >
//                 <span>Upload a file</span>
//                 <input
//                   id="file-upload"
//                   name="file-upload"
//                   type="file"
//                   className="sr-only"
//                   onChange={handleFileChange}
//                 />
//               </label>
//               <p className="pl-1">or drag and drop</p>
//             </div>
//             <p className="text-xs leading-5 text-gray-600">
//               PNG, JPG, GIF up to 10MB
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Profilepic;

















// Profilepic.js
// import React, { useState } from "react";
// import { UserCircleIcon } from "@heroicons/react/24/solid";

// function Profilepic({ register }) {
//   const [image, setImage] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setImage(reader.result);
//       onFileChange(file); // Pass the selected file to the parent component
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="col-span-full">
//       <label
//         htmlFor="cover-photo"
//         className="block text-sm font-medium leading-6 text-gray-900"
//       >
//         Update Profile Pic
//       </label>
//       <div className="mt-2 inline-block  rounded-lg  border border-dashed border-gray-900/25  px-6 py-10">
//         {image ? (
//           <div class="mt-4 flex-col text-sm leading-6 text-gray-600 w-36 text-center">
//             <img
//               src={image}
//               alt="Uploaded"
//               class="mx-auto mb-2 h-20 w-20 rounded-full"
//             />
//             <label
//               for="file-upload"
//               class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//             >
//               <span>Change Photo</span>
//               <input
//                 id="file-upload"
//                 name="file-upload"
//                 type="file"
//                 class="sr-only"
//                 onChange={handleFileChange}
//               />
//             </label>
//           </div>
//         ) : (
//           <div className="text-center">
//             <UserCircleIcon
//               className="mx-auto h-16 w-16 text-gray-300"
//               aria-hidden="true"
//             />
//             <div className="mt-4 flex text-sm leading-6 text-gray-600">
//               <label
//                 htmlFor="file-upload"
//                 className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//               >
//                 <span>Upload a file</span>
//                 <input
//                   id="file-upload"
//                   name="file-upload"
//                   type="file"
//                   className="sr-only"
//                   onChange={handleFileChange}
//                 />
//               </label>
//               <p className="pl-1">or drag and drop</p>
//             </div>
//             <p className="text-xs leading-5 text-gray-600">
//               PNG, JPG, GIF up to 10MB
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Profilepic;


















// Profilepic.js
import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function Profilepic({ register }) {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="col-span-full">
      <label
        htmlFor="cover-photo"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Update Profile Pic
      </label>
      <div className="mt-2 inline-block  rounded-lg  border border-dashed border-gray-900/25  px-6 py-10">
        {image ? (
          <div class="mt-4 flex-col text-sm leading-6 text-gray-600 w-36 text-center">
            <img
              src={image}
              alt="Uploaded"
              class="mx-auto mb-2 h-20 w-20 rounded-full"
            />
            <label
              for="file-upload"
              class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Change Photo</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                class="sr-only"
                onChange={handleFileChange}
                ref={register} // Register the file input field
              />
            </label>
          </div>
        ) : (
          <div className="text-center">
            <UserCircleIcon
              className="mx-auto h-16 w-16 text-gray-300"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  ref={register} // Register the file input field
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profilepic;

