// @ts-check

export default {
  translation: {
    appName: 'Task Manager',
    flash: {
      session: {
        create: {
          success: 'You are logged in',
          error: 'Wrong email or password',
        },
        delete: {
          success: 'You are logged out',
        },
      },
      users: {
        create: {
          error: 'Failed to register',
          success: 'User registered successfully',
        },
        update: {
          error: 'Failed to update user',
          success: 'User updated successfully',
        },
        delete: {
          error: 'Failed to delete user',
          success: 'User deleted successfully',
        },
        onlyOwnerAccess: 'You cannot update or delete another user',
      },
      authError: 'Access denied! Please login',
    },
    layouts: {
      application: {
        users: 'Users',
        signIn: 'Login',
        signUp: 'Register',
        signOut: 'Logout',
        toggleNav: 'Toggle navigation',
        close: 'Close',
        hexlet: 'Hexlet',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Login',
          submit: 'Login',
        },
      },
      users: {
        users: 'Users',
        id: 'ID',
        firstName: 'First name',
        lastName: 'Last name',
        fullName: 'Full name',
        email: 'Email',
        password: 'Password',
        actions: 'Actions',
        updateAction: 'Edit',
        deleteAction: 'Delete',
        createdAt: 'Created at',
        new: {
          submit: 'Save',
          signUp: 'Register',
        },
        update: {
          title: 'Edit user',
          submit: 'Update',
        },
      },
      welcome: {
        index: {
          hello: 'Hello from Hexlet!',
          description: 'Online programming school',
          more: 'Learn more',
        },
      },
    },
  },
};
