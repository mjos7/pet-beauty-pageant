const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Post model
class Post extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      post_id: body.post_id,
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id,
        },
        attributes: [
          'id',
          'pet_type',
          'name',
          'image',
          'created_at',
          [
            sequelize.literal(
              '(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'
            ),
            'vote_count',
          ],
        ],
        include: [
          {
            model: models.Comment,
            attributes: [
              'id',
              'comment_text',
              'post_id',
              'user_id',
              'created_at',
            ],
            include: {
              model: models.User,
              attributes: ['username'],
            },
          },
        ],
      });
    });
  }
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    pet_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
