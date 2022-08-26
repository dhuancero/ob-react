import React from "react";
import { LEVELS } from "../../models/level.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskList = () => {
  const defaultTask = new Task(
    "Example",
    "This is a example of description",
    false,
    LEVELS.NORMAL
  );

  return (
    <div>
      Your tasks:
      {/* //TODO: apply a for/map to render a list of tasks */}
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskList;
