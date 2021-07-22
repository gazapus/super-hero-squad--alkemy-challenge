import SearcherForm from '../components/SearcherForm';
import CardResult from '../components/CardResult';
import heroesService from '../services/heroes.service';
import React from 'react';

function SearchSection() {
    const [results, setResults] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    function searchHero(name) {
        setLoading(true);
        heroesService.search(name)
            .then(response => setResults(response))
            .catch(error => alert(error))
            .finally(() => setLoading(false));
    }

    return (
        <div className="">
            <div className="my-4 mb-3 d-flex flex-column">
                <SearcherForm handleSubmit={searchHero} loading={loading} />
                <div className="d-flex justify-content-center">
                {loading ?
                    <div className="spinner-border text-warning text-center" role="status"><span className="visually-hidden">Loading...</span></div> 
                    :
                    <small className="text-center text-warning">{results.length} resultados</small>
                }
                </div>
            </div>
            <div className="container d-flex justify-content-center flex-wrap">
                {results.map((x, num) => <CardResult name={x.name} image={x.image.url} key={num} isGood={x.biography.alignment == "good"} />)}
            </div>
        </div>
    )
}

export default SearchSection;