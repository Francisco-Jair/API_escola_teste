
exports.up = function (knex) {
    return knex.schema.createTable('turma_users', function (table) {
        table.integer('users_id').references('users.id').notNullable().onDelete('CASCADE')
        table.integer('turma_id').references('turma.id').notNullable().onDelete('CASCADE')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('turma_users')
};
