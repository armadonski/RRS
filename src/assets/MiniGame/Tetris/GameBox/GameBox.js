import React, {useState, useEffect, useRef, createRef} from 'react';
import ReactDOM from 'react-dom';
import classes from './GameBox.css';
import Square from "./Square/Square";

const GameBox = props => {
    const [activePiece, setActivePiece] = useState(null);
    const [activePiecePosition, setActivePiecePosition] = useState(true);
    const [staticPieces, setStaticPieces] = useState([]);
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

    const movePiece = (piece, initialPosition) => {
        let nextPosition = initialPosition + noOfColumns;

        if (true === gameStatus) {
            if (nextPosition >= noOfSquares) {
                nextPosition = Math.floor(Math.random() * 4);
            }
            setActivePiecePosition(nextPosition);
            let domNode = ReactDOM.findDOMNode(squareRefs[nextPosition].current)
            let elementPos = domNode.getBoundingClientRect();
            let activePiece = <Square key={initialPosition} background='red' absolute zIndex={1}
                                      top={elementPos.top}
                                      left={elementPos.left}
                                      right={elementPos.right} bottom={elementPos.bottom}/>;

            setTimeout(
                () => {
                    setActivePiece(activePiece);
                    movePiece(activePiece, nextPosition);
                },
                100);
        }
    }

    const keyPressHandler = e => {
        switch (e.key) {
            case 'a' : {
                break;
            }
            case 'd': {
                break;
            }
            default: {
                break;
            }
        }
    };

    useEffect(() => {
        const startPos = Math.floor(Math.random() * 4);
        const domNode = ReactDOM.findDOMNode(squareRefs[startPos].current)
        const elementPos = domNode.getBoundingClientRect();
        const initialPiece = <Square background='red' absolute zIndex={1} top={elementPos.top} left={elementPos.left}
                                     right={elementPos.right} bottom={elementPos.bottom}/>;
        setActivePiece(initialPiece);

        document.addEventListener('keypress', e => {
            keyPressHandler(e);
        })

        movePiece(initialPiece, startPos);

    }, [])

    useEffect(() => {
        if (activePiecePosition >= noOfSquares - noOfColumns) {
            if (0 === staticPieces.length) {
                setStaticPieces([...staticPieces, activePiece]);
            }
            staticPieces.map(piece => {
                if (activePiece.key === piece.key) {
                    let domNode = ReactDOM.findDOMNode(squareRefs[piece.key].current)
                    let elementPos = domNode.getBoundingClientRect();

                    let pieceStack = <Square background='green' absolute zIndex={1}
                                             top={elementPos.top}
                                             left={elementPos.left}
                                             right={elementPos.right} bottom={elementPos.bottom}
                    />;

                    setStaticPieces([...staticPieces, pieceStack]);
                } else {
                    setStaticPieces([...staticPieces, activePiece]);
                }
            })
            return null;
        }
    }, [activePiece])

    return (
        <div>
            <div className={classes.game_box__container}>
                {staticPieces.map(piece => piece)}
                {activePiece}{mappedSquares}
            </div>
        </div>
    );
};

export default GameBox;