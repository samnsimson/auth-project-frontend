import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../images/background.jpg";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
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

export const Login = () => {
    const [formData, setFormData] = useState({});
    const [errorMessage, seterrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const login = async () => {
        try {
            const loginUrl = `http://localhost:4000/v1/auth/login`;
            const response = await axios.post(loginUrl, formData);
            const { data } = response;
            navigate(`/verify/${data.id}`);
        } catch (error) {
            seterrorMessage("Unable to login! Please try again.");
        } finally {
            setFormData({});
        }
    };

    useEffect(() => {
        if (errorMessage !== "") seterrorMessage("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Row
            style={{
                height: "100vh",
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: `center center`,
                backgroundSize: `cover`,
            }}
        >
            <Container className="h-100 d-flex align-items-center justify-content-center">
                <Col md={3}>
                    <Card>
                        <CardBody>
                            <CardTitle className="text-center">
                                <strong> LOGIN</strong>
                            </CardTitle>
                            <CardText>
                                <Form inline>
                                    <FormGroup>
                                        <Label for="username" hidden>
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            name="username"
                                            placeholder="Username"
                                            type="text"
                                            value={formData.username ?? ""}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password" hidden>
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                            value={formData.password ?? ""}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Button
                                            type="button"
                                            block
                                            color="primary"
                                            onClick={login}
                                            disabled={
                                                !formData.username ||
                                                !formData.password
                                            }
                                        >
                                            Login
                                        </Button>
                                        {errorMessage && (
                                            <p className="text-sm pt-2 text-center">
                                                <small>{errorMessage}</small>
                                            </p>
                                        )}
                                    </FormGroup>
                                </Form>
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <CardText className="text-center">
                                <small>
                                    Don't have an account?{" "}
                                    <Link to={"/register"}>Register</Link>
                                </small>
                            </CardText>
                        </CardFooter>
                    </Card>
                </Col>
            </Container>
        </Row>
    );
};
