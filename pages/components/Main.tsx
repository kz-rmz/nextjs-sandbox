import Link from "next/link";

export default () => {
  return (
    <main>
      <h1 className="title">
        Создай{" "}
        <Link href="/todo">
          <a>первую задачу</a>
        </Link>
      </h1>

      <p className="description">Ваша продуктивность - наша забота!</p>
    </main>
  );
};
