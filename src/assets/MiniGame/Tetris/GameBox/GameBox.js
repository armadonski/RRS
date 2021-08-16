import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import classes from './GameBox.css';
import Square from "./Square/Square";

const GameBox = props => {
        const [activePiece, setActivePiece] = useState(null);
        const [activePiecePosition, setActivePiecePosition] = useState(null);
        const [staticPieces, setStaticPieces] = useState([]);
        const [gameStatus, setGameStatus] = useState(true);
        const [rows, setRows] = useState([]);

        const noOfSquares = 100;
        const noOfColumns = 10;
        const templateColumns = () => {
            let noColumns = '';
            for (let i = 0; i < noOfColumns; i++) {
                noColumns += 'auto ';
            }

            return noColumns;
        }

        let squareRefs = [];

        const getSquares = () => {
            let squares = [];

            for (let i = 0; i < noOfSquares; i++) {
                let ref = useRef(null);

                squareRefs = [...squareRefs, ref]
                squares = [...squares, <Square number={i} key={i} zIndex={0} squareRef={ref}/>];
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
            const staticPositions = staticPieces.map(piece => {
                return parseInt(piece.key);
            });

            for (let i = 0; i < noOfColumns; i++) {
                if (true === staticPositions.includes(i)) {
                    setGameStatus(false);
                }
            }
            setTimeout(function () {
                if (null !== activePiece) {
                    const nextPosition = activePiecePosition + noOfColumns;

                    if (true !== staticPositions.includes(activePiecePosition)) {
                        setActivePiece(createPiece(nextPosition, 'red'));
                        setActivePiecePosition(nextPosition);
                    } else {
                        setStaticPieces([...staticPieces, createPiece(activePiecePosition - noOfColumns, 'orange', activePiecePosition - noOfColumns)]);
                        setActivePiecePosition(null);
                        setActivePiece(null);
                    }
                }
            }, 100);
        }

        useEffect(() => {
            if (null === activePiecePosition && true === gameStatus) {
                generateNewPiece();
            }

        }, [activePiecePosition])

        useEffect(() => {
                if (activePiecePosition >= noOfSquares - noOfColumns && true === gameStatus) {
                    const staticPositions = staticPieces.map(piece => {
                        return parseInt(piece.key);
                    });

                    if (true === staticPositions.includes(activePiecePosition, staticPositions)) {
                        const position = activePiecePosition - noOfColumns;

                        setActivePiece(null);
                        setActivePiecePosition(null);
                        setStaticPieces([...staticPieces, createPiece(position, 'orange', position)]);
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

        const moveLeft = () => {
            const elementPos = getElementPosition(activePiecePosition - 1);
            setActivePiece(<Square background='red' absolute zIndex={1} top={elementPos.top}
                                   left={elementPos.left}
                                   right={elementPos.right} bottom={elementPos.bottom}/>)
            setActivePiecePosition(activePiecePosition - 1);
        };
        const moveRight = () => {
            setActivePiece(createPiece(activePiecePosition + 1));
        };

        useEffect(() => {
            if (false === gameStatus) {
                console.log('Game Over!')
                setActivePiece(null);
                setActivePiecePosition(null);
            }
        }, [gameStatus])

        useEffect(() => {
                console.log(activePiecePosition);
                document.addEventListener('keydown', e => {
                    if (null !== activePiecePosition) {
                        switch (e.key) {
                            case 'a': {
                                moveLeft();
                                break;
                            }
                            case 'd': {
                                moveRight();
                                break;
                            }
                        }
                    }
                })
            },
            [activePiecePosition])

        const getRows = () => {
            const squareKeys = squares.map(piece => {
                return piece.key;
            })

            return squareKeys.chunk(noOfColumns);
        }

        return (
            <div>
                <div className={classes.game_box__container} style={{
                    gridTemplateColumns: templateColumns()
                }}>
                    {staticPieces.map(piece => piece)}
                    {activePiece}
                    {mappedSquares}
                </div>
            </div>
        );
    }
;

export default GameBox;