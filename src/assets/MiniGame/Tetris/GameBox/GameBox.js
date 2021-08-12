import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import classes from './GameBox.css';
import Square from "./Square/Square";

const GameBox = props => {
        const [activePiece, setActivePiece] = useState(null);
        const [activePiecePosition, setActivePiecePosition] = useState(null);
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

        const generatePiece = (piece) => {
            setActivePiece(piece)
        }

        const generateNewPiece = () => {
            const newStartPosition = Math.floor(Math.random() * noOfColumns);
            const initialPiece = createPiece(newStartPosition, 'red');
            setActivePiecePosition(newStartPosition);

            generatePiece(initialPiece);
        }

        const getElementPosition = position => {
            const domNode = ReactDOM.findDOMNode(squareRefs[position].current)

            return domNode.getBoundingClientRect();
        }

        const createPiece = (position, background = 'red', key) => {
            const elementPos = getElementPosition(position);

            const elementWithKey = <Square background={background} absolute zIndex={1} top={elementPos.top}
                                           left={elementPos.left}
                                           right={elementPos.right} bottom={elementPos.bottom} key={key}/>;
            const elementWithoutKey = <Square background={background} absolute zIndex={1} top={elementPos.top}
                                              left={elementPos.left}
                                              right={elementPos.right} bottom={elementPos.bottom} key={key}/>;

            return null === key ? elementWithoutKey : elementWithKey;
        }

        const movePiece = (position) => {
            if (position < noOfSquares - noOfColumns) {
                setTimeout(function () {

                    position += noOfColumns;
                    const newActivePiece = createPiece(position, 'blue');

                    if (staticPieces.length !== 0) {
                        staticPieces.map(piece => {
                            if (piece.key === position) {
                                const domNode = ReactDOM.findDOMNode(squareRefs[piece.key - noOfColumns].current)
                                const position = domNode.getBoundingClientRect();

                                addStaticPieces(React.cloneElement(piece), {
                                    top: position.top,
                                    bottom: position.bottom,
                                    left: position.left,
                                    right: position.right
                                });
                                console.log(staticPieces);
                                return null;
                            } else {
                                setActivePiecePosition(position);
                                setActivePiece(newActivePiece);
                                // addStaticPieces(createPiece(position, 'green', position));
                                // generateNewPiece();
                            }
                        })
                    } else {
                        setActivePiecePosition(position);
                        setActivePiece(newActivePiece);
                    }


                }, 100)
            } else {
                addStaticPieces(createPiece(position, 'green', position));
                generateNewPiece();
            }
        }

        const addStaticPieces = piece => {
            setStaticPieces([...staticPieces, piece]);
        }

        useEffect(() => {
            if (null === activePiecePosition) {
                generateNewPiece();
            }

        }, [])

        useEffect(() => {
                if (null !== activePiecePosition && activePiecePosition < activePiecePosition + noOfColumns) {
                    movePiece(activePiecePosition)
                }
            }, [activePiece]
        );

        return (
            <div>
                <div className={classes.game_box__container}>
                    {staticPieces.map(piece => piece)}
                    {activePiece}
                    {mappedSquares}
                </div>
            </div>
        );
    }
;

export default GameBox;