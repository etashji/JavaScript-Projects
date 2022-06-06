import React from "react";
import Board from "../Board/Board";
import {Props, State, ChipsPositions } from "./types";
import styles from "./App.module.css";

export default class App extends React.PureComponent<Props, State> {
    state: State = {
        chipsPositions: {},
        playerTurn: "red",
        gameStatus: "It's red's turn"
    };

    calculateGameStatus = (playerTurn: string, chipsPositions: ChipsPositions): string => {
        const {columns, rows} = this.props;

        for (let row = 0; row < rows; row++) {
            let repetitionCountStatus = {playerChip: "", count:0};

            for (let column = 0; column < columns; column++) {
                const chip = chipsPositions[`${row}:${column}`];

                if (chip && chip === repetitionCountStatus.playerChip) {
                    repetitionCountStatus.count++;
                } else {
                    repetitionCountStatus = {playerChip: chip, count: 1};
                }
                if (repetitionCountStatus.count === 4) {
                    return `Player ${repetitionCountStatus.playerChip} won!`;
                }
            }
        }

        for (let column = 0; column < columns; column++) {
            let repetitionCountStatus = {playerChip: "", count: 0};

            for (let row = 0; row < rows; row++) {
                const chip = chipsPositions[`${row}:${column}`];

                if (chip && chip === repetitionCountStatus.playerChip) {
                    repetitionCountStatus.count++;
                } else {
                    repetitionCountStatus = {playerChip: chip, count: 1};
                }
                if (repetitionCountStatus.count === 4) {
                    return `Player ${repetitionCountStatus.playerChip} won!`;
                }
            }
        }

        return `It's ${playerTurn}'s turn`;
    };

    handleTileClick = (tileId: string) => {
        const {chipsPositions, playerTurn} = this.state;

        const column = parseInt(tileId.split(":")[1]);
        let lastEmptyTileId = this.getLastEmptyTile(column);

        if (!lastEmptyTileId){
            return;
        }

        const newChipsPositions = {
            ...chipsPositions,
            [lastEmptyTileId]: playerTurn
        };

        const newPlayerTurn = playerTurn === "red" ? "yellow" : "red";

        const gameStatus = this.calculateGameStatus(newPlayerTurn, newChipsPositions);

        this.setState({chipsPositions: newChipsPositions, playerTurn: newPlayerTurn, gameStatus});
    };

    getLastEmptyTile(column: number) {
        const { rows } = this.props;
        const { chipsPositions } = this.state;

        for (let row = rows - 1; row >= 0; row--) {
            const tileId = `${row}:${column}`;

            if (!chipsPositions[tileId]) {
                return tileId;
            }
        }
    }

    renderBoard() {
        const {columns, rows} = this.props;
        const {chipsPositions} = this.state;
        return(
            <Board
            columns = {columns}
            rows = {rows}
            chipsPositions = {chipsPositions}
            onTileClick = {this.handleTileClick}
            />
        );
    }

    renderStatusMessage() {
        const {gameStatus} = this.state;
        return <div className = {styles.statusMessage}>{gameStatus}</div>
    }

    render() {
        return(
            <div className = {styles.app}>
                {this.renderBoard()}
                {this.renderStatusMessage()}
            </div>
        );
    }
}