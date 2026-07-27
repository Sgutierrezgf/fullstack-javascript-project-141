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
        },
        onlyOwnerAccess: 'No puedes editar o eliminar a otro usuario',
      },
      authError: '¡Acceso denegado! Por favor, inicia sesión.',
    },
    layouts: {
      application: {
        users: 'Usuarios',
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
