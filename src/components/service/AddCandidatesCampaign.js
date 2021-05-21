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
                  <div>
                    <div>
                      <strong>Campaign name</strong>
                    </div>
                    <Field
                      className="inputField"
                      name="name"
                      placeholder="Campaign name"
                    />
                  </div>
                  <div>
                    <div>
                      <strong>Campaign description</strong>
                    </div>
                    <Field
                      className="inputField"
                      name="description"
                      placeholder="Campaign description"
                    />
                  </div>
                  <div>
                    <div>
                      <div>
                        <strong>Start date</strong>
                      </div>
                      <Field
                        className="inputField"
                        name="startDate"
                        type="datetime-local"
                      />
                    </div>
                    <div>
                      <div>
                        <strong>Expire date</strong>
                      </div>
                      <Field
                        className="inputField"
                        name="expireDate"
                        type="datetime-local"
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <strong>Password</strong>
                    </div>
                    <Field
                      className="inputField"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>

                  <div>
                    <div>
                      <strong>Confirm passowrd</strong>
                    </div>
                    <Field
                      className="inputField"
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
                                  <div>
                                    <div>
                                      <div>
                                        <strong>Candidate firstname</strong>
                                      </div>
                                      <Field
                                        className="inputField"
                                        type="text"
                                        name={firstName}
                                        placeholder="Candidate first name"
                                      />
                                    </div>

                                    <div>
                                      <div>
                                        <strong>Candidate lastname</strong>
                                      </div>
                                      <Field
                                        className="inputField"
                                        type="text"
                                        name={lastName}
                                        placeholder="Candidate last name"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <div>
                                        <strong>Candidate description</strong>
                                      </div>
                                      <Field
                                        className="inputField"
                                        type="text"
                                        name={candidateDescription}
                                        placeholder="Candidate description"
                                      />
                                    </div>
                                    <div>
                                      <div>
                                        <strong>
                                          Candidate electoral speech
                                        </strong>
                                      </div>
                                      <Field
                                        className="inputField"
                                        type="text"
                                        name={electoralSpeech}
                                        placeholder="Electoral speech"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div>
                                      <div>
                                        <strong>Birthdate</strong>
                                      </div>
                                      <Field
                                        className="inputField"
                                        type="date"
                                        name={birthdate}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
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
                              Add Another Candidate
                            </Button>
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
