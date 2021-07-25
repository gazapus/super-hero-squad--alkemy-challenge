import StatusBar from '../components/StatusBar';
import InfoBox from '../components/InfoBox';
import TextMain from '../components/TextMain';
import React from 'react';
import { useAppContext } from '../Provider';

/** 
 * Section Team stats of home page
 */
function StatsSection() {
    const [powerstats, setPowerstats] = React.useState([]);
    const { team, setTeam } = useAppContext();
    const [averageHeight, setAverageHeight] = React.useState(0);
    const [averageWeight, setAverageWeight] = React.useState(0);

    React.useEffect(() => {
        function updatePowerstats() {
            let powerstats = [
                { name: "intelligence", value: 0 },
                { name: "strength", value: 0 },
                { name: "speed", value: 0 },
                { name: "durability", value: 0 },
                { name: "power", value: 0 },
                { name: "combat", value: 0 }
            ];
            for (let hero of team) {
                for (let powerstat of powerstats) {
                    if(!isNaN(hero.powerstats[powerstat.name]))
                        powerstat.value += parseInt(hero.powerstats[powerstat.name]);
                }
            }
            powerstats.sort((a, b) => b.value - a.value)
            setPowerstats(powerstats);
        }

        function updateAverageHeight() {
            let totalHeight = 0;
            let totalHeroes = 0;
            for (let hero of team) {
                let heroHeight = parseInt(hero.appearance.height[1].split(" ")[0]);
                if(!isNaN(heroHeight) && heroHeight > 0) {
                    totalHeight += heroHeight;
                    totalHeroes++;
                }
            }
            let average = totalHeight / (totalHeroes > 0 ? totalHeroes : 1);
            setAverageHeight(average);
        }

        function updateAverageWeight() {
            let totalWeight = 0;
            let totalHeroes = 0;
            for (let hero of team) {
                let heroWeight = parseInt(hero.appearance.weight[1].split(" ")[0]);
                if(!isNaN(heroWeight) && heroWeight > 0) {
                    totalWeight += heroWeight;
                    totalHeroes++;
                }
            }
            let average = totalWeight / (totalHeroes > 0 ? totalHeroes : 1);
            setAverageWeight(average);
        }

        updatePowerstats();
        updateAverageHeight();
        updateAverageWeight();
    }, [team])

    return (
        <div className="w-100">
            <div className="w-100 mb-5">
                <TextMain>POWERSTATS</TextMain>
                {powerstats.map((x, num) =>
                    <div className="w-100 my-3" key={x.name} >
                        <StatusBar name={`${x.name} ${num === 0 ? '(Main Skill)' : ''}`} state={x.value} max={600}  />
                    </div>
                )}
            </div>
            <div className="w-100 d-flex flex-column flex-lg-row p-2">
                <InfoBox name="Average Weight" state={averageWeight} />
                <div className="m-1"></div>
                <InfoBox name="Average Height" state={averageHeight} />
            </div>
        </div>
    )
}

export default StatsSection;