import React, { useEffect, useState } from "react";
import API from "../services/api";
import TaskPage from "./TaskPage";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

function ListPage({ boardId }) {

  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState("");

  
useEffect(() => {
  fetchLists();
}, []);

  const fetchLists = async () => {

    try {

      const res = await API.get(`/lists/${boardId}`);
      setLists(res.data);

    } catch (err) {

      console.error(err);

    }

  };


  const createList = async () => {

    if (!title.trim()) return;

    try {

      await API.post("/lists/create", {
        title,
        boardId
      });

      setTitle("");
      fetchLists();

    } catch (err) {

      console.error(err);

    }

  };


  // Drag end handler
  const handleDragEnd = async (result) => {

    if (!result.destination) return;

    const taskId = result.draggableId;
    const newListId = result.destination.droppableId;

    try {

      await API.put("/tasks/move", {
        taskId,
        newListId
      });

      fetchLists();

    } catch (err) {

      console.error(err);

    }

  };


  return (
    <div className="section">

      <h2>Lists</h2>


      {/* Input */}
      <div style={{ marginBottom: "15px" }}>

        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter list name"
        />

        <button
          className="button"
          onClick={createList}
        >
          Create List
        </button>

      </div>



      {/* Drag Drop */}
      <DragDropContext onDragEnd={handleDragEnd}>

        <div className="lists-container">

          {lists.map(list => (

            <Droppable
              droppableId={list._id}
              key={list._id}
            >

              {(provided) => (

                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="list-card"
                >

                  <h3>{list.title}</h3>

                  <TaskPage listId={list._id} />

                  {provided.placeholder}

                </div>

              )}

            </Droppable>

          ))}

        </div>

      </DragDropContext>

    </div>
  );

}

export default ListPage;
