import React from "react";
// import { Link } from "react-router-dom";

import "./users.scss";
import Layout from "../../components/layout/layout";

// import Spinner from "../../components/spinner/spinner";
// import PageError from "../../components/pageError/pageError";

class Users extends React.Component {
  // state = {
  //   loading: true,
  //   error: null,
  //   data: undefined,
  // };

  // componentDidMount() {
  //   this.fetchData();
  // }

  // fetchData = async () => {
  //   this.setState({ loading: true, error: null });

  //   try {
  //     const data = await api.users.list();
  //     this.setState({ loading: false, data: data });
  //   } catch (error) {
  //     this.setState({ loading: false, error: error });
  //   }
  // };

  render() {
    // if (this.state.loading === true) {
    //   return <Spinner />;
    // }

    // if (this.state.error) {
    //   return <PageError error={this.state.error} />;
    // }

    return (
      <div>
        <Layout></Layout>
      </div>
    );
  }
}

export default Users;
