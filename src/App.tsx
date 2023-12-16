import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal(
    setGoals((prevGoals)=>{
      const newGoal : CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth'
      };o
return [...preGoals, newGoal];
    });
  ) {}
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A List of Goals" }}>
        <h1>Your Course goals</h1>
      </Header>
      <button onClick={handleAddGoal}> Add Goal </button>
      <CourseGoal title="Learn TS + React">
        <p>Learn from the groud up</p>
      </CourseGoal>
    </main>
  );
}
