
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('resources').insert([
        {resource_id: 1, resource_name: "foo", resource_description: null}
      
      ]);
};
