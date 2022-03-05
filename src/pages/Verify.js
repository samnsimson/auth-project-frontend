import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from "reactstrap";

export const Verify = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const authenticate = async () => {
        try {
            const url = "http://localhost:4000/v1/auth/verify";
            const { data: verified } = await axios.post(url, {
                secret: user.base32,
                token: formData.code,
            });
            if (verified) navigate("/home", { state: { id: id } });
        } catch (error) {}
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:4000/v1/user/${id}`;
                const { data } = await axios.get(url);
                console.log("USER DATA", data);
                setUser(data);
            } catch (error) {}
        };
        fetchData();
    }, [id]);

    return (
        <Row style={{ height: "100vh" }}>
            <Container className="h-100 d-flex align-items-center justify-content-center">
                <Col md={3}>
                    <Card>
                        <CardBody>
                            <CardTitle className="text-center">
                                <strong>2F Authentication</strong>
                            </CardTitle>
                            <CardSubtitle className="text-center">
                                <p>Enter authentication code to verify</p>
                            </CardSubtitle>
                            <CardText>
                                <Form inline>
                                    <FormGroup>
                                        <Label for="code" hidden>
                                            Authentication Code
                                        </Label>
                                        <Input
                                            id="code"
                                            name="code"
                                            placeholder="Authentication Code"
                                            type="text"
                                            value={formData.code ?? ""}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button
                                            type="button"
                                            block
                                            color="primary"
                                            onClick={authenticate}
                                        >
                                            Verify
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Container>
        </Row>
    );
};
