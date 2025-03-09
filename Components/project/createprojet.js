import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebaseConfig"; 
import { collection, addDoc, updateDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";

const TodoList = () => {
    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);
    const [edit, setEdit] = useState(null);
    const [editItem, setEditItem] = useState("");

    const user = auth.currentUser;
    const userId = user?.uid; 

    useEffect(() => {
        if (!userId) return; 

        const unsubscribe = onSnapshot(collection(db, "users", userId, "tasks"), (snapshot) => {
            const taskList = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setItems(taskList);
        });

        return () => unsubscribe(); 
    }, [userId]);

    const addTask = async () => {
        if (item.trim() === "" || !userId) return;

        try {
            await addDoc(collection(db, "users", userId, "tasks"), {
                text: item,
                isCompleted: false,
            });
            setItem("");
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const CompletionStatus = async (taskId, currentStatus) => {
        if (!userId) return;

        try {
            const taskRef = doc(db, "users", userId, "tasks", taskId);
            await updateDoc(taskRef, { isCompleted: !currentStatus });
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const startEditing = (task) => {
        setEdit(task.id);
        setEditItem(task.text);
    };

    const saveEdit = async (taskId) => {
        if (!userId) return;

        try {
            const taskRef = doc(db, "users", userId, "tasks", taskId);
            await updateDoc(taskRef, { text: editItem });
            setEdit(null);
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const deleteTask = async (taskId) => {
        if (!userId) return;

        try {
            await deleteDoc(doc(db, "users", userId, "tasks", taskId));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="List">
            <h4>Todo List</h4>
            <div className="textfield">
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={addTask}>+</button>
            </div>

            <ul>
                {items.map((task) => (
                    <li key={task.id}>
                        <button onClick={() => CompletionStatus(task.id, task.isCompleted)}>
                            {task.isCompleted ? "🗹" : "☐"}
                        </button>

                        {edit === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editItem}
                                    onChange={(e) => setEditItem(e.target.value)}
                                />
                                <button onClick={() => saveEdit(task.id)}>✔️</button>
                            </>
                        ) : (
                            <span
                                style={{
                                    textDecoration: task.isCompleted ? "line-through" : "none",
                                    textAlign: "center",
                                }}
                            >
                                {task.text}
                            </span>
                        )}

                        <button onClick={() => startEditing(task)} style={{ marginLeft: "350px" }}>
                            ✏️
                        </button>
                        <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>
                            🚮
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
