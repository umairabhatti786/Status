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

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
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

  // fetch(getApiUrl(URLS.signup), requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("created",data);
  //   })
  //   .catch((error) => {
  //     console.error("createdError",error);
  //   });
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
export const GetAllUsers = async (
  data,
  token: any,
  callback: any,
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type","application/x-www-form-urlencoded'")
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' +token,
},
    body: data


  };
  console.log("requestOptions",requestOptions)
  try {
    fetch(getApiUrl(URLS.GTE_ALL_USER), requestOptions)
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
