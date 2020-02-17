import React from 'react';
import userAPI from '../../utils/userAPI';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UserProfileForm({ userId }) {
  const [currentUser, setCurrentUser] = React.useState({
    userId: userId,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isActive: false,
    onMarketingList: false,
    roleName: '',
    roleId: ''
  });

  const [successAlertShow, setSuccessAlertShow] = React.useState(false);
  const [failureAlertShow, setFailureAlertShow] = React.useState(false);

  React.useEffect(() => {
    userAPI
      .getUser(userId)
      .then(res =>
        setCurrentUser({
          ...currentUser,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          password: res.data.password,
          isActive: res.data.isActive,
          onMarketingList: res.data.onMarketingList,
          roleName: res.data.Role.name,
          roleId: res.data.Role.id
        })
      )
      .catch(err => console.log(err));
  }, [userId]);

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name) {
      setCurrentUser({ ...currentUser, [name]: value });
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    userAPI
      .updateUser(userId, {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        password: currentUser.password,
        RoleId: currentUser.roleId,
        isActive: currentUser.isActive,
        onMarketingList: currentUser.onMarketingList
      })
      .then(res => setSuccessAlertShow(true))
      .catch(err => {
        console.log(err);
        setFailureAlertShow(true);
      });
  }

  return (
    <>
      {currentUser.firstName && (
        <div>
          <h3>User Info</h3>
          <Alert
            show={successAlertShow}
            variant="success"
            dismissible
            onClose={() => setSuccessAlertShow(false)}
          >
            Profile updated!
          </Alert>
          <Alert
            show={failureAlertShow}
            variant="danger"
            dismissible
            onClose={() => setFailureAlertShow(false)}
          >
            Oops, something went wrong! Check the form for missing fields.
          </Alert>
          <Form>
            <Form.Group controlId="formGroupAddFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="firstName"
                value={currentUser.firstName}
                type="name"
                onChange={handleInputChange}
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formGroupAddLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                type="name"
                value={currentUser.lastName}
                onChange={handleInputChange}
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formGroupAddEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={currentUser.email}
                onChange={handleInputChange}
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formGroupAddPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={currentUser.password}
                onChange={handleInputChange}
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formGroupAddIsActiveCheckbox">
              <Form.Check
                name="isActive"
                type="checkbox"
                onChange={handleInputChange}
                label="Is Active"
                checked={currentUser.isActive}
              />
            </Form.Group>
            <Form.Group controlId="formGroupAddMarketingCheckbox">
              <Form.Check
                name="onMarketingList"
                type="checkbox"
                onChange={handleInputChange}
                label="On Marketing List"
                checked={currentUser.onMarketingList}
              />
            </Form.Group>
            <Form.Group>
              <Button onClick={handleFormSubmit}>Submit</Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  );
}

export default UserProfileForm;
