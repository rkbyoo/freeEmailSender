import React, { useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';

function Form() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    from: "", 
    imageFile: null, 
    text: "" 
  });

  function changeHandler(event) {
    const { name, value, type, files } = event.target;
    setFormData(prevData => ({ 
      ...prevData, 
      [name]: type === "file" ? files[0] : value 
    }));
    console.log(formData)

  }

  async function submitHandler(event) {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("from", formData.from);
    formDataToSend.append("text", formData.text);
    if (formData.imageFile) {
      formDataToSend.append("imageFile", formData.imageFile);
    }

    console.log(formDataToSend)

    try {
      const response = await fetch(process.env.REACT_APP_BASE_URL, {
        method: "POST",
        body: formDataToSend,
      });
      
      toast.promise(response, {
        loading: 'sending email...',
        success: 'Email sent successfully',
        error: 'Error while sending email,try later',
      });

      if (response.ok) {
        console.log("email sent successfully")
        // toast.success('Email sent successfully', {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: false,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "dark"
        //   });
        console.log(response)
      } 
    } catch (error) {
      // toast.error("somthing went wrong")
      console.error("Error sending email:", error);
    }
    
  }

 

  return (
    <div>
      <ToastContainer />
      <form 
        className="max-w-sm mx-auto bg-black p-5 rounded-lg" 
        onSubmit={submitHandler}
      >
        {/* Receiver's Email Address */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Receiver's Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            value={formData.email}
            onChange={changeHandler}
            required
          />
        </div>

        {/* Random Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Random Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Choose your anon name"
            value={formData.name}
            onChange={changeHandler}
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
            name="from"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name&lt;abc@gmail.com&gt;"
            value={formData.from}
            onChange={changeHandler}
          />
        </div>

        {/* Text */}
        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Text
          </label>
          <input
            type="text"
            id="text"
            name="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter your text here"
            value={formData.text}
            onChange={changeHandler}
          />
        </div>

        {/* File Upload */}
        <div className="mb-5">
          <label
            htmlFor="imageFile"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Attach a File
          </label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none"
            onChange={changeHandler}
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
