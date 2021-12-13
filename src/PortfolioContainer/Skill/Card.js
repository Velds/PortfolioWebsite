import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const style = {
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    cursor: 'move',
    borderRadius: '7px'
};

const blackStyle ={ 
    border: '2px solid black',
    backgroundColor: 'white'
}

const whiteStyle = {
    border: '2px solid white',
    backgroundColor: 'black'
};
export const Card = ({ id, text, index, moveCard, color }) => {
    const ItemTypes = {
        CARD: 'card',
      }
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({

        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (<div className={`mx-2 w-3/4 text-md flex items-center justify-center border-2 ${index % 2 == 0  ? "border-white bg-black text-white" : "border-black bg-white text-black"}`} ref={ref} style={{ ...style, opacity, }} data-handler-id={handlerId}>
			{text}
		</div>);
};
