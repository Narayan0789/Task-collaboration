import React, { useEffect, useState } from "react";
import API from "../services/api";
import ListPage from "./ListPage";

function BoardPage() {

  const [boards, setBoards] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchBoards();
  }, []);


  // Fetch all boards
  const fetchBoards = async () => {

    try {

      const res = await API.get("/boards");
      setBoards(res.data);

    } catch (err) {

      console.error("Fetch boards error:", err);

    }

  };


  // Create new board
  const createBoard = async () => {

    if (!title.trim()) {

      alert("Please enter board name");
      return;

    }

    try {

      setLoading(true);

      const res = await API.post("/boards/create", {
        title: title.trim()
      });

      console.log("Board created:", res.data);

      setTitle("");
      fetchBoards();

    } catch (err) {

      console.error("Create board error:", err);
      alert("Failed to create board");

    } finally {

      setLoading(false);

    }

  };


  return (
    <div style={{ marginTop: "20px" }}>

      {/* Heading */}
      <h2 style={{ color: "#172b4d" }}>Boards</h2>


      {/* Input section */}
      <div style={{ marginBottom: "15px" }}>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter board name"
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginRight: "10px",
            width: "200px"
          }}
        />

        <button
          onClick={createBoard}
          disabled={loading}
          style={{
            padding: "8px 14px",
            backgroundColor: "#0079bf",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {loading ? "Creating..." : "Create Board"}
        </button>

      </div>



      {/* Boards list */}
      <div style={{ marginBottom: "20px" }}>

        {boards.map(board => (

          <div
  key={board._id}
  onClick={() => setSelectedBoard(board._id)}
  className={
    selectedBoard === board._id
      ? "board-item board-selected"
      : "board-item"
  }
>
  {board.title}
</div>


        ))}

      </div>



      {/* Lists section */}
      {selectedBoard && (
        <ListPage boardId={selectedBoard} />
      )}

    </div>
  );

}

export default BoardPage;
