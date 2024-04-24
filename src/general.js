import React, { useEffect, useState } from "react";
import Dropdown1, { Dropdown2 } from "./dropdowns";



export function TableOne() {
  
  const [people, setPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`/api/search?search=${searchQuery}`);
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        const data = await response.json();
        console.log("data",data);
        setPeople(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, [searchQuery]);


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <h2 className="text-lg font-semibold">Sort By</h2>
        </div>

        <div className="flex items-center justify-between space-x-4">
    <div className="flex space-x-4">
        <div>
            <Dropdown1></Dropdown1>
        </div>
        <div>
            <Dropdown2></Dropdown2>
        </div>
        <div className="flex items-center">
            <a href="#" className="text-blue-600  items-center hover:underline">Sort by cohort</a>
        </div>
        <div>
            {/*date picker code here*/ }
            <input type="date" id="datepicker" name="datepicker" className="block rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
    </div>
    <div className="flex items-center space-x-1">
        <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        name="search"
        id="search"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Keyword Search"
        />
        <button
            type="button"
            className="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
            Search
        </button>
    </div>
</div>



        <div className="mt-6 flex flex-col overflow-y-auto overflow-x-hidden h-96">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg ">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50"></thead>
                  <tbody className=" divide-y divide-gray-200 bg-white ">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                // src={person.image}
                                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-base font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-700">
                                {person.title}
                              </div>
                              <div  className="text-sm text-gray-700" >{person.techStack.join(', ')}</div>
                              
                            </div>
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-14 py-4 text-right">
                          <a
                            href="#"
                            className="inline-flex rounded-full bg-red-300 px-2 text-sm font-semibold leading-5 text-black-900 mr-2"
                          >
                            Delete
                          </a>
                          <a
                            href="#"
                            className="inline-flex rounded-full bg-green-100 px-2 text-sm font-semibold leading-5 text-green-800 mr-2"
                          >
                            Message
                          </a>
                          <a
                            href="#"
                            className="inline-flex rounded-full bg-blue-100 px-2 text-sm font-semibold leading-5 text-blue-800 mr-2"
                          >
                            View Profile
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>



      </section>
    </>
  );
}
