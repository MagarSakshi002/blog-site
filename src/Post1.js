// Post1.js

import { Card } from "react-bootstrap";

const Post1 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
                "js-meta.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>JAVASCRIPT</Card.Title>
                <Card.Text>
                JavaScript supports much of the structured programming syntax from C (e.g., if statements, while loops, switch statements, do while loops, etc.). One partial exception is scoping: originally JavaScript only had function scoping with var; block scoping was added in ECMAScript 2015 with the keywords let and const. Like C, JavaScript makes a distinction between expressions and statements. One syntactic difference from C is automatic semicolon insertion, which allow semicolons (which terminate statements) to be omitted.[58]
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    );
};

export default Post1;
