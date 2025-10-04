import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(event) => setEditMode(event.target.checked)}
            />
            {editMode ? (
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student"
                        checked={student}
                        onChange={(event) =>
                            setStudent(event.target.checked)
                        }
                    />
                </div>
            ) : (
                <div>
                    {name} is {student ? "a student." : "not a student."}
                </div>
            )}
        </div>
    );
}
