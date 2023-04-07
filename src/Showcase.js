import bulbasaur from'./images/bulbasaur.jpg'

function Showcase() {
    let favPokemon = 'Bulbasaur'
    let pokeCharacteristics = {type: 'Grass', move: 'Vine Whip'}
    return (
      <div>
        <h1>{favPokemon}'s Showcase Component</h1>
        <img
        style = {{height: 250, padding: 20, borderRadius: '50%'}}
        src = {bulbasaur}
        alt = {favPokemon}/>
        <h2>
        Bulbasaur's type is
         <span style={{backgroundColor: 'Green', color: 'White'}}>
         {pokeCharacteristics.type}
         </span>and one of their moves is
         <span style={{backgroundColor: 'White', color: 'Green'}}>
            {pokeCharacteristics.move}
         </span>

        </h2>
      </div>
    );
  }

  export default Showcase;
