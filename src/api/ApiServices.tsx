import axios from "axios";
import { client, getApiUrl } from "./Config";
import { URLS } from "./baseUrl";

export const UserSignup = async (data: any, callback: any) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    fetch(getApiUrl(URLS.signup), requestOptions)
      .then((response) => response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};

export const UserLogin = async (data: any, callback: any) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    fetch(getApiUrl(URLS.LOGIN), requestOptions)
      .then((response) => response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};

export const UserProfileSetup = async (
  data: any,
  token: any,
  callback: any
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: data,
    redirect: "follow",
  };

  // console.log("FoemDataLocfgin",data)
  // const requestOptions = {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
  //     Authorization: 'Bearer ' +token,
  //   },
  //   body: data,
  // };

  // console.log("request",requestOptions)
  try {
    fetch(getApiUrl(URLS.PROFILE_SETUP), requestOptions)
      .then((response) => response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};

export const VerifyOtp = async (data: any, callback: any) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    fetch(getApiUrl(URLS.verifyOtp), requestOptions)
      .then((response) => response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};

export const VerifyResetOtp = async (data: any, callback: any) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    fetch(getApiUrl(URLS.VERIFY_RESET_OTP), requestOptions)
      .then((response) => response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};

export const ResetPasswordRequest = async (data: any, callback: any) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    fetch(getApiUrl(URLS.RESET_PASSWORD), requestOptions)
      .then((response) => response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};
export const ForgotPasswordRequest = async (data: any, callback: any) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    fetch(getApiUrl(URLS.FORGET_PASSWORD), requestOptions)
      .then((response) => response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};

export const ChangeUserPassword = async (
  data: any,
  token: any,
  callback: any
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Accept", "application/json");
  const requestOptions = {
    method: "POST",
    headers: myHeaders,

    body:  data
  };
  console.log("requestOptions",requestOptions)
  try {
    fetch(getApiUrl(URLS.CHANGE_USER_PASSWORD), requestOptions)
      .then((response) =>response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }
};

export const ChangeUserEmail = async (
  data: any,
  token: any,
  callback: any
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Accept", "application/json");
  const requestOptions = {
    method: "POST",
    headers: myHeaders,

    body:  data
  };
  console.log("requestOptions",requestOptions)
  try {
    fetch(getApiUrl(URLS.CHANGE_USER_EMAIL), requestOptions)
      .then((response) =>response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }
};


export const DeleteAccount = async (
  token: any,
  callback: any
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,

  };
  console.log("requestOptions",requestOptions)
  try {
    fetch(getApiUrl(URLS.DELETE_ACCOOUNT), requestOptions)
      .then((response) =>response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};

export const GetBlockedUser = async (
  token: any,
  callback: any
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,

  };
  console.log("requestOptions",requestOptions)
  try {
    fetch(getApiUrl(URLS.GET_BLOCKED_USER), requestOptions)
      .then((response) =>response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};
export const GetAuthUser = async (
  token: any,
  callback: any
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,

  };
  console.log("requestOptions",requestOptions)
  try {
    fetch(getApiUrl(URLS.GET_AUTH), requestOptions)
      .then((response) =>response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};
export const Follow = async (
  data:any,
  token: any,
  callback: any
) => {
  
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' +token,
},
body:JSON.stringify(data)

  };

  try {
    fetch(getApiUrl(URLS.FOLLOW), requestOptions)
      .then((response) =>response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};
export const Favorite = async (
  data:any,
  token: any,
  callback: any
) => {
  
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' +token,
},
body:JSON.stringify(data)

  };

  try {
    fetch(getApiUrl(URLS.FAVORITE), requestOptions)
      .then((response) =>response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};

export const Blocked = async (
  data:any,
  token: any,
  callback: any
) => {
  
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' +token,
},
body:JSON.stringify(data)

  };

  try {
    fetch(getApiUrl(URLS.BLOCKED), requestOptions)
      .then((response) =>response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};
export const isFollowing = async (
  data:any,
  token: any,
  callback: any
) => {
  
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' +token,
},
body:JSON.stringify(data)

  };

  try {
    fetch(getApiUrl(URLS.ISFOLLOWING), requestOptions)
      .then((response) =>response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};

export const getUserDetail = async (
  data:any,
  token: any,
  callback: any
) => {
  
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' +token,
},
body:JSON.stringify(data)

  };

  try {
    fetch(getApiUrl(URLS.GET_USER_DETAIL), requestOptions)
      .then((response) =>response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};
export const GetAllUsers = async (
  data,
  token: any,
  callback: any,
) => {
  
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: "Bearer "+token,
      Accept: 'application/json',
    },
    data:data,
  };
  try {
    fetch(getApiUrl(URLS.GET_ALL_USER), requestOptions)
    .then((response) =>response.json())
    .then((result) => callback({ isSuccess: true, response: result }))

    .catch((error) =>console.log(error));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

}
export const SearchUserName = async (
  data,
  token: any,
  callback: any,
) => {
  
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: "Bearer "+token,
      Accept: 'application/json',
    },
    body:data,
  };
  try {
    fetch(getApiUrl(URLS.SEARCH_USER_BY_NAME), requestOptions)
    .then((response) =>response.json())
    .then((result) => callback({ isSuccess: true, response: result }))

    .catch((error) =>console.log(error));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

}

export const ResendOtp = async (data: any, callback: any) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    fetch(getApiUrl(URLS.RESEND_OTP), requestOptions)
      .then((response) => response.text())
      .then((result) => callback({ isSuccess: true, response: result }))
      .catch((error) => callback({ isSuccess: false, response: error }));
  } catch (error) {
    return { isSuccess: false, error: error };
  }

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
};