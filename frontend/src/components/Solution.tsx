import "./Canvas.css";
const Solution = ({ solution }: { solution: string }) => {
  return (
    <section className="solution">
      <h2 className="canvas-header">SOLUTION</h2>
      <p>{solution}</p>
    </section>
  );
};

export default Solution;
