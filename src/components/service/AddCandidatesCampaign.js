import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import axios from "axios";
import swal from "sweetalert";
import { Button } from "react-bootstrap";

export default function AddCandidatesCampaign() {
  //create file to store url
  const addCampaign = (values) => {
    axios
      .post("http://localhost:8080/api/v1/campaign/add-campaign", values)
      .then((res) => {
        if (res.status === 200) {
          console.log("Succes");
          swal({
            title: "Good job!",
            text: "Your campaign was added",
            icon: "success",
            button: { text: "OK", className: "btn_1" },
          }).then(function () {
            window.location = "/";
          });
        }
      });
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
          campaignTypeId: 1,
          startDate: "",
          expireDate: "",
          ownerUserId: window.sessionStorage.getItem("userId"),
          password: "",
          confirmedPassword: "",
          candidateDtoList: [
            {
              firstName: "",
              lastName: "",
              candidateDescription: "",
              electoralSpeech: "",
              birthdate: "",
            },
          ],
        }}
        onSubmit={addCampaign}
      >
        {({ values }) => (
          <div className="container">
            <div className="addCampaignForm">
              <div>
                <Form>
                  <div className="row">
                    <div className="col">
                      <label for="name" className="form-label">
                        Campaign name
                      </label>
                      <Field
                        className="form-control"
                        name="name"
                        placeholder="Campaign name"
                      />
                    </div>
                    <div className="col">
                      <label for="description" className="form-label">
                        Campaign description
                      </label>
                      <Field
                        className="form-control"
                        name="description"
                        placeholder="Campaign description"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label for="startDate" className="form-label">
                        Start date
                      </label>
                      <Field
                        className="form-control"
                        name="startDate"
                        type="datetime-local"
                      />
                    </div>
                    <div className="col">
                      <label for="expireDate" className="form-label">
                        Expire date
                      </label>
                      <Field
                        className="form-control"
                        name="expireDate"
                        type="datetime-local"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>

                  <div>
                    <label for="confirmedPassword" className="form-label">
                      Confirm passowrd
                    </label>
                    <Field
                      className="form-control"
                      type="password"
                      name="confirmedPassword"
                      placeholder="Confirm password"
                    />
                  </div>

                  <div>
                    <div>
                      <FieldArray name="candidateDtoList">
                        {({ push }) => (
                          <div>
                            {values.candidateDtoList.map((candidate, index) => {
                              const firstName = `candidateDtoList[${index}].firstName`;
                              const lastName = `candidateDtoList[${index}].lastName`;
                              const candidateDescription = `candidateDtoList[${index}].candidateDescription`;
                              const electoralSpeech = `candidateDtoList[${index}].electoralSpeech`;
                              const birthdate = `candidateDtoList[${index}].birthdate`;
                              return (
                                <div key={index}>
                                  <h5 className="mt-3 text-color">Candidate</h5>
                                  <div className="row">
                                    <div className="col">
                                      <label
                                        for={firstName}
                                        className="form-label"
                                      >
                                        Candidate firstname
                                      </label>
                                      <Field
                                        className="form-control"
                                        type="text"
                                        name={firstName}
                                        placeholder="Candidate first name"
                                      />
                                    </div>

                                    <div className="col">
                                      <label
                                        for={lastName}
                                        className="form-label"
                                      >
                                        Candidate lastname
                                      </label>
                                      <Field
                                        className="form-control"
                                        type="text"
                                        name={lastName}
                                        placeholder="Candidate last name"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <label
                                        for={candidateDescription}
                                        className="form-label"
                                      >
                                        Candidate description
                                      </label>
                                      <Field
                                        className="form-control"
                                        type="text"
                                        name={candidateDescription}
                                        placeholder="Candidate description"
                                      />
                                    </div>
                                    <div>
                                      <label
                                        for={electoralSpeech}
                                        className="form-label"
                                      >
                                        Candidate electoral speech
                                      </label>
                                      <Field
                                        className="form-control"
                                        type="text"
                                        name={electoralSpeech}
                                        placeholder="Electoral speech"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <label
                                        for={birthdate}
                                        className="form-label"
                                      >
                                        <>Birthdate</>
                                      </label>
                                      <Field
                                        className="form-control"
                                        type="date"
                                        name={birthdate}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <div>
                            <Button
                              className="addCandidatebtn btn_1"
                              type="button"
                              onClick={() =>
                                push({
                                  firstName: "",
                                  lastName: "",
                                  candidateDescription: "",
                                  electoralSpeech: "",
                                  birthdate: "",
                                })
                              }
                            >
                              Add another candidate
                            </Button>
                            <Button>Add candidates from file</Button>
                            </div>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div>

                  <input className="btn_2 loginbtn" type="submit"></input>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
