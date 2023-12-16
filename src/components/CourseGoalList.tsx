import { FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            title={goal.title}
            onDeleteGoal={onDeleteGoal}
            id={goal.id}
          >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
