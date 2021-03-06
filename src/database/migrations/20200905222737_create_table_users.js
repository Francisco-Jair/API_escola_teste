
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id')
        table.text('nome')
        table.text('email')
        table.integer('tipo')//1 - Prof | 0 - Aluno


        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
