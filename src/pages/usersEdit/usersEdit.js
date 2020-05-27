import React from "react";
import "./usersEdit.scss";
import Layout from "../../components/layout/layout";
// import Form from "../../components/form/form";
// import User from "../../components/user/user";

// import Spinner from "../../components/spinner/spinner";

class UsersEdit extends React.Component {
  // state = {
  //   loading: false,
  //   error: null,
  //   form: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     jobTitle: "",
  //     twitter: "",
  //   },
  // };

  // componentDidMount() {
  //   this.fetchData();
  // }

  // fetchData = async (e) => {
  //   this.setState({ loading: true, error: null });

  //   try {
  //     const data = await api.users.read(this.props.match.params.userId);

  //     this.setState({ loading: false, form: data });
  //   } catch (error) {
  //     this.setState({ loading: false, error: error });
  //   }
  // };

  // handleChange = (e) => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   this.setState({ loading: true, error: null });

  //   try {
  //     await api.users.update(this.props.match.params.userId, this.state.form);
  //     this.setState({ loading: false });

  //     this.props.history.push("/users");
  //   } catch (error) {
  //     this.setState({ loading: false, error: error });
  //   }
  // };

  render() {
    // if (this.state.loading) {
    //   return <Spinner />;
    // }
    return <Layout></Layout>;
  }
}

export default UsersEdit;
