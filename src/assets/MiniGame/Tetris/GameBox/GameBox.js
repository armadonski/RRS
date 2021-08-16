import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import classes from './GameBox.css';
import Square from "./Square/Square";
import {keys} from "@material-ui/core/styles/createBreakpoints";

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

        const movePiece = () => {
            setTimeout(function () {
                if (null !== activePiece) {
                    const nextPosition = activePiecePosition + noOfColumns;

                    const staticPositions = staticPieces.map(piece => {
                        return parseInt(piece.key);
                    });

                    if (true !== staticPositions.includes(activePiecePosition, staticPositions)) {
                        setActivePiece(createPiece(nextPosition, 'red'));
                        setActivePiecePosition(nextPosition);
                    } else {
                        setStaticPieces([...staticPieces, createPiece(activePiecePosition - noOfColumns, 'orange', activePiecePosition - noOfColumns)]);
                        setActivePiecePosition(null);
                        setActivePiece(null);
                    }
                }
            }, 50);
        }

        useEffect(() => {
            if (null === activePiecePosition) {
                generateNewPiece();
            }

        }, [activePiecePosition])

        useEffect(() => {
                if (activePiecePosition >= noOfSquares - noOfColumns) {
                    const staticPositions = staticPieces.map(piece => {
                        return parseInt(piece.key);
                    });

                    if (true === staticPositions.includes(activePiecePosition, staticPositions)) {
                        const position = activePiecePosition - noOfColumns;

                        setActivePiece(null);
                        setActivePiecePosition(null);
                        setStaticPieces([...staticPieces, createPiece(position, 'orange', position)]);

                        console.log('here');
                    } else {
                        setStaticPieces([...staticPieces, createPiece(activePiecePosition, 'green', activePiecePosition)]);
                        setActivePiece(null);
                        setActivePiecePosition(null);
                    }
                } else {
                    movePiece();
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