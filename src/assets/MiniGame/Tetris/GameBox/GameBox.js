import React, {useState, useEffect, useRef} from 'react';
import classes from './GameBox.css';
import Square from "./Square/Square";

const GameBox = props => {
    const noOfSquares = 30;
    const noOfColumns = 5;

    const getSquares = () => {
        let squares = [];

        for (let i = 0; i < noOfSquares; i++) {
            if (0 === i % noOfColumns) {
                squares = [
                    ...squares,
                    <div>
                        <Square key={i}/>
                    </div>
                ];
            } else {
                squares = [
                    ...squares,
                    <Square key={i}/>
                ];
            }
        }

        return squares;
    }

    const squares = getSquares();

    console.log(squares)

    return (
        <div className={classes.game_box__container}>
            {
                squares.map((square, key) => square)
            }
        </div>
    );
};

export default GameBox;