import { ArrowLeft, EllipsisVertical, Plus, Edit, Trash } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [tododata, setTododata] = useState([
    {
      todo: "1",
      description: "2",
      date: "3",
      time: "4",
    },
    {
      todo: "1",
      description: "2",
      date: "3",
      time: "4",
    },
  ]);
  const [formData, setFormData] = useState({
    todo: "",
    description: "",
    date: "",
    time: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.todo && formData.description) {
      setTododata([
        ...tododata,
        {
          id: Date.now(),
          ...formData,
        },
      ]);
      setFormData({ todo: "", description: "", date: "", time: "" });
      setVisible(false);
    }
  };
  function handleUpdate(id, field, value) {
    setTododata(
      tododata.map((todo) =>
        todo.id === id ? { ...todo, [field]: value } : todo
      )
    );
    setVisible(true);
  }
  // const navigate = useNavigate();
  // function handleProductNavigate (productID) {
  //   navigate(`/productdetails/${productID}`)
  // }
  return (
    <div>
      <header className="mb-2 px-4 shadow">
        <div className="relative mx-auto flex justify-between items-center max-w-screen-lg py-4 ">
          <h2 className="text-blue-600 font-bold text-2xl">ToDoList</h2>
          <button
            onClick={() => setVisible(true)}
            className=" cursor-pointer flex p-3 px-5 font-bold border rounded-xl text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Create <Plus />
          </button>
        </div>
      </header>
      <div className="flex items-center gap-5 flex-col mt-10">
        {tododata?.map((todolist, index) => (
          <div
            key={index}
            className="max-w-[80%] relative flex w-full gap-10 items-center p-5 border rounded-2xl"
          >
            <p>{index}</p>
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer accent-blue-600"
            />
            <div className="flex flex-col gap-2 ">
              <p className="text-xl">{todolist.todo}</p>
              <p>{todolist.description}</p>
            </div>
            <div className="">
              <p>{todolist.date}</p>
              <p>{todolist.time}</p>
            </div>
            <details className="p-3 z-1 absolute  right-5 hover:bg-gray-950 rounded-xl cursor-pointer">
              <summary className="list-none">
                <EllipsisVertical />
              </summary>
              <ul className="absolute bg-[#242424] shadow-2xl p-5 flex flex-col gap-3 rounded-3xl right-5">
                <li
                  onClick={handleUpdate}
                  className="flex gap-3 hover:text-gray-500 p-2"
                >
                  Edit <Edit />
                </li>
                <li className="flex gap-3 hover:text-red-700 p-2 text-red-500">
                  Delete <Trash />
                </li>
              </ul>
            </details>
          </div>
        ))}
        <div
          className={`absolute z-10 transition-all bg-[#242424] max-w-[80%] w-[100%] h-fit border rounded-2xl ${
            visible ? "block" : "hidden"
          }`}
        >
          <div className="shadow-2xl">
            <Link
              onClick={() => setVisible(false)}
              className="flex items-center w-fit text-white p-5 gap-2 text-xl"
            >
              <ArrowLeft />
              Back
            </Link>
          </div>
          <div className=" flex relative  flex-col flex-1 gap-5 p-10">
            <h2 className="text-2xl ">CREATE YOUR TO DO LIST</h2>
            <div className="flex items-center gap-20 text-xl">
              <label htmlFor="todo">To Do:</label>
              <input
                type="text"
                id="todo"
                name="todo"
                value={formData.todo}
                onChange={handleInputChange}
                placeholder="Create Your to do"
                className="border-b focus:outline-0 p-2 max-w-[50%] w-full"
              />
            </div>
            <div className="flex items-center gap-8 text-xl">
              <label htmlFor="description">Description: </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="describe Your to do here"
                className="border h-32 focus:outline-0 p-2 max-w-[50%] w-full"
              ></textarea>
            </div>
            <div className="flex gap-10">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-[200px] p-2.5 border border-[#ccc] rounded-md bg-[#f9f9f9] text-black focus:bg-[#00fbff] focus:shadow-2xl"
              />
              <input
                type="time"
                value={formData.time}
                name="time"
                onChange={handleInputChange}
                className="w-[200px] p-2.5 border border-[#ccc] rounded-md bg-[#f9f9f9] text-black focus:bg-[#00fbff] focus:shadow-2xl"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 p-5 rounded-2xl cursor-pointer w-fit px-10 text-xl font-bold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { useState } from 'react';

// function Home() {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: ''
//   });

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.name && formData.email) {
//       setUsers([...users, {
//         id: Date.now(),
//         ...formData
//       }]);
//       // Reset form
//       setFormData({ name: '', email: '', age: '' });
//     }
//   };

//   // Update user
//   const updateUser = (id, field, value) => {
//     setUsers(users.map(user =>
//       user.id === id ? { ...user, [field]: value } : user
//     ));
//   };

//   // Delete user
//   const deleteUser = (id) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

//   return (
//     <div>
//       <h2>User Management</h2>

//       {/* Form */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleInputChange}
//           placeholder="Age"
//         />
//         <button type="submit">Add User</button>
//       </form>

//       {/* Display users */}
//       <div>
//         <h3>Users List</h3>
//         {users.map(user => (
//           <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Age:</strong> {user.age}</p>
//             <button onClick={() => deleteUser(user.id)}>Delete</button>
//             <button onClick={() => {
//               const newName = prompt('Enter new name:', user.name);
//               if (newName) updateUser(user.id, 'name', newName);
//             }}>
//               Edit Name
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
