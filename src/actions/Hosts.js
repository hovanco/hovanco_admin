import * as Types from "./../constants/ActionTypes";
import { callApi } from "./../utils/apiCaller";

const token = localStorage.getItem("_access_token");

// **********************************************FETCH HOSTS********************************************
export const actFetchHostsRequest = () => {
  return (dispatch) => {
    return callApi("hosts?pageSize=15&sortBy=id", "GET", null, token).then(res => {
      return callApi("hosts?pageSize=15&sortBy=id").then(ress => {
        dispatch(actFetchHosts(ress.data));
      })
    });
  };
  // console.log("actFetchHostsRequest -> hovanco", res.data.data[8]);
  // console.log("actFetchHostsRequest -> hovanco2", res.data.data[8].hostCategory);
  // console.log("actFetchHostsRequest -> hovanco3", res.data.data[8].hostCategory.name);
  // dispatch(actFetchHosts(res.data.data))
}

export const actFetchHosts = (hosts) => {
  return {
    type: Types.FETCH_HOSTS,
    hosts
  }
}
// **********************************************DELETE HOST********************************************
export const actDeleteHostRequest = (id) => {
  return dispatch => {
    return callApi(`hosts?pageSize=15&sortBy=id/${id}`, "DELETE", null, token).then(res => {
      dispatch(actFetchHostsRequest())
    });
  }
}

export const actDeleteHost = (id) => {
  return {
    type: Types.DELETE_HOST,
    id
  }
}
// **********************************************ADD HOST********************************************
export const actAddHostRequest = (host) => {
  return dispatch => {
    return callApi(`hosts?pageSize=15&sortBy=id`, "POST", host, token).then(res => {
      return callApi(`hosts?pageSize=15&sortBy=id`).then(ress => {
        dispatch(actFetchHosts(ress.data));
      })
    });
  }
}

export const actAddHost = (host) => {
  return {
    type: Types.ADD_HOST,
    host
  }
}
// **********************************************GET HOST********************************************
export const actGetHostRequest = (id) => {
  return dispatch => {
    return callApi(`hosts?pageSize=15&sortBy=id/${id}`, "GET").then(res => {
      return callApi(`hosts?pageSize=15&sortBy=id`).then(ress => {
        dispatch(actGetHost(ress.data));
      })
    });
  }
}

export const actGetHost = (host) => {
  return {
    type: Types.EDIT_HOST,
    host
  }
}
// **********************************************UPDATE HOST********************************************
export const actUpdateHostRequest = (host) => {
  return dispatch => {
    return callApi(`hosts?pageSize=15&sortBy=id/${host.id}`, "PUT", host, token).then(res => {
      return callApi(`hosts?pageSize=15&sortBy=id`).then(ress => {
        dispatch(actFetchHosts(ress.data));
      })
    });
  }
}

export const actUpdateHost = (host) => {
  return {
    type: Types.UPDATE_HOST,
    host
  }
}