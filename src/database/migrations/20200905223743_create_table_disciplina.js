
exports.up = function (knex) {
    return knex.schema.createTable('disciplina', function (table) {
        table.increments('id')
        table.text('codigo')

        table.integer('turma_id').references('turma.id').notNullable().onDelete('CASCADE')
        
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('disciplina')
};
