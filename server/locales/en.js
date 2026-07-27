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
          hasTasks: 'Cannot delete user with related tasks',
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
          errorTask: 'Cannot delete status connected to a task',
        },
      },
      labels: {
        create: {
          error: 'Failed to create label',
          success: 'Label created successfully',
        },
        update: {
          error: 'Failed to update label',
          success: 'Label updated successfully',
        },
        delete: {
          error: 'Failed to delete label',
          success: 'Label deleted successfully',
          errorTask: 'Cannot delete label connected to a task',
        },
      },
      tasks: {
        create: {
          error: 'Failed to create task',
          success: 'Task created successfully',
        },
        update: {
          error: 'Failed to update task',
          success: 'Task updated successfully',
        },
        delete: {
          error: 'Only the author can delete this task',
          success: 'Task deleted successfully',
        },
      },
      authError: 'Access denied! Please login',
    },
    layouts: {
      application: {
        users: 'Users',
        statuses: 'Statuses',
        labels: 'Labels',
        tasks: 'Tasks',
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
      labels: {
        labels: 'Labels',
        createAction: 'Create label',
        id: 'ID',
        name: 'Name',
        createdAt: 'Created at',
        actions: 'Actions',
        updateAction: 'Edit',
        deleteAction: 'Delete',
        new: {
          title: 'Create label',
          submit: 'Create',
        },
        update: {
          title: 'Edit label',
          submit: 'Update',
        },
      },
      tasks: {
        tasks: 'Tasks',
        createAction: 'Create task',
        id: 'ID',
        name: 'Name',
        description: 'Description',
        status: 'Status',
        creator: 'Creator',
        executor: 'Executor',
        labels: 'Labels',
        createdAt: 'Created at',
        actions: 'Actions',
        updateAction: 'Edit',
        deleteAction: 'Delete',
        new: {
          title: 'Create task',
          submit: 'Create',
        },
        update: {
          title: 'Edit task',
          submit: 'Update',
        },
        show: {
          back: 'Back',
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
