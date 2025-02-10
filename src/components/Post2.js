// Post2.js

import { Card } from "react-bootstrap";

const Post2 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
"DSA.jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Data Structure</Card.Title>
                <Card.Text>
                Data structures provide a means to manage large amounts of data efficiently for uses such as large databases and internet indexing services. Usually, efficient data structures are key to designing efficient algorithms. Some formal design methods and programming languages emphasize data structures, rather than algorithms, as the key organizing factor in software design. Data structures can be used to organize the storage and retrieval of information stored in both main memory and secondary memory
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    )
}

export default Post2;
