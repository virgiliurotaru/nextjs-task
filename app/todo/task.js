import { useEffect, useState } from "react";

export default function Task({ taskTitle, deleteItem }) {
  const [isChecked, setIsChecked] = useState(false);
  // Bug when trying to delete. Check box remains true for the component that remains in place
  // problem with how i send the index
  useEffect(() => {
    if (isChecked)
      setTimeout(() => {
        deleteItem();
      }, 2000);
  }, [isChecked]);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="checkbox mr-4"
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <p className={isChecked ? "line-through" : ""}>{taskTitle}</p>
    </div>
  );
}
