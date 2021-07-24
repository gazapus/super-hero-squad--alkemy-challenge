import FormSearch from './FormSearch';
import CardResult from './CardResult';
import launchAlert from './Alert';
import heroesService from '../services/heroes.service';
import React, { useState } from 'react';
import { useAppContext } from '../Provider';

function SearchSection() {
    const [results, setResults] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [searched, setSearched] = useState(false);
    const { team, setTeam } = useAppContext();

    function searchHero(name) {
        setSearched(true);
        setLoading(true);
        heroesService.search(name)
            .then(response => setResults(response))
            .catch(error => alert(error))
            .finally(() => setLoading(false));
    }

    function addCharacter(character) {
        if (team.find(x => x === character)) {
            return launchAlert("This character is already on the team", "danger")
        }
        if (team.length === 6) {
            return launchAlert("The team is already complete", "danger");
        }
        let orientationCharacter = character.biography.alignment;
        if (team.filter(x => x.biography.alignment === orientationCharacter).length === 3) {
            return launchAlert(`The ${orientationCharacter} members are already complete`, "danger");
        }
        let currentTeam = [...team];
        currentTeam.unshift(character);
        setTeam(currentTeam);
    }

    return (
        <div className="">
            <div className="my-1 mb-1 d-flex flex-column">
                <FormSearch handleSubmit={searchHero} loading={loading} />
                <div className="d-flex justify-content-center">
                    {loading ?
                        <div className="spinner-border text-warning text-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        <small className="text-center text-warning">{searched ? results.length + " results" : ""}</small>
                    }
                </div>
            </div>
            <div className="px-2">
                <div className="d-flex w-100 overflow-auto">
                    {results.map((x, num) =>
                        <CardResult
                            name={x.name}
                            image={x.image.url}
                            key={num}
                            isGood={x.biography.alignment === "good"}
                            handleClick={() => addCharacter(x)} />
                    )}
                </div>
            </div>

        </div>
    )
}

export default SearchSection;