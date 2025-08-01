import oopsImage from '../assets/images/oops.jpg'; // ✅ Import the image

export default function OopsSection() {
  return (
    <section className="oops-section">
      <div className="oops-image">
        <img src={oopsImage} alt="OOPS Exhibit" />
      </div>
      <div className="oops-text">
        <h1 style={{ fontWeight: 700 }}>OOPS</h1>
        <p>
          The "OOPS! Random - Lucky" exhibition at Naturhistorisk Museum Aarhus
          dives into the unexpected ways coincidences and "mistakes" have
          profoundly influenced our world.
        </p>
        <p>
          It highlights how everything from the Big Bang and cosmic events to
          the very origins of life and evolution has been shaped by seemingly
          random occurrences.
        </p>
        <p>
          This thought-provoking exhibit encourages visitors to consider the
          role of chance in both grand cosmic narratives and groundbreaking
          scientific discoveries.
        </p>
      </div>
    </section>
  );
}
