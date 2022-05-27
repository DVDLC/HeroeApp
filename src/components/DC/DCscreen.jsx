import { HeroList } from "../HeroCard/HeroList";

export function DCscreen() {

  const publisher = 'DC Comics'
  return (
    <div className="cards-wrapper">
      <HeroList publisher={ publisher }/>
    </div>
  );
}