export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Things to improve:</h1>
      <ul className="list-disc">
        <li>When the todo is unchecked before 2seconds, cancel deletion</li>
        <li>Sometimes linethru doesnt work</li>
        <li>Add users and styles on posts page</li>
        <li>Comments are cached automatically. is it ok? </li>
      </ul>
    </main>
  );
}
