// Post4.js

import { Card } from "react-bootstrap";

const Post4 = () => {
    return (
        <Card>
            <Card.Img
                variant="top"
                src=
"th (1).jpg"
                width={20}
                height={250}
            />
            <Card.Body>
                <Card.Title>Computer Network</Card.Title>
                <Card.Text>
                A computer network is a set of computers sharing resources located on or provided by network nodes. Computers use common communication protocols over digital interconnections to communicate with each other. These interconnections are made up of telecommunications network technologies based on physically wired, optical, and wireless radio-frequency methods that may be arranged in a variety of network topologies.

The nodes of a computer network can include personal computers, servers, networking hardware, or other specialized or general-purpose hosts. They are identified by network addresses and may have hostnames. Hostnames serve as memorable labels for the nodes and are rarely changed after initial assignment. Network addresses serve for locating and identifying the nodes by communication protocols such as the Internet Protocol.
                </Card.Text>
                <a href="#" className="btn btn-primary">Read More</a>
            </Card.Body>
        </Card>
    )
}

export default Post4;
