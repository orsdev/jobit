import React, { Component } from 'react'

class Signup extends Component {

  state = {
    showPersonalInfoField: true,
    showSecurityInfoField: false,
    showJobInfoField: false,
    formData: {}
  }

  onChangeHandler = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    })
  }

  nextFormField = (e) => {
    e.preventDefault();

    if (e.target.dataset.id === "personal-info" &&
      e.target.dataset.type === "next") {
      const { email,
        firstname,
        lastname,
        gender
      } = this.state.formData;

      if (email && firstname &&
        lastname && gender) {
        this.setState({
          showPersonalInfoField: false,
          showSecurityInfoField: false,
          showJobInfoField: true,
        })
      }
    }

    //Go back to personal information field
    if (e.target.dataset.id === "job-info" &&
      e.target.dataset.type === "back") {
      this.setState({
        showPersonalInfoField: true,
        showSecurityInfoField: false,
        showJobInfoField: false
      })
    }

    // Go to security information field
    if (e.target.dataset.id === "job-info" &&
      e.target.dataset.type === "next") {

      const {
        jobtitle,
        company
      } = this.state.formData;

      if (jobtitle && company) {
        this.setState({
          showPersonalInfoField: false,
          showSecurityInfoField: true,
          showJobInfoField: false
        })
      }
    }

    // Go back to job information field
    if (e.target.dataset.id === "security-info" &&
      e.target.dataset.type === "back") {
      this.setState({
        showPersonalInfoField: false,
        showSecurityInfoField: false,
        showJobInfoField: true
      })
    }
  }

  submitForm = (e) => {
    e.preventDefault();

    const { email,
      firstname,
      lastname,
      gender,
      jobtitle,
      company,
      password,
      cpassword
    } = this.state.formData;

    if (email && firstname && lastname
      && gender && jobtitle
      && company && password && cpassword) {

      const element = document.querySelector('#error-message');

      if ((password.length && cpassword.length)
        &&
        (password === cpassword)) {
        element.style.display = "none";
        this.resetForm();
        alert("Form submitted successfull.\n NB- This is just a dummy form.");
      } else {
        element.style.display = "block";
      }
    }

  };

  resetForm = () => {
    this.setState({
      formData: {}
    })
  }

  render() {
    return (
      <div className="signup">
        <div className="signup__header">
          <h3>Create a Jobit Account</h3>
          <div
            onClick={this.props.closeSignupForm}
            className="signup-close"
            id="signup-close">X</div>
        </div>
        <form onSubmit={this.submitForm} id="signup">
          {this.state.showPersonalInfoField ?
            <div id="personal-info" className="personal-info">
              <div className="form-group">
                <h4>Personal Information</h4>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.formData.email
                    ? this.state.formData.email : ""}
                  required
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={this.state.formData.firstname
                    ? this.state.formData.firstname : ""}
                  required
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={this.state.formData.lastname
                    ? this.state.formData.lastname : ""}
                  required
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  value={
                    this.state.formData.gender
                      ? this.state.formData.gender : ""}
                  name="gender" id="gender"
                  onChange={this.onChangeHandler}>
                  <option value="">---</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group per-info">
                <button
                  onClick={this.nextFormField}
                  type="button"
                  data-type="next"
                  data-id="personal-info">
                  Next
                </button>
              </div>
            </div>
            : null}
          {this.state.showJobInfoField ?
            <div id="job" className="job-info">
              <div className="form-group">
                <h4>Job Information</h4>
                <div className="form-group">
                  <input
                    type="text"
                    name="jobtitle"
                    placeholder="Job Role"
                    value={this.state.formData.jobtitle
                      ? this.state.formData.jobtitle : ""}
                    required
                    onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={this.state.formData.company
                      ? this.state.formData.company : ""}
                    required
                    onChange={this.onChangeHandler} />
                </div>
                <div className="form-group job-info">
                  <button
                    onClick={this.nextFormField}
                    type="button"
                    data-type="back"
                    data-id="job-info">
                    Back
                </button>
                  <button
                    onClick={this.nextFormField}
                    type="button"
                    data-type="next"
                    data-id="job-info">
                    Next
                </button>
                </div>
              </div>
            </div>
            : null}
          {this.state.showSecurityInfoField ?
            <div id="security" className="security-info">
              <div className="form-group">
                <h4>Security Information</h4>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={this.state.formData.password
                    ? this.state.formData.password : ""}
                  required
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  value={this.state.formData.cpassword
                    ? this.state.formData.cpassword : ""}
                  required
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="error-message" id="error-message">
                <p> Password should match</p>
              </div>
              <div className="form-group sec-info">
                <button
                  onClick={this.nextFormField}
                  type="button"
                  data-type="back"
                  data-id="security-info">
                  Back
                </button>
                <button
                  onClick={this.props.closeSignupForm}
                  id="signup-submit"
                  type="submit">
                  Submit
                </button>
              </div>
            </div>
            : null}
        </form>
      </div>
    )
  }
};

export default Signup;