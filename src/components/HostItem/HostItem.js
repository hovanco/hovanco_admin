import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

class HostItem extends Component {
  onDelete = (id) => {
    if (confirm("ban muon xoa?")) {//eslint-disable-line
      this.props.onDelete(id)
    }
  }

  onSelectHost = id => {
    this.props.onSelect(id)
  }

  handleApproveHost = id => {
    const tken = localStorage.getItem("_access_token")
    console.log(id, tken, "id, tken");

    var config = {
      method: 'put',
      url: `https://town-house-api-seven-team.herokuapp.com/api/admin/hosts/approved/${id}`,
      headers: {
        'Authorization': `Bearer ${tken}`
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data.data.approved, "data nè"));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    var { host, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{host.user.fullName}</td>
        <td>{host.name}</td>
        <td>{host.standardPriceMondayToThursday}</td>
        <td>{host.hostCategory.name}</td>
        <td>{host.hostCity.name}</td>
        <td>
          {host.approved ?
            "Approved"
            :
            <span onClick={e => this.handleApproveHost(host.id)}>Not Approved</span>
          }
        </td>
        {/* <td>
          <Link to={`/host/${host.id}/edit`} className="btn btn-warning mr-10">Update</Link>
        </td> */}
      </tr>
    )
  }
}
export default HostItem;