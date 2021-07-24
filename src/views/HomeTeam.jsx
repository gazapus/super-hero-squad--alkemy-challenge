import React from 'react';
import Provider, { useAppContext } from '../Provider';
import BackgroundUser from '../components/BackgroundUser';
import CardHero from '../components/CardHero';
import SectionStat from '../components/SectionStat';
import SectionSearch from '../components/SectionSearch';
import TextBanner from "../components/TextBanner";
import TextMain from '../components/TextMain';
import useCheckSession from "../hooks/useCheckSession";
import Modal from '../components/Modal';
import CharacterDetail from '../components/CharacterDetail';

function HomeTeam() {
    const { team, setTeam } = useAppContext();
    const [ character, setCharacter ] = React.useState(null);

    useCheckSession();

    function remove(indexHero) {
        var filtered = team.filter((hero, index, arr) => index !== indexHero);
        setTeam(filtered);
    }

    return (
        <BackgroundUser>
            <div className="m-3">
                <TextBanner size="sm">PANEL</TextBanner>
            </div>
            <div className="my-1 py-3 bg-semidark" id="search">
                <SectionSearch />
            </div>
            <div className="h-100 w-100 d-flex flex-column flex-md-row p-2  bg-semidark">
                <section className="col-12 col-md-4">
                    <SectionStat team={team} />
                </section>
                <section className="col-12 col-md-8 d-flex flex-wrap p-0 p-sm-2">
                    <div className="w-100 d-flex justify-content-between">
                        <span></span>
                        <TextMain>MY TEAM</TextMain>
                        <span className="fs-4 text-warning">
                            {team.length === 6 ? 'Full' : team.length + "/6"}
                        </span>
                    </div>
                    {team.map((x, num) =>
                        <CardHero
                            name={x.name}
                            powerstats={x.powerstats}
                            image={x.image.url}
                            key={num}
                            onRemove={() => remove(num)}
                            isGood={x.biography.alignment === "good"}
                            handleClick={() => setCharacter(x)}
                        />
                    )}
                    {team.length === 0 ?
                        <h3 className="fs-2 text-warning text-center w-100 py-3" style={{ fontFamily: 'Montserrat' }}>
                            Empty team<br />Add some character to your team
                        </h3> : ''
                    }
                </section>
            </div>
            <Modal
                open={character}
                onClose={() => setCharacter(null)}
            >
                <CharacterDetail character={character} onClose={() => setCharacter(null)}/>
            </Modal>
        </BackgroundUser>
    )
}

export default () => <Provider><HomeTeam /></Provider>