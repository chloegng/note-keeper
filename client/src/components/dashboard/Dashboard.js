import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getNotes } from '../../actions/notes'

const Dashboard = ({ getNotes, auth, notes }) => {
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div>
      Dashboard
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  notes: state.notes
});

export default connect(mapStateToProps, { getNotes })(Dashboard);