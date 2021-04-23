import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import axios from "axios";
import swal from "sweetalert";
import { Button } from "react-bootstrap";

export default function AddTopicsCampaign() {

  //create file to store url


  const addCampaign = (values) => {
    axios.post("http://localhost:8080/api/v1/campaign/add-campaign", values).then((res) => {
      if (res.status === 200) {
        console.log("Succes");
        console.log(values)
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
  }
  


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
                      <label>Start date:</label>
                      <Field className="inputField" name="startDate" type="datetime-local" />
                    </div>
                    <div className="col-sm-6 text-color">
                      <label>Expire date:</label>
                      <Field className="inputField" name="expireDate" type="datetime-local" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <label>Password:</label>
                      <Field name="password" placeholder="Password" />
                    </div>
                    <div className="col-sm-6">
                      <label>Confirm password</label>
                      <Field
                      className="inputField"
                        name="confirmedPassword"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm">
                      <FieldArray name="topicDtoList">
                        {({ push }) => (
                          <div>
                            {values.topicDtoList.map((topic, index) => {
                              const topicName = `topicDtoList[${index}].topicName`;
                              const topicDescription = `topicDtoList[${index}].topicDescription`;
                              return (
                                <div key={index}>
                                  <h5 className="mt-3 text-color">Topic</h5>
                                  <div className="form-group row">
                                    <div className="col-sm-6">
                                      <label>Topic name:</label>
                                      <Field
                                      className="inputField"
                                        type="text"
                                        name={topicName}
                                        placeholder="Topic name"
                                      />
                                    </div>
                                    <div className="col-sm-6">
                                      <label>Topic description:</label>
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
                              className="btn_1"
                              type="button"
                              onClick={
                                () => push({
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
