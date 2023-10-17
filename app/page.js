export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Things to improve:</h1>
      <ul className="list-disc">
        <li>Clean up localStorage </li>
        <li>Add loading effect when comments are loading</li>
        <li>Comments are cached automatically. is it ok? </li>
      </ul>
    </main>
  );
}
