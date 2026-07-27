// @ts-check

export default {
  translation: {
    appName: 'Gestor de Tareas',
    flash: {
      session: {
        create: {
          success: 'Has iniciado sesión',
          error: 'Correo electrónico o contraseña incorrectos',
        },
        delete: {
          success: 'Has cerrado sesión',
        },
      },
      users: {
        create: {
          error: 'No se pudo registrar el usuario',
          success: 'Usuario registrado con éxito',
        },
        update: {
          error: 'No se pudo actualizar el usuario',
          success: 'Usuario actualizado con éxito',
        },
        delete: {
          error: 'No se pudo eliminar el usuario',
          success: 'Usuario eliminado con éxito',
          hasTasks: 'No se puede eliminar el usuario porque tiene tareas asociadas',
        },
        onlyOwnerAccess: 'No puedes editar o eliminar a otro usuario',
      },
      statuses: {
        create: {
          error: 'No se pudo crear el estado',
          success: 'Estado creado con éxito',
        },
        update: {
          error: 'No se pudo actualizar el estado',
          success: 'Estado actualizado con éxito',
        },
        delete: {
          error: 'No se pudo eliminar el estado',
          success: 'Estado eliminado con éxito',
          errorTask: 'No se puede eliminar el estado porque está asignado a tareas',
        },
      },
      tasks: {
        create: {
          error: 'No se pudo crear la tarea',
          success: 'Tarea creada con éxito',
        },
        update: {
          error: 'No se pudo actualizar la tarea',
          success: 'Tarea actualizada con éxito',
        },
        delete: {
          error: 'Solo el autor puede eliminar esta tarea',
          success: 'Tarea eliminada con éxito',
        },
      },
      authError: '¡Acceso denegado! Por favor, inicia sesión.',
    },
    layouts: {
      application: {
        users: 'Usuarios',
        statuses: 'Estados',
        tasks: 'Tareas',
        signIn: 'Iniciar sesión',
        signUp: 'Registrarse',
        signOut: 'Cerrar sesión',
        toggleNav: 'Alternar navegación',
        close: 'Cerrar',
        hexlet: 'Hexlet',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Iniciar sesión',
          submit: 'Entrar',
        },
      },
      users: {
        users: 'Usuarios',
        id: 'ID',
        firstName: 'Nombre',
        lastName: 'Apellido',
        fullName: 'Nombre completo',
        email: 'Correo electrónico',
        password: 'Contraseña',
        actions: 'Acciones',
        updateAction: 'Editar',
        deleteAction: 'Eliminar',
        createdAt: 'Fecha de creación',
        new: {
          submit: 'Guardar',
          signUp: 'Registrarse',
        },
        update: {
          title: 'Editar usuario',
          submit: 'Actualizar',
        },
      },
      statuses: {
        statuses: 'Estados',
        createAction: 'Crear estado',
        id: 'ID',
        name: 'Nombre',
        createdAt: 'Fecha de creación',
        actions: 'Acciones',
        updateAction: 'Editar',
        deleteAction: 'Eliminar',
        new: {
          title: 'Crear estado',
          submit: 'Crear',
        },
        update: {
          title: 'Editar estado',
          submit: 'Actualizar',
        },
      },
      tasks: {
        tasks: 'Tareas',
        createAction: 'Crear tarea',
        id: 'ID',
        name: 'Nombre',
        description: 'Descripción',
        status: 'Estado',
        creator: 'Autor',
        executor: 'Ejecutor',
        createdAt: 'Fecha de creación',
        actions: 'Acciones',
        updateAction: 'Editar',
        deleteAction: 'Eliminar',
        new: {
          title: 'Crear tarea',
          submit: 'Crear',
        },
        update: {
          title: 'Editar tarea',
          submit: 'Actualizar',
        },
        show: {
          back: 'Volver',
        },
      },
      welcome: {
        index: {
          hello: '¡Hola desde Hexlet!',
          description: 'Cursos prácticos de programación',
          more: 'Saber más',
        },
      },
    },
  },
};
