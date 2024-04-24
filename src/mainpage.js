import React from "react";
import { useState, useEffect } from "react";

const Mainpage = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          `/api/home?search=${searchQuery}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }
        const data = await response.json();
        console.log("data", data);
        setStudents(data);
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
    <div className="ml-4 mt-4 mr-4">
      <div className="grid grid-cols-5 divide-x">
        <div className="relative h-32 w-32 ...">
          <div className="absolute left-0 top-0 h-16 w-16 ...">
            <div className="my-4 col-span-1 inline-block  rounded-xl  border border-solid border-gray-900/25  px-6 py-8">
              <h2 className="text-lg font-semibold mb-2">Search Graduates</h2>
              <div className="  flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  name="search"
                  id="search" 
                  className="border border-gray-300 px-3 py-2 rounded-md"
                  placeholder="Search..."
                />
              </div>
              <div>
                
                  <button  className="bg-blue-500 w-full mt-4 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Search
                  </button>
                
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 mt-4 pl-4 pt-4 pr-8 grid gap-y-2">
          {students.map((student) => (
            <section
              key={student._id}
              className="mb-2  border bg-neutral-100 p-4 rounded-lg max-w-full "
            >
              <div className="mx-auto">
                <div className="card md:flex ">
                  <div className="w-22 h-22 mx-auto mt-6 mb-6 md:mr-6 flex-shrink-0">
                    <img
                    className="object-cover rounded-full"
                      src="https://tailwindflex.com/public/images/user.png"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl font-bold mt-4 heading">
                      {student.name}
                    </h3>
                    <p className=" mb-5 pr-8">{student.bio}</p>

                    <div className="flex gap-2">
                      {student.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 mx-auto mb-6 md:mr-6 text-center flex-shrink-0">
                    <div className="flex space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>

                      <p className="font-bold mb-2 ">{student.seeking[0]}</p>
                    </div>

                    <button
                      type="submit"
                      className="rounded-md mx-auto bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
