import { Sequelize } from 'sequelize';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME } from '../configs';

let sequelizeConnection: Sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  port: 3306, 
});

export default sequelizeConnection;
