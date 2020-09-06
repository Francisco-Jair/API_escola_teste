
exports.up = function (knex) {
    return knex.schema.createTable('aula', function (table) {
        table.increments('id')
        table.text('nome')
        table.text('conteudo')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('aula')
};
