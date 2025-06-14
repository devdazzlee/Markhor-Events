export default function SlidingText() {
  const texts = [
    "Party Time",
    "Good Vibes",
    "Dance Now",
    "Girls Night",
    "Fun Beats",
    "Music Love",
  ];

  // Repeat sufficiently for smooth loop
  const repeatedTexts = [...texts, ...texts];

  return (
    <section className="sliding-text-one">
      <div className="sliding-text-one__wrap">
        <ul className="sliding-text__list marquee_mode">
          {repeatedTexts.map((text, index) => (
            <li key={index}>
              <h2 data-hover={text} className="sliding-text__title">
                {text}
                <img src="/assets/images/icon/star-icon.png" alt="Star Icon" />
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
