// @ts-check

export default {
  translation: {
    appName: 'Gestor de Tareas',
    flash: {
      session: {
        create: {
          success: 'Has iniciado sesión',
          error: 'Email o contraseña incorrectos',
        },
        delete: {
          success: 'Has cerrado sesión',
        },
      },
      users: {
        create: {
          error: 'No se pudo registrar',
          success: 'Usuario registrado correctamente',
        },
      },
      authError: '¡Acceso denegado! Por favor, inicia sesión',
    },
    layouts: {
      application: {
        users: 'Usuarios',
        signIn: 'Iniciar sesión',
        signUp: 'Registrarse',
        signOut: 'Cerrar sesión',
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
        id: 'ID',
        email: 'Email',
        createdAt: 'Creado el',
        new: {
          submit: 'Guardar',
          signUp: 'Registrarse',
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
