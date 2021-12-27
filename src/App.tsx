import Config from "./util/config";

const App = () => {
  return (
    <>
      <header>Header</header>
      <main>Main</main>
      <footer>{Config.mode}</footer>
    </>
  );
};

export default App;
