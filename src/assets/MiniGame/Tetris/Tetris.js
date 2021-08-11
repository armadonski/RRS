import React, {useState, useEffect, useRef} from 'react';
import Container from '../../Components/hoc/Container';
import classes from './Tetris.css';
import GameBox from "./GameBox/GameBox";

const Tetris = props => <div className={classes.Container}><GameBox/></div>;

export default Tetris;