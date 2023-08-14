import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SettingPage = () => {
  const navigate = useNavigate();
  const { name: oldName, email: oldEmail } = useSelector(
    (state) => state.user.personalInfo
  );
  const { isLoggedIn } = useSelector((state) => state.user);

  const [name, setName] = useState(oldName);
  const [email, setEmail] = useState(oldEmail);
  const [newPassword, setNewPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");

  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isPasswordEditable, setIsPasswordEditable] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-up");
    }
  }, [isLoggedIn, navigate]);
  const handleUpdateName = () => {
    setIsNameEditable(true);
  };

  const handleUpdateEmail = () => {
    setIsEmailEditable(true);
  };

  const handleUpdatePassword = () => {
    setIsPasswordEditable(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleReenteredPasswordChange = (e) => {
    setReenteredPassword(e.target.value);
  };

  const handlePasswordUpdate = () => {
    if (newPassword !== reenteredPassword) {
      console.log("Passwords do not match");
      toast.error("Passwords do not match", { autoClose: 1000 });
    } else {
      console.log("Updating password:", newPassword);
      // send the password to the backend
      toast.error("functionality will be added soon", { autoClose: 1000 });

      setIsPasswordEditable(false);
    }
  };

  const handleEmailUpdate = () => {
    console.log("Updating email:", email);
    // send the email to the backend
    toast.error("functionality will be added soon", { autoClose: 1000 });

    setIsEmailEditable(false);
  };

  const handleNameUpdate = () => {
    console.log("Updating name:", name);
    toast.error("functionality will be added soon", { autoClose: 1000 });

    // send the name to the backend
    setIsNameEditable(false);
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <div className="mt-20 max-w-[500px] flex flex-col gap-4 mx-auto">
        <div className="flex justify-between items-center">
          {isNameEditable ? (
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="border rounded-lg p-2 bg-gray-500 text-white"
            />
          ) : (
            <span>{name}</span>
          )}
          {isNameEditable ? (
            <button
              className="cursor-pointer bg-green-500 px-4 py-2 rounded-lg min-w-[100px]"
              onClick={handleNameUpdate}
            >
              Save
            </button>
          ) : (
            <button
              className="cursor-pointer bg-gray-500 px-4 py-2 rounded-lg min-w-[100px]"
              onClick={handleUpdateName}
            >
              Edit
            </button>
          )}
        </div>
        <div className="flex justify-between items-center">
          {isEmailEditable ? (
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="border rounded-lg p-2 bg-gray-500 text-white"
            />
          ) : (
            <span>{email}</span>
          )}
          {isEmailEditable ? (
            <button
              className="cursor-pointer bg-green-500 px-4 py-2 rounded-lg min-w-[100px]"
              onClick={handleEmailUpdate}
            >
              Save
            </button>
          ) : (
            <button
              className="cursor-pointer bg-gray-500 px-4 py-2 rounded-lg min-w-[100px]"
              onClick={handleUpdateEmail}
            >
              Edit
            </button>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {isPasswordEditable ? (
            <>
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                className="border rounded-lg p-2 bg-gray-500 text-white"
              />
              <input
                type="password"
                placeholder="Re-enter New Password"
                value={reenteredPassword}
                onChange={handleReenteredPasswordChange}
                className="border rounded-lg p-2 bg-gray-500 text-white"
              />
              <button
                className="cursor-pointer bg-green-500 px-4 py-2 rounded-lg"
                onClick={handlePasswordUpdate}
              >
                Update Password
              </button>
            </>
          ) : (
            <>
              <span>********</span>
              <button
                className="cursor-pointer bg-gray-500 px-4 py-2 rounded-lg min-w-[100px]"
                onClick={handleUpdatePassword}
              >
                Change Password
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingPage;
