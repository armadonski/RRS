import React, {useState, useEffect, useRef, createRef} from 'react';
import ReactDOM from 'react-dom';
import classes from './GameBox.css';
import Square from "./Square/Square";

const GameBox = props => {
    const [piecePosition, setPiecePosition] = useState(null);
    const [piece, setPiece] = useState(null);
    const [gameStatus, setGameStatus] = useState(true);

    const noOfSquares = 60;
    const noOfColumns = 5;

    let squareRefs = [];

    const getSquares = () => {
        let squares = [];

        for (let i = 0; i < noOfSquares; i++) {
            let ref = useRef(null);
            squareRefs = [...squareRefs, ref]
            squares = [...squares, <Square key={i} zIndex={0} squareRef={ref}/>];
        }

        return squares;
    }
    const squares = getSquares();
    const mappedSquares = squares.map((square) => {
        return square;
    });

    const moveLeft = () => {

    }

    const movePiece = (piece, initialPosition) => {
        let nextPosition = initialPosition + noOfColumns;

        if (true === gameStatus) {
            if (nextPosition >= noOfSquares) {
                setGameStatus(false);

                return null;
            }

            let domNode = ReactDOM.findDOMNode(squareRefs[nextPosition].current)
            let elementPos = domNode.getBoundingClientRect();
            let initialPiece = <Square background='red' absolute zIndex={1}
                                       top={elementPos.top}
                                       left={elementPos.left}
                                       right={elementPos.right} bottom={elementPos.bottom}/>;
            setTimeout(
                () => {
                    setPiece(initialPiece)
                    movePiece(initialPiece, nextPosition);
                },
                500);
        }
    }

    useEffect(() => {
        const startPos = Math.floor(Math.random() * 3);
        const domNode = ReactDOM.findDOMNode(squareRefs[startPos].current)
        const elementPos = domNode.getBoundingClientRect();
        const initialPiece = <Square background='red' absolute zIndex={1} top={elementPos.top} left={elementPos.left}
                                     right={elementPos.right} bottom={elementPos.bottom}/>;
        setPiecePosition(elementPos);
        setPiece(initialPiece);

        movePiece(initialPiece, startPos);
    }, [])

    return (
        <>
            {
                piece
            }
            <div className={classes.game_box__container}>
                {
                    mappedSquares
                }
            </div>
        </>
    );
};

export default GameBox;