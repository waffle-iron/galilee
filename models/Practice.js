'use strict';

const db = require('../db');

class Practice extends db.Model {
    static get tableName() {
        return 'practice';
    }

    static get relationMappings() {
        return {
            resources: {
                relation: db.Model.ManyToManyRelation,
                modelClass: __dirname + '/Resource',
                join: {
                    from: 'practice.id',
                    through: {
                        from: 'practice_resource.practice_id',
                        to: 'practice_resource.resource_id'
                    },
                    to: 'resource.id'
                }
            },
            pericopes: {
                relation: db.Model.ManyToManyRelation,
                modelClass: __dirname + '/Pericope',
                join: {
                    from: 'practice.id',
                    through: {
                        from: 'pericope_practice.practice_id',
                        to: 'pericope_practice.pericope_id',
                        extra: ['advice']
                    },
                    to: 'pericope.id'
                }
            }
        }
    }

}

module.exports = Practice;
