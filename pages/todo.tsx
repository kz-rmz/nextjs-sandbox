import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

export default function TODO() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Задачки</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />

        {/* Main */}
        <TodoList />

        <Footer />
      </div>

      {/* Main styles */}
    </>
  );
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: {
//       listElement1: {
//         title: 'Task #1',
//         body: 'Task description',
//         isDone: false,
//       },
//       listElement2: {
//         title: 'Task #1',
//         body: 'Task description',
//         isDone: false,
//       }
//     },
//   }
// }
