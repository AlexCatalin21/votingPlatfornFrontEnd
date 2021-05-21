import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import axios from "axios";
import swal from "sweetalert";
import { Button } from "react-bootstrap";

export default function AddTopicsCampaign() {
  //create file to store url

  const addCampaign = (values) => {
    axios
      .post("http://localhost:8080/api/v1/campaign/add-campaign", values)
      .then((res) => {
        if (res.status === 200) {
          console.log("Succes");
          console.log(values);
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
          campaignTypeId: 2,
          startDate: "",
          expireDate: "",
          ownerUserId: window.sessionStorage.getItem("userId"),
          password: "",
          confirmedPassword: "",
          topicDtoList: [
            {
              topicName: "",
              topicDescription: "",
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
                        <strong>Confirm password</strong>
                      </div>
                      <Field
                        className="inputField"
                        type="password"
                        name="confirmedPassword"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <FieldArray name="topicDtoList">
                        {({ push }) => (
                          <div>
                            {values.topicDtoList.map((topic, index) => {
                              const topicName = `topicDtoList[${index}].topicName`;
                              const topicDescription = `topicDtoList[${index}].topicDescription`;
                              return (
                                <div key={index}>
                                  <h5 className="mt-3 text-color">Topic</h5>
                                  <div>
                                    <div>
                                      <div>
                                        <strong>Topic name</strong>
                                      </div>
                                      <Field
                                        className="inputField"
                                        type="text"
                                        name={topicName}
                                        placeholder="Topic name"
                                      />
                                    </div>
                                    <div>
                                      <div>
                                        <strong>Topic description</strong>
                                      </div>
                                      <Field
                                        className="inputField"
                                        type="text"
                                        name={topicDescription}
                                        placeholder="Topic description"
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <Button
                              className="btn_2"
                              type="button"
                              onClick={() =>
                                push({
                                  topicName: "",
                                  topicDescription: "",
                                })
                              }
                            >
                              Add Another Topic
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
