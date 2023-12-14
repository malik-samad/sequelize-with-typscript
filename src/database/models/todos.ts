import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import User from './user';

interface TodoAttributes{

  id?: number;
  title: string;
  user_id:number;
  isDone: boolean;

  updatedAt?: Date;
  deletedAt?: Date;
  createdAt?: Date;
}

class Todo extends Model<TodoAttributes> implements TodoAttributes {
  public id!: number;
  public title!: string;
  public user_id!:number;
  public isDone!: boolean;

  public readonly updatedAt!: Date;
  public readonly createdAt!: Date;
}

Todo.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER,
    }, 
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    user_id:{
      type: DataTypes.NUMBER,
      allowNull:false
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: connection,
    modelName: 'Todo',
  }
);

// associate
Todo.belongsTo(User, {
  as: 'user',
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
  foreignKeyConstraint: true,
});

export default Todo;
