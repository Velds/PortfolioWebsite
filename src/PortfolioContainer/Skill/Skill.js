import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import skillItem from './skillItem/skillItem'
import skillSquare from './skillSquare/skillSquare'

export default function Skill() {
    const ItemTypes = {
        card: 'card'
      }

    // return <DndProvider backend={HTML5Backend}>...</DndProvider>
    return (
        <div className="mt-24">
            Hey?
            <skillSquare>
                <skillItem />
            </skillSquare>
        </div>
    )
}
