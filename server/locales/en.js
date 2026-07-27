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
      statuses: {
        create: {
          error: 'Failed to create status',
          success: 'Status created successfully',
        },
        update: {
          error: 'Failed to update status',
          success: 'Status updated successfully',
        },
        delete: {
          error: 'Failed to delete status',
          success: 'Status deleted successfully',
        },
      },
      authError: 'Access denied! Please login',
    },
    layouts: {
      application: {
        users: 'Users',
        statuses: 'Statuses',
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
      statuses: {
        statuses: 'Statuses',
        createAction: 'Create status',
        id: 'ID',
        name: 'Name',
        createdAt: 'Created at',
        actions: 'Actions',
        updateAction: 'Edit',
        deleteAction: 'Delete',
        new: {
          title: 'Create status',
          submit: 'Create',
        },
        update: {
          title: 'Edit status',
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
