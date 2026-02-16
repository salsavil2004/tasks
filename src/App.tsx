import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ backgroundColor: "red" }}>
                    UD CISC275 with React Hooks and TypeScript
                </div>
            </header>

            <p>Salsavil Chowdhury Hello World</p>
            <h1>Favorite Colors</h1>
            <p>This is a list of my favorite colors.</p>

            <ul>
                <li>Gray</li>
                <li>Black</li>
                <li>White</li>
            </ul>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <img
                src="https://www.clipartmax.com/middle/m2i8b1A0A0K9H7i8_spongebob-squarepants-jpg/"
                alt="SpongeBob SquarePants"
            />

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
