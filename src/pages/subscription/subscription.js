import React from "react";
import "./subscription.scss";
import Layout from "../../components/layout/layout";
import Form from "../../components/form/form";
// import User from "../../components/user/user";
import Spinner from "../../components/spinner/spinner";

class Subscription extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      this.setState({ loading: false });

      this.props.history.push("/users");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <Layout>
        <div className="subscription-container ">
          <Form />
        </div>
      </Layout>
    );
  }
}

export default Subscription;
