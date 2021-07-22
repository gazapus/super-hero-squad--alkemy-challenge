import StatusBar from '../components/StatusBar';
import InfoBox from '../components/InfoBox';
import React from 'react';

function StatsSection({ team }) {
    const [powerstats, setPowerstats] = React.useState([]);
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
                    powerstat.value += parseInt(hero.powerstats[powerstat.name]);
                }
            }
            powerstats.sort((a, b) => b.value - a.value)
            setPowerstats(powerstats);
        }

        function updateAverageHieght() {
            let totalHeight = 0;
            for (let hero of team) {
                totalHeight += parseInt(hero.appearance.height[1].split(" ")[0]);
            }
            let average = totalHeight / (team.length > 0 ? team.length : 1);
            setAverageHeight(average);
        }

        function updateAverageWeight() {
            let totalWeight = 0;
            for (let hero of team) {
                totalWeight += parseInt(hero.appearance.weight[1].split(" ")[0]);
            }
            let average = totalWeight / (team.length > 0 ? team.length : 1);
            setAverageWeight(average);
        }

        updatePowerstats();
        updateAverageHieght();
        updateAverageWeight();
    }, [team])

    return (
        <div className="w-100">
            <div className="w-100 mb-5">
                <h5 className="mainText text-center my-5">POWERSTATS</h5>
                {powerstats.map((x, num) =>
                    <div className="w-100 my-3">
                        <StatusBar name={`${x.name} ${num == 0 ? '(Main Skill)' : ''}`} state={x.value} max={600} key={x.num} />
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