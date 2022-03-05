import React, { useEffect, useState } from "react";
import { Row, Container, Col, Button, Table } from "reactstrap";
import { NavigationBar } from "../components/NavigationBar";
import moment from "moment";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Homepage = () => {
    const { state } = useLocation();
    const { id } = state;
    const [checkedIn, setCheckedIn] = useState(false);
    const [students, setStudents] = useState([]);

    const markAttendance = async () => {
        try {
            const currentTime = moment();
            const url = `http://localhost:4000/v1/user/checkin`;
            const result = await axios.post(url, { id: id, time: currentTime });
            if (result.data) setCheckedIn(!checkedIn);
        } catch (error) {}
    };

    const fetchData = async () => {
        try {
            const url = `http://localhost:4000/v1/user`;
            const { data } = await axios.get(url);
            if (data) setStudents(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(students);
    }, [students]);

    return (
        <div>
            <NavigationBar />
            <Row>
                <Container className="p-3 d-flex justify-content-center">
                    <Col md={8}>
                        <Button
                            color={checkedIn ? "danger" : "success"}
                            className="float-end mb-3"
                            onClick={markAttendance}
                        >
                            Mark Attendance:{" "}
                            {checkedIn ? `Check-Out` : `Check-In`}
                        </Button>
                        <div className="clearfix"></div>
                        <Table
                            className="my-5"
                            bordered
                            responsive
                            striped
                            className="bg-white"
                        >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Student Name</th>
                                    <th>Checked-In Date</th>
                                    <th>Checked-In Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students &&
                                    students.map((student, index) => (
                                        <tr key={student.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                {student.firstname}{" "}
                                                {student.lastname}
                                            </td>
                                            <td>
                                                {student.checkin
                                                    ? moment(
                                                          student.checkin
                                                      ).format("LL")
                                                    : ""}
                                            </td>
                                            <td>
                                                {student.checkin
                                                    ? moment(
                                                          student.checkin
                                                      ).format("LT")
                                                    : ""}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </Col>
                </Container>
            </Row>
        </div>
    );
};

export default Homepage;
