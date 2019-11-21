import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.stuff.titulo}</Table.Cell>
          <Table.Cell>{this.props.stuff.anoEstreno}</Table.Cell>
          <Table.Cell>{this.props.stuff.genero}</Table.Cell>
          <Table.Cell>{this.props.stuff.duracion}</Table.Cell>
          <Table.Cell>{this.props.stuff.calificacion}</Table.Cell>
          <Table.Cell>{this.props.stuff.poster}</Table.Cell>
          <Table.Cell>{this.props.stuff.actoresPrincipales}</Table.Cell>
          <Table.Cell>{this.props.stuff.sinopsis}</Table.Cell>
          <Table.Cell>{this.props.stuff.resena}</Table.Cell>
          <Table.Cell>{this.props.stuff.director}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
