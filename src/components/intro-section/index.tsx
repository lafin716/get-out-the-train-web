import { tw } from 'twind';

const IntroSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
        <div className={tw(`w-full`)}>
          <img src="/images/smartphone-addiction.jpg" alt="smartphone addiction" />
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
