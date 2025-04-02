import React, { useState } from "react";

function tryFile() {
    const todo = ["game", "music", "songs"];
    const [allTodo, setAllTodo] = useState(todo);
    const [newTodo, setNewTodo] = useState("");
    const [error, setError] = useState(false);
    const [status, setStatus] = useState({});

    const deleteTodo = (name) => {
        if (window.confirm("Are you sure you want to delete?")) {
            const updated = allTodo.filter((data) => data !== name);
            setAllTodo(updated);
            const newStatus = { ...status };
            delete newStatus[name];
            setStatus(newStatus);
        }
    }

    const toggleStatus = (name) => {
        setStatus(prevStatus => ({
            ...prevStatus,
            [name]: prevStatus[name] === "Done" ? "Not Done" : "Done"
        }));
    }

    function newTodoFunction() {
        if (!newTodo) {
            setError(true);
            return;
        }
        setAllTodo([...allTodo, newTodo]);
        setStatus({ ...status, [newTodo]: "Not Done" });
        setNewTodo("");
    }

    const handelInput = (e) => {
        setNewTodo(e.target.value);
        setError(false);
    }

    return (
        <>
            <div className="flex">
                <div className="bg-lime-100 w-full p-3">
                    <p className="text-center mt-2 text-black">Add new To Do</p>
                    {error && <div className="text-orange-500 bg-orange-100 p-2 rounded-lg mt-2 mb-2">To do Name Required</div>}
                    <input type="text" value={newTodo} onChange={(e) => handelInput(e)} className="w-full border border-amber-200 outline-none bg-white p-2" />
                    <input type="submit" onClick={newTodoFunction} value="ADD To Do" className="bg-gray-900 w-full text-amber-50 mt-2 border border-amber-200 p-2" />
                </div>
                <table className="w-full m-auto">
                    <thead>
                        <tr>
                            <th className="p-2 bg-gray-800 text-white">NO</th>
                            <th className="p-2 bg-gray-800 text-white">TO DO NAMES</th>
                            <th className="p-2 bg-gray-800 text-white">STATUS</th>
                            <th className="p-2 bg-gray-800 text-white">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTodo.map((todo, index) => (
                            <tr key={index}>
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2">{todo}</td>
                                <td className="p-2">{status[todo] || "Not Done"}</td>
                                <td className="p-2">
                                    <button onClick={() => deleteTodo(todo)} className="p-1 text-white bg-red-700 cursor-pointer rounded-4xl">X</button>
                                    <button onClick={() => toggleStatus(todo)} className={`p-1 ml-2 text-white cursor-pointer rounded-4xl ${status[todo] === "Done" ? "bg-green-500" : "bg-gray-500"}`}>
                                        {status[todo] === "Done" ? "✔ Done" : "✔ Not Done"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default tryFile;
