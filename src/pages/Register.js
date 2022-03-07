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

export const Register = () => {
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
            const loginUrl = `http://localhost:4000/v1/auth/register`;
            const response = await axios.post(loginUrl, formData);
            const { data } = response;
            navigate(`/2fa-setup`, { state: { ...data } });
        } catch (error) {
            console.log(error);
            seterrorMessage("Unable to login! Please try again.");
        } finally {
            setFormData({});
        }
    };

    useEffect(() => {
        if (errorMessage !== "") seterrorMessage("");
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
                                <strong>REGISTER</strong>
                            </CardTitle>
                            <CardText>
                                <Form inline>
                                    <FormGroup>
                                        <Label for="firstname" hidden>
                                            First Name
                                        </Label>
                                        <Input
                                            id="firstname"
                                            name="firstname"
                                            placeholder="First Name"
                                            type="text"
                                            value={formData.firstname ?? ""}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="lastname" hidden>
                                            Last Name
                                        </Label>
                                        <Input
                                            id="lastname"
                                            name="lastname"
                                            placeholder="Last Name"
                                            type="text"
                                            value={formData.lastname ?? ""}
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </FormGroup>
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
                                                !formData.firstname ||
                                                !formData.lastname ||
                                                !formData.username ||
                                                !formData.password
                                            }
                                        >
                                            Register
                                        </Button>
                                        {errorMessage && (
                                            <div className="text-sm pt-2 text-center">
                                                <small>{errorMessage}</small>
                                            </div>
                                        )}
                                    </FormGroup>
                                </Form>
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <CardText className="text-center">
                                <small>
                                    Have an account already?{" "}
                                    <Link to={"/"}>Login</Link>
                                </small>
                            </CardText>
                        </CardFooter>
                    </Card>
                </Col>
            </Container>
        </Row>
    );
};
