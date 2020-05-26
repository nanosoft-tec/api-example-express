npm init -y
npm eslint --init
npx sequelize migration:create --name
npx sequelize db:migrate
--npx sequelize db:migrate:undo
npx sequelize seed:generate --name mock-users
npx sequelize db:seed:all

index -> Busca todos -> GET
store/create - Cria -> POST
delete -> Exclui -> DELETE
show -> Busca um -> GET
update -> Atualiza -> PATCH ou PUT
