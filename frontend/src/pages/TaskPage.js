import React, { useEffect, useState } from "react";
import API from "../services/api";
import socket from "../services/socket";
import { Draggable } from "@hello-pangea/dnd";

function TaskPage({ listId }) {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");


  // Load tasks + realtime listener
  useEffect(() => {

    fetchTasks();

    socket.on("taskCreated", () => {
      fetchTasks();
    });

    return () => {
      socket.off("taskCreated");
    };

  }, [listId]);


  // Fetch tasks
  const fetchTasks = async () => {

    try {

      const res = await API.get(`/tasks/${listId}`);
      setTasks(res.data);

    } catch (err) {

      console.error(err);

    }

  };


  // Create task
  const createTask = async () => {

    if (!title.trim()) return;

    try {

      const res = await API.post("/tasks/create", {
        title,
        listId
      });

      socket.emit("taskCreated", res.data.task);

      setTitle("");

      fetchTasks();

    } catch (err) {

      console.error(err);

    }

  };


  return (
    <div>

      {/* Input section */}
      <div style={{ display: "flex", gap: "5px", marginBottom: "8px" }}>

        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task name"
          style={{ flex: 1 }}
        />

        <button
          className="button"
          onClick={createTask}
        >
          Add
        </button>

      </div>


      {/* Tasks */}
      {tasks.map((task, index) => (

        <Draggable
          key={task._id}
          draggableId={task._id}
          index={index}
        >

          {(provided) => (

            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="task-card"
              style={{
                ...provided.draggableProps.style
              }}
            >
              {task.title}
            </div>

          )}

        </Draggable>

      ))}

    </div>
  );

}

export default TaskPage;
