import { useEffect, useState } from "react";

export default function Task({ taskTitle, deleteItem }) {
  const [isChecked, setIsChecked] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    if (isChecked) {
      setTimer(
        setTimeout(() => {
          deleteItem();
        }, 2000)
      );
    } else {
      console.log(timer);
      clearTimeout(timer);
    }
  }, [isChecked]);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="checkbox mr-4"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p className={isChecked ? "line-through" : ""}>{taskTitle}</p>
    </div>
  );
}
