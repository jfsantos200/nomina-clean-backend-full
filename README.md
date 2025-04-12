# nomina-clean-backend-full
📊 Nómina Clean Backend Full
Este es un backend limpio para la gestión de nómina, construido con Node.js, Express, TypeScript y MongoDB, aplicando principios de arquitectura limpia.
Permite gestionar empleados, ingresos, deducciones y generar nóminas de manera eficiente.

🚀 Características principales
Gestión de empleados

Gestión de ingresos por empleado

Gestión de deducciones ISR

Cálculo y generación de nóminas

Arquitectura limpia y escalable

Uso de TypeScript para un código más robusto

Conexión a base de datos MongoDB

Buenas prácticas de desarrollo

🧩 Tecnologías utilizadas
Node.js

Express

TypeScript

MongoDB
<img width="943" alt="image" src="https://github.com/user-attachments/assets/563d551d-2468-4c73-ad14-0cbde6f5d61a" />


Mongoose

Dotenv

ts-node-dev (para desarrollo)

⚙️ Instalación
Clona el repositorio

bash
Copiar
Editar
git clone https://github.com/jfsantos200/nomina-clean-backend-full.git
Instala las dependencias

bash
Copiar
Editar
cd nomina-clean-backend-full
npm install
Configura las variables de entorno

Crea un archivo .env en la raíz del proyecto y define las siguientes variables:

ini
Copiar
Editar
MONGODB_URI=tu_uri_de_mongodb
PORT=5000
Reemplaza tu_uri_de_mongodb por la cadena de conexión de tu base de datos.

Compila el proyecto

bash
Copiar
Editar
npm run build
Ejecuta el proyecto

bash
Copiar
Editar
npm start
O en modo desarrollo (si agregas el script en package.json):

bash
Copiar
Editar
npm run dev

🧪 Pruebas del proyecto
Actualmente no incluye pruebas automatizadas, pero está preparado para integrarlas con frameworks como Jest o Mocha.

📝 Endpoints principales
| Método | Endpoint                | Descripción                      |
|--------|-------------------------|----------------------------------|
| GET    | /api/empleados          | Listar todos los empleados       |
| POST   | /api/empleados          | Crear un nuevo empleado          |
| PUT    | /api/empleados/:id      | Actualizar un empleado           |
| DELETE | /api/empleados/:id      | Eliminar un empleado             |
| POST   | /api/ingresos           | Registrar un ingreso para un empleado |
| POST   | /api/nominas            | Generar una nómina               |

📂 Estructura del proyecto
MongoDB
Copiar
Editar
src/
├── application/
│   ├── controllers/
│   └── usecases/
├── domain/
│   ├── entities/
│   └── repositories/
├── infrastructure/
│   ├── database/
│   └── services/
├── app.ts
├── routes.ts
.env
.gitignore
package.json
tsconfig.json
README.md

🌟 Contribuciones
¡Las contribuciones son bienvenidas!
Si encuentras algún error o deseas mejorar el proyecto, abre un issue o envía un pull request.

📄 Licencia
Este proyecto está bajo la licencia Apache 2.0.

🙌 Autores

Jhonattan Santos

Nef  Ortis

Maria

Hector

GitHub
