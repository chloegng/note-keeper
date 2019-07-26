import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotes } from '../../actions/notes';
import Spinner from '../layout/Spinner';
import Notes from '../notes/Notes';
import { Link } from 'react-router-dom';

const Dashboard = ({ getNotes, auth: { user }, notes: { notes, loading }, history }) => {
  useEffect(() => {
    getNotes();
  }, []);
  
  return (
    <div className="dashboard">
      <h1 className="large text-primary pt-4">Dashboard</h1>
      <div className="header">
        {loading && notes === null ? <Spinner /> : <Fragment>
          <div className="row">
            <p className="lead col">
              <i className="fas fa-user"></i> Hi {user && user.name}
            </p>
            <Link to="/add"><button className="btn btn-primary col"><i className="fas fa-plus" /> Add Note</button></Link>
          </div>
          { notes && notes.length > 0 ? (
            <Notes notes={notes} history={history} /> 
          ) : (
            <Fragment>
              <div className="row m-1">
                <h5>You do not have any notes at the moment.</h5>
              </div>
            </Fragment>
          )}
        </Fragment>
        }
      </div>
    </div>
  )
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