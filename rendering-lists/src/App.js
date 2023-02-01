import { people } from "./components/data";
import { getImageUrl } from "./components/utils";
function App() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItem = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {''+ person.profession} known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItem}</ul>
}

export default App;
