
exports.up = function (knex) {
    return knex.schema.createTable('aula', function (table) {
        table.increments('id')
        table.text('titulo')
        table.text('conteudo')

        table.integer('disciplina_id').references('disciplina.id').notNullable().onDelete('CASCADE')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('aula')
};
