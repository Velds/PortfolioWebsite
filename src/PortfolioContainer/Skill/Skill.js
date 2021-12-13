import React, {useState, useCallback} from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Card } from './Card';
import update from 'immutability-helper';
import skillList from './skillList';
import './Skill.css'

import decoration from '../../Assets/chip.svg'
const style = {
    width: "400px",
    display: "flex",
    columnGap: "2em"

};
export default function Skill() {
    const [cards, setCards] = useState(skillList); 
   
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(update(cards, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }));
    }, [cards]);

    const renderCard = (card, index) => {
        return (<Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard}/>);
    };


    return (<>
    <div className="skill-main-container">
        <div className="flex flex-col w-1/2">
            <div className="Resume-title text-left pl-24 flex flex-col mb-10">
                <span className="primary-text text-left font-bold text-3xl">Skill</span>
                <span className="resume-paragraph">Language that I use and am confident in</span>
                <span className="text-xs">You can rearrange the skill by drag and drop :)</span>
            </div>
            <div className="pl-24">
                <DndProvider backend={HTML5Backend}>
                        <div className="grid grid-cols-3">{cards.map((card, i) => renderCard(card, i))}</div>
                </DndProvider>
            </div>
        </div>
        <div className="flex w-1/2 justify-center items-center py-24">
            <img className="skill-decor" src={decoration} alt={"decoration-1"} />
        </div>
    </div>
			</>);

}


