import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editing}
                onChange={(event) => {
                    setEditing(event.target.checked);
                }}
            />
            {editing ? (
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student"
                        checked={student}
                        onChange={(event) => {
                            setStudent(event.target.checked);
                        }}
                    />
                </div>
            ) : (
                <div>
                    {name} is {student ? "a student" : "not a student"}.
                </div>
            )}
            <Button onClick={() => { setEditing(!editing); }}>Toggle Edit</Button>
        </div>
    );
}
