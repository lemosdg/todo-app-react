import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { Task } from "../Task";
import { FooterTasks } from "../FooterTasks";
import { FilterTasks } from "../FilterTasks";

import { setTasks } from "../../features/tasks/tasksSlice";
import { useRefreshTasks } from "../../hooks/useRefreshTasks";
import { reorder } from "../../lib/reorder_list";
import "./index.css";

export const ListTasks = () => {
  const { refresTasks } = useRefreshTasks();
  // Redux
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  useEffect(() => {
    refresTasks();
  }, []);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }

    const newOrder = reorder(tasks, source.index, destination.index);

    dispatch(setTasks(newOrder));
  };

  return (
    <section className="listTasks">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="listTasks_wrapper"
            >
              {tasks?.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.description + task.id}
                  index={index}
                >
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                    >
                      <Task
                        id={task.id}
                        description={task.description}
                        done={task.done}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}

              <FooterTasks />
              <FilterTasks />

              <section className="listTasks_content_text">
                <p className="listTasks_text">Drag and drop to reorder list</p>
              </section>
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};
