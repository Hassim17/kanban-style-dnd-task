import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import "./dnd.scss";
import itemsFromBackend from "./dataFromBackend.json";

export const columnsFromBackend = {
  [uuidv4()]: { name: "RECIEVED ORDERS", items: itemsFromBackend },
  [uuidv4()]: { name: "ORDER IN PROGRESS", items: [] },
  [uuidv4()]: { name: "ORDER IS READY FOR DELIVERY", items: [] },
  [uuidv4()]: { name: "ORDER PICKED UP", items: [] },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, items: sourceItems },
      [destination.droppableId]: { ...destColumn, items: destItems },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: { ...column, items: copiedItems },
    });
  }
};

function DragAndDrop({ searchTerm }) {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div className="dnd-container">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div className="dnd-column-container" key={columnId}>
              <div className="column-title">{`${column.name}(${column.items.length})`}</div>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="dnd-column"
                      style={{
                        background: snapshot.isDraggingOver
                          ? "lightblue"
                          : "#EEEEEE",
                      }}
                    >
                      {column.items
                        .filter((val) => {
                          if (searchTerm === "") return val;
                          else if (val.orderNo.toString().includes(searchTerm))
                            return val;
                          else return NaN;
                        })
                        .map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="task-items"
                                  >
                                    <h5 className="task-index">{`#${item.index}`}</h5>
                                    <div className="task-orderNo">{`Order No: #${item.orderNo}`}</div>
                                    <div className="task-orders">{`${item.orderedItems}`}</div>
                                    <div className="task-dueDate">
                                      <div>
                                        DUE: <span>{item.dueDate}pm</span>
                                      </div>
                                      <div className="assigned">
                                        ASSIGNED TO
                                        <div className="avatar"></div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default DragAndDrop;
