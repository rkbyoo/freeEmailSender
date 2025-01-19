import React from 'react';

function Form() {
  return (
    <div>
      <form className="max-w-sm mx-auto bg-black p-5 rounded-lg">
        {/* Receiver's Email Address */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Receiver's Email Address
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        {/* Random Name */}
        <div className="mb-5">
          <label
            htmlFor="randomName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Random Name
          </label>
          <input
            type="text"
            id="randomName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Choose your anon name"
            required
          />
        </div>

        {/* From */}
        <div className="mb-5">
          <label
            htmlFor="from"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            From
          </label>
          <input
            type="text"
            id="from"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name&lt;abc@gmail.com&gt;"
          />
        </div>

        {/* File Upload */}
        <div className="mb-5">
          <label
            htmlFor="fileUpload"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Attach a File
          </label>
          <input
            type="file"
            id="fileUpload"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send Email
        </button>
      </form>
    </div>
  );
}

export default Form;
