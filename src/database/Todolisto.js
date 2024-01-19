import React, { useState } from 'react';

function Todolisto() {
    const [rows, setRows] = useState([{ name: "Joshi" }]);
    const [form, setForm] = useState({ name: "" });
    const [edit, setEdit] = useState(-1);

    const handleEdit = (id) => {
        setEdit(id);
    };

    const handleDelete = (targetIndex) => {
        setRows(rows.filter((_, id) => id !== targetIndex));
    };

    const handleNameChange = (e) => {
        setForm({
            ...form,
            name: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit !== -1) {
            const updatedRows = [...rows];
            updatedRows[edit].name = form.name;
            setRows(updatedRows);
            setEdit(-1);
        } else {
            setRows([...rows, form]);
        }
        setForm({ name: "" });
    };

    return (
        <div>
            <p align="center">
                <h1>ToDo List</h1><br />
                <form onSubmit={handleSubmit}>
                    <input type="text" value={form.name} onChange={handleNameChange} />
                    <button type="submit">{edit !== -1 ? "Save" : "Add"}</button><br /><br />
                </form>
                <table>
                    <thead>
                        <tr>
                            <th className='expand'>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, id) => (
                            <tr key={id}>
                                <td>
                                    {edit === id ? (
                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={handleNameChange}
                                        />
                                    ) : (
                                        row.name
                                    )}
                                </td>
                                <td>
                                    {edit !== id ? (
                                        <button onClick={() => handleEdit(id)}>Edit</button>
                                    ) : (
                                        <button onClick={handleSubmit}>Save</button>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </p>
        </div>
    );
}

export default Todolisto;
