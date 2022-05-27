import { HeroList } from "../HeroCard/HeroList";

export function MARVELscreen() {
  const publisher = 'Marvel Comics'

  return (
    <div>
      <HeroList publisher={ publisher }/>
    </div>
  );
  }