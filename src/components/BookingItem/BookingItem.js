import React, { Component } from "react";
// import { Link } from 'react-router-dom';

class BookingItem extends Component {
  onDelete = (id) => {
    if (confirm("ban muon xoa?")) {//eslint-disable-line
      this.props.onDelete(id)
    }
  }

  onSelectBooking = id => {
    this.props.onSelect(id)
  }
  
  render() {
    var { booking, index } = this.props;
    return (
      <tr>
        {/* <td>
          <input type="checkbox"
            className=""
            checked={this.props.checked}
            onChange={() => this.onSelectBooking(booking.id)}
          />
        </td> */}
        <td>{index + 1}</td>
        <td>{booking.bookingCode}</td>
        <td>{booking.checkInDate}</td>
        <td>{booking.checkOutDate}</td>
        <td>{booking.pricePerNight}</td>
        <td>{booking.totalPrice}</td>
        {/* <td>
          <Link to={`/booking/${booking.id}/edit`} className="btn btn-warning mr-10">Update</Link>
        </td> */}
      </tr>
    )
  }
}
export default BookingItem;
