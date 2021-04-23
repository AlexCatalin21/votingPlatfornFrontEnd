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
          ownerUserId: "",
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
            <div className="row">
              <div className="col-md-10 mx-auto">
                <Form className="addCampaignForm">
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <label>Campaign name:</label>
                      <Field className="inputField" name="name" placeholder="Campaign name" />
                    </div>
                    <div className="col-sm-6">
                      <label>Campaign description:</label>
                      <Field
                      className="inputField"
                        name="description"
                        placeholder="Campaign description"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 text-color">
                      Start date :
                      <Field className="inputField" name="startDate" type="datetime-local" />
                    </div>
                    <div className="col-sm-6 text-color">
                      Expire date :
                      <Field className="inputField" name="expireDate" type="datetime-local" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <label>Password:</label>
                      <Field
                      className="inputField"
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>

                    <div className="col-sm-6">
                      <label>Confirm password:</label>
                      <Field
                      className="inputField"
                        type="password"
                        name="confirmedPassword"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm">
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
                                  <div className="form-group row">
                                    <div className="col-sm-6">
                                      <label>Candidate first name: </label>
                                      <Field
                                      className="inputField"
                                        type="text"
                                        name={firstName}
                                        placeholder="Candidate first name"
                                      />
                                    </div>

                                    <div className="col-sm-6">
                                      <label>Candidate last name: </label>
                                      <Field
                                      className="inputField"
                                        type="text"
                                        name={lastName}
                                        placeholder="Candidate last name"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <div className="col-sm-6">
                                      <label>Candidate description:</label>
                                      <Field
                                      className="inputField"
                                        type="text"
                                        name={candidateDescription}
                                        placeholder="Candidate description"
                                      />
                                    </div>
                                    <div className="col-sm-6">
                                      <label>Candidate electoral speech:</label>
                                      <Field
                                      className="inputField"
                                        type="text"
                                        name={electoralSpeech}
                                        placeholder="Electoral speech"
                                      />
                                    </div>
                                  </div>
                                  <div className = "form-group row">
                                    <div className = "col-sm-6">
                                    Birthdate:
                                    <Field
                                    className="inputField" type="date" name={birthdate} />
                                  </div>
                                  </div>
                                </div>
                              );
                            })}
                            <Button
                              className="btn_1"
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
                  <input className="btn_1" type="submit"></input>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
