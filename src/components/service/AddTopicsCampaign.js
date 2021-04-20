import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import axios from "axios";
import swal from "sweetalert";

export default function AddTopicsCampaign() {


  const addCampaign = (values) => {
    axios.post("localhost:8080/api/v1/campaign/add-topic-camp", values).then((res) => {
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
  }


  const addAnotherTopic = () =>
  push({
    topicName: "",
    topicDescription: "",
  })


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
                      <Field name="name" placeholder="Campaign name" />
                    </div>
                    <div className="col-sm-6 text-warning">
                      <Field
                        name="description"
                        placeholder="Campaign description"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 text-color">
                      Start date :
                      <Field name="startDate" type="datetime-local" />
                    </div>
                    <div className="col-sm-6 text-color">
                      Expire date :
                      <Field name="expireDate" type="datetime-local" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <Field name="password" placeholder="Password" />
                    </div>
                    <div className="col-sm-6 text-warning">
                      <Field
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
                                      <Field
                                        type="text"
                                        name={topicName}
                                        placeholder="Topic name"
                                      />
                                    </div>
                                    <div className="col-sm-6">
                                      <Field
                                        type="text"
                                        name={topicDescription}
                                        placeholder="Topic description"
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <button
                              className="btn_1"
                              type="button"
                              onClick={addAnotherTopic}
                            >
                              Add Another Topic
                            </button>
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
