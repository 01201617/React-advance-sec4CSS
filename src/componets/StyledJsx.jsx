export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>- Sytled Jsx -</p>
        <button>FIGHT!!</button>
      </div>
      <style jsx="true">{".container{ border: solid 2px #392eff;"}</style>
    </>
  );
};
