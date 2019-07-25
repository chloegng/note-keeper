import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotes } from '../../actions/notes';
import Spinner from '../layout/Spinner';
import Notes from '../notes/Notes';

const Dashboard = ({ getNotes, auth: { user }, notes: { notes, loading } }) => {
  useEffect(() => {
    getNotes();
  }, []);
  return loading && notes === null ? <Spinner /> : <Fragment>
    <h1 className="large text-primary">Dashboard</h1>
    <p className="lead">
      <i className="fas fa-user"></i> Hi {user && user.name}
    </p>
    {notes != null ? (
      <Notes notes={notes} />
    ) : (
      <Fragment>
        You do not have any notes right now.
      </Fragment>
    )}
  </Fragment>
}

Dashboard.propTypes = {
  getNotes: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  notes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  notes: state.notes
});

export default connect(mapStateToProps, { getNotes })(Dashboard);