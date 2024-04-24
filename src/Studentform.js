import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Profilepic from "./uploadfile";
import Select from "react-select";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalState } from "./GlobalState";







export default function StudentSignupForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const [options, setOptions] = useState([]);

  const { userId, setUserId } = useGlobalState();
  



  const handleSeekingChange = (selectedOptions) => {
    setValue("seeking", selectedOptions.map(option => option.value));
  };
  const handleTechChange = (selectedOptions) => {
    setValue("techStack", selectedOptions.map(option => option.value));
  };

  useEffect(() => {
    // Fetch options from backend here
    // For demonstration purpose, I'm using a static array
    const fetchedOptions = [
      { value: "Internship", label: "Internship" },
      { value: "Remote", label: "Remote" },
      { value: "FullTime", label: "FullTime" },
      { value: "PartTime", label: "PartTime" },
      { value: "Freelance", label: "Freelance" },
      { value: "Contract", label: "Contract" },
      { value: "Not Seeking", label: "Not Seeking" },
      { value: "Apprenticeship", label: "Apprenticeship" },

    ];
    setOptions(fetchedOptions);
  }, []);

  const options1 = [
    { value: "Ruby", label: "Ruby" },
    { value: "HTML5/CSS3", label: "HTML5/CSS3" },
    { value: "ReactJs", label: "ReactJs" },
    { value: "NodeJS", label: "NodeJS" },
    { value: "MERN", label: "MERN" },
    { value: "Cotlin", label: "Cotlin" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "Springboot", label: "Springboot" },
    { value: "C++", label: "C++" },
    { value: "Linux", label: "Linux" },
    { value: "Apache", label: "Apache" },
    { value: "Flutter", label: "Flutter" },
    { value: "Django", label: "Django" },
    { value: "ASP.NET", label: "ASP.NET" },
    { value: "MEAN", label: "MEAN" },
  ];











  useEffect(() => {
    // Fetch options from backend here
    // For demonstration purpose, I'm using a static array
    const fetchedOptions = [
      { value: "Internship", label: "Internship" },
        { value: "Remote", label: "Remote" },
        { value: "FullTime", label: "FullTime" },
        { value: "PartTime", label: "PartTime" },
        { value: "Freelance", label: "Freelance" },
        { value: "Contract", label: "Contract" },
        { value: "Not Seeking", label: "Not Seeking" },
        { value: "Apprenticeship", label: "Apprenticeship" },
    ];
    setOptions(fetchedOptions);
  }, []);

 



  


   const onSubmit =  async (data,e) => {

      
      console.log(data);


      try {
        const response = await fetch('/api/students/create-student', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        const responseData = await response.json();
    
        if (!response.ok) {
          throw new Error(responseData.message || 'Failed to save changes');
        }
    
        // Handle successful response
        console.log('Student created successfully:', responseData);
        // For example, show a success message or redirect

        // e.target.reset(); 
        reset();

      } catch (error) {
        console.error('Error:', error);
        // Handle error appropriately, e.g., display error message to the user
      }

    }
    



  //   // setIsLoading(true);
  //   // setError(null);

  //   // try {
  //   //   const response = await fetch(`/api/students/edit-student/${id}`, {
  //   //     method: 'PATCH',
  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //     },
  //   //     body: JSON.stringify(data),
  //   //   });

  //   //   if (!response.ok) {
  //   //     throw new Error('Failed to save changes');
  //   //   }

  //   //   // Handle successful response
  //   //   // For example, show a success message or redirect
  //   // } catch (error) {
  //   //   setError(error.message);
  //   // } finally {
  //   //   setIsLoading(false);
  //   // }
  // };



 

  return (

    <>

    {userId && <Navigate to="/"></Navigate>}

    <form  onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12 ml-4 mt-6">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
          Student Registration
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          
        </div>

        <div className="border-b border-gray-900/10 pb-12">
         

          <div className="mt-10 grid grid-cols-1 gap-x-6  sm:grid-cols-6 gap-y-8 ">



          <div className="sm:col-span-3">

            <div className="sm:col-span-2 mb-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2 block">
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

           
            

            <div className="sm:col-span-3  mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
    
            <div className="sm:col-span-2  mb-6">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `- at least 8 characters\n
                - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                - Can contain special characters`,
                    },
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div  className="sm:col-span-2 mb-6 ">
              <div className="  flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "confirm password is required",
                    validate: (value, formValues) =>
                      value === formValues.password || "password not matching",
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2 mb-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2 block">
                <input
                  type="text"
                  name="title"
                  {...register("title")}
                  id="title"
                  autoComplete="title"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            </div>

            

            <div className="sm:col-span-4 sm:col-start-1">
              <label
                htmlFor="datepicker"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Grad Date
              </label>
              <div className="mt-2">
                {/*date picker code here*/}
                <input
                  type="date"
                  id="datepicker"
                  {...register("datepicker")}
                  className="block rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="githubURL"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Github
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    type="text"
                    {...register("githubURL")}
                    id="githubURL"
                    autoComplete="githubURL"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Github.com"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="websiteURL"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Website
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    {...register("websiteURL")}
                    id="websiteURL"
                    autoComplete="websiteURL"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="www.websitename.com"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Location
              </label>
              <div className="mt-2">
                <select
                  id="location"
                  {...register("location")}
                  autoComplete="location"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>India</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>Japan</option>
                </select>
              </div>
            </div>

            <div className="col-span-4">
              <label
                htmlFor="bio"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bio
              </label>
              <div className="mt-2">
                <textarea
                  id="bio"
                  {...register("bio")}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write in brief about yourself.
              </p>
            </div>


            <Profilepic  
             
            ></Profilepic>

           

            <div className="sm:col-span-4">
              <label
                
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Field Of Interest
              </label>
              <div className="mt-2">
                <select
                  id="fieldOfInterest"
                  {...register("fieldOfInterest")}
                  autoComplete="fieldOfInterest"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Security</option>
                  <option>Developer</option>
                  <option>HR Manager</option>
                  <option>Analyst</option>
                  <option>Programmer</option>
                  <option>Project Manager</option>
                  <option>Sales Engineer</option>
                  <option>Network Engineer</option>



                </select>
              </div>
            </div>

            <div className="sm:col-span-3 ">

            <div className="sm:col-span-3 mb-6">
              <label
                
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Seeking
              </label>
              <div className="mt-2">
                <Select
                  id="seeking"
                  {...register("seeking")} // Register the field with react-hook-form
                  onChange={handleSeekingChange}
                  name="seeking"
                  maxMenuHeight={116}
                  options={options}
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"  
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="techStack"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tech Stack
              </label>
              <div className="mt-2">
                <Select
                  id="techStack "
                  
                  {...register("techStack")} // Register the field with react-hook-form
                  onChange={handleTechChange}
                  name="techStack"
                  maxMenuHeight={116}
                  options={options1}
                  isMulti
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
            </div>

            </div>



          </div>
        </div>

        
      </div>

      <div className="mt-6 ml-4 mb-6  flex items-center justify-start gap-x-6">
        
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save Changes
        </button>
      </div>
    </form>



   </>


  );
}

